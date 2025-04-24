#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import {
  callTool,
  listResources,
  listTools,
  readResource,
  setNftgoApiKey,
  getNftgoApiKey,
} from './nftgo.js';

const server = new Server(
  {
    name: 'nftgo-api',
    description: 'This is an assistant for NFT data in ethereum build with NFTGo API V1.1',
    version: '0.1.0',
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

const args = process.argv.slice(2);
setNftgoApiKey(args[0]);

if (args.length === 0 || !getNftgoApiKey()) {
  console.error('Please provide a valid NFTGo API key as a command-line argument');
  process.exit(1);
}

server.setRequestHandler(ListResourcesRequestSchema, listResources);

server.setRequestHandler(ReadResourceRequestSchema, async request => {
  const uri = request.params.uri;
  return readResource(uri);
});

server.setRequestHandler(ListToolsRequestSchema, listTools);

server.setRequestHandler(CallToolRequestSchema, callTool);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main();
