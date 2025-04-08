import { z } from 'zod';
import { CallToolRequest } from '@modelcontextprotocol/sdk/types.js';
import { openapiSpec as openapiSpecJson } from './openapi-spec.js';

let nftgoApiKey: string;
const host = 'https://data-api.nftgo.io';

const RequestSchema = z.object({
  type: z.enum(['POST', 'GET', 'PUT', 'DELETE']),
  url: z.string(),
  headers: z.record(z.string(), z.string()),
  body: z.any(),
});

const openapiSpec = openapiSpecJson as ApiSpec;
type ApiSpec = {
  paths: {
    [key: string]: PathSchema;
  };
  components: {
    schemas: {
      [key: string]: object;
    };
  };
};
type PathSchema = {
  get?: {
    summary?: string;
    description?: string;
    parameters?: Array<{
      name: string;
      in: string;
      description: string;
      required: boolean;
      schema: {
        type: string;
      };
    }>;
    requestBody?: {
      content?: {
        'application/json'?: {
          schema?: {
            $ref?: string;
          };
        };
      };
    };
    [key: string]: string | object | undefined;
  };
  post?: {
    summary?: string;
    description?: string;
    parameters?: Array<{
      name: string;
      in: string;
      description: string;
      required: boolean;
      schema: {
        type: string;
      };
    }>;
    requestBody?: {
      content?: {
        'application/json'?: {
          schema?: {
            $ref?: string;
          };
        };
      };
    };
    [key: string]: string | object | undefined;
  };
};

export function getNftgoApiKey() {
  return nftgoApiKey;
}

export function setNftgoApiKey(key: string) {
  nftgoApiKey = key;
}

export async function makeRequest(
  url: string,
  type: string,
  headers: Record<string, string>,
  body: any
) {
  try {
    headers['X-API-KEY'] = getNftgoApiKey();
    const response = await fetch(url, {
      method: type,
      headers,
      body: body && (type === 'POST' || type === 'PUT') ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return {
      status: response.status,
      data: await response.text(),
      headers: Object.fromEntries(response.headers),
    };
  } catch (error) {
    console.error('Error making request:', error);
    throw error;
  }
}

export function listResources() {
  const resources = [];
  for (let [path, schema] of Object.entries(openapiSpec.paths)) {
    schema = schema as PathSchema;
    const detail = schema.get || schema.post;
    resources.push({
      uri: new URL(`${host}${path}`).href,
      mimeType: 'application/json',
      name: `${detail?.summary || detail?.description} API Doc`,
    });
  }
  return {
    resources: resources,
  };
}

function getAPIRequestSpec(path: string) {
  const schema = openapiSpec.paths[path];
  const detail = schema.get || schema.post;
  const spec: any = {
    method: schema.get ? 'GET' : 'POST',
  };
  if (detail?.parameters) {
    spec.parameters = detail.parameters;
  }
  if (detail?.requestBody) {
    const bodyRef = detail.requestBody?.content?.['application/json']?.schema?.['$ref'];
    if (bodyRef) {
      const bodySchema =
        openapiSpec.components?.schemas?.[bodyRef.replace('#/components/schemas/', '')];
      spec.body = bodySchema;
    }
  }
  return JSON.stringify(spec, null, 2);
}

export function readResource(uri: string) {
  const path = decodeURIComponent(uri.replace(host, ''));
  return {
    contents: [
      {
        uri,
        mimeType: 'application/json',
        text: getAPIRequestSpec(path),
      },
    ],
  };
}

export function listTools() {
  return {
    tools: [
      {
        name: 'request',
        description: `Make an HTTP to NFTGo API(${host}) request with curl`,
        inputSchema: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              description: 'Type of the request. GET, POST, PUT, DELETE',
            },
            url: {
              type: 'string',
              description: 'Url to make the request to',
            },
            headers: {
              type: 'object',
              description: 'Headers to include in the request',
            },
            body: {
              type: 'object',
              description: 'Body to include in the request',
            },
          },
          required: ['type', 'url', 'headers', 'body'],
        },
      },
      {
        name: 'api-path-schema',
        description: `Get detail description and parameters of a NFT API path`,
        inputSchema: {
          type: 'object',
          properties: {
            path: {
              type: 'string',
              description:
                'Path to get the api detail of, format should be like: /eth/v1/nft/name/{keywords} or /eth/v1/nft/{contract}/{tokenId}/metrics',
            },
          },
          required: ['path'],
        },
      },
      {
        name: 'api-documentation',
        description: `Get all NFT API documentation and endpoints`,
        inputSchema: {
          type: 'object',
          properties: {},
          required: [],
        },
      },
    ],
  };
}

export async function callTool(request: CallToolRequest) {
  const { name, arguments: args } = request.params;

  try {
    if (name === 'request') {
      const { type, url, headers, body } = RequestSchema.parse(args);
      const response = await makeRequest(url, type, headers, body);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              response,
            }),
          },
        ],
      };
    } else if (name === 'api-documentation') {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(listResources()),
          },
        ],
      };
    } else if (name === 'api-path-schema') {
      return {
        content: [
          {
            type: 'text',
            text: getAPIRequestSpec(request.params.arguments?.path as string),
          },
        ],
      };
    } else {
      throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(
        `Invalid arguments: ${error.errors
          .map(e => `${e.path.join('.')}: ${e.message}`)
          .join(', ')}`
      );
    }
    throw error;
  }
}
