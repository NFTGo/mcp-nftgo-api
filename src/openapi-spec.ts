export const openapiSpec = {
  openapi: '3.0.2',
  servers: [
    {
      url: 'https://data-api.nftgo.io/',
    },
  ],
  paths: {
    '/eth/v1/nft/name/{keywords}': {
      get: {
        summary: 'Get NFTs by name',
        description: 'Return NFTs by keywords, you can search NFTs by token name.',
        parameters: [
          {
            description: 'Keywords for the name in the collection search',
            required: true,
            schema: {
              title: 'Keywords',
              type: 'string',
              description: 'Keywords for the name in the collection search',
            },
            name: 'keywords',
            in: 'path',
          },
        ],
      },
    },
    '/eth/v1/nft/{contract_address}/{token_id}/info': {
      get: {
        summary: 'Get NFT by Token ID',
        description: 'Return basic information about a single NFT',
        parameters: [
          {
            description: 'Address of the contract for this NFT collection',
            required: true,
            schema: {
              title: 'Contract Address',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Address of the contract for this NFT collection',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'contract_address',
            in: 'path',
          },
          {
            description:
              'The token ID for this NFT. Each item in an NFT collection     will be assigned a unique id.',
            required: true,
            schema: {
              title: 'Token Id',
              type: 'string',
              description:
                'The token ID for this NFT. Each item in an NFT collection     will be assigned a unique id.',
            },
            example: '4495',
            name: 'token_id',
            in: 'path',
          },
        ],
      },
    },
    '/eth/v1/nft/{contract_address}/{token_id}/metrics': {
      get: {
        summary: 'Get metrics by NFT',
        description: 'Return NFT metrics given a contract address and a token id.',
        parameters: [
          {
            description: 'Address of the contract for this NFT collection',
            required: true,
            schema: {
              title: 'Contract Address',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Address of the contract for this NFT collection',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'contract_address',
            in: 'path',
          },
          {
            description:
              'The token ID for this NFT. Each item in an NFT collection     will be assigned a unique id.',
            required: true,
            schema: {
              title: 'Token Id',
              minimum: 0.0,
              type: 'integer',
              description:
                'The token ID for this NFT. Each item in an NFT collection     will be assigned a unique id.',
            },
            example: '4495',
            name: 'token_id',
            in: 'path',
          },
        ],
      },
    },
    '/eth/v1/nft/holders': {
      get: {
        summary: 'Get holder(s) by NFT',
        parameters: [
          {
            description: 'Address of the contract for this NFT collection',
            required: false,
            schema: {
              title: 'Contract',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Address of the contract for this NFT collection',
              default: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'contract',
            in: 'query',
          },
          {
            description:
              'The token ID for this NFT. Each item in an NFT collection     will be assigned a unique id.',
            required: false,
            schema: {
              title: 'Token Id',
              type: 'string',
              description:
                'The token ID for this NFT. Each item in an NFT collection     will be assigned a unique id.',
              default: 4495,
            },
            example: 4495,
            name: 'token_id',
            in: 'query',
          },
          {
            description:
              'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
            required: false,
            schema: {
              title: 'Offset',
              minimum: 0.0,
              type: 'integer',
              description:
                'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
              default: 0,
            },
            example: 0,
            name: 'offset',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 50.0,
              minimum: 0.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 20,
            },
            example: 20,
            name: 'limit',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/address/collection': {
      get: {
        summary: 'Get collections by owner',
        description: 'Return the collections currently held or sold by the address.',
        parameters: [
          {
            description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
            required: false,
            schema: {
              title: 'Address',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
              default: '0x5ac69c26a15cfaaeb066043dcc932f7d01faf182',
            },
            example: '0x5ac69c26a15cfaaeb066043dcc932f7d01faf182',
            name: 'address',
            in: 'query',
          },
          {
            description: 'Collection-by categories.',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/PortfolioSortEnum',
                },
              ],
              description: 'Collection-by categories.',
              default: 'estValueEth',
            },
            example: 'estValueEth',
            name: 'sort_by',
            in: 'query',
          },
          {
            description:
              'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
            required: false,
            schema: {
              title: 'Offset',
              minimum: 0.0,
              type: 'integer',
              description:
                'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
              default: 0,
            },
            example: 0,
            name: 'offset',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 50.0,
              minimum: 0.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 20,
            },
            example: 20,
            name: 'limit',
            in: 'query',
          },
          {
            description: 'Whether to sort results in ascending order',
            required: false,
            schema: {
              title: 'Asc',
              type: 'boolean',
              description: 'Whether to sort results in ascending order',
              default: false,
            },
            example: false,
            name: 'asc',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/address/listings/related-collections': {
      get: {
        summary: 'Get listing related collections of an address',
        description: 'Return listing related collections of a wallet address.',
        parameters: [
          {
            description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
            required: false,
            schema: {
              title: 'Address',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
              default: '0x5ac69c26a15cfaaeb066043dcc932f7d01faf182',
            },
            example: '0x5ac69c26a15cfaaeb066043dcc932f7d01faf182',
            name: 'address',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/address/listings': {
      get: {
        summary: 'Get created listings of an address',
        description: 'Return created listings of a wallet address.',
        parameters: [
          {
            description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
            required: false,
            schema: {
              title: 'Address',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
              default: '0x5ac69c26a15cfaaeb066043dcc932f7d01faf182',
            },
            example: '0x5ac69c26a15cfaaeb066043dcc932f7d01faf182',
            name: 'address',
            in: 'query',
          },
          {
            description:
              'The collection filters is a array.The elements can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.Maximum size is 50.',
            required: false,
            schema: {
              title: 'Collections',
              type: 'string',
              description:
                'The collection filters is a array.The elements can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.Maximum size is 50.',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'collections',
            in: 'query',
          },
          {
            required: false,
            schema: {
              title: 'Markets',
              type: 'string',
            },
            name: 'markets',
            in: 'query',
          },
          {
            description: 'Keywords for the name in the collection search',
            required: false,
            schema: {
              title: 'Keywords',
              type: 'string',
              description: 'Keywords for the name in the collection search',
              default: '',
            },
            example: '#8956',
            name: 'keywords',
            in: 'query',
          },
          {
            description:
              'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
            required: false,
            schema: {
              title: 'Offset',
              minimum: 0.0,
              type: 'integer',
              description:
                'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
              default: 0,
            },
            example: 0,
            name: 'offset',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 50.0,
              minimum: 0.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 20,
            },
            example: 20,
            name: 'limit',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/address/ens/{ens}': {
      get: {
        summary: 'Get address by ENS',
        description: 'Return wallet address given an ENS name.',
        parameters: [
          {
            description: 'ENS domain.',
            required: true,
            schema: {
              title: 'Ens',
              type: 'string',
              description: 'ENS domain.',
            },
            example: 'yyh.eth',
            name: 'ens',
            in: 'path',
          },
        ],
      },
    },
    '/eth/v1/address/{address}/ens': {
      get: {
        summary: 'Get Ens by address',
        description: 'Return ENS name given a wallet address.',
        parameters: [
          {
            description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
            required: true,
            schema: {
              title: 'Address',
              type: 'string',
              description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
            },
            example: '0xcaf1d788c67BdAAC155E7dcC4D64e2004eF651D4',
            name: 'address',
            in: 'path',
          },
        ],
      },
    },
    '/eth/v1/market/metrics': {
      get: {
        summary: 'Get metrics of global market',
        description:
          'Return metrics for the overall NFT market.\nYou can refer [here](https://docs.nftgo.io/docs/listing-criteria) to see the criteria',
      },
    },
    '/eth/v1/market/rank/collection/{time_range}': {
      get: {
        summary: 'Get collection ranking',
        description:
          'Return collection rankings sorted by market_cap/market_cap_change/volume/floor_price/whale_num.\nCheck https://nftgo.io/analytics/top-collections for details.',
        parameters: [
          {
            description: 'Time frame with which to evaluate rankings',
            required: true,
            schema: {
              title: 'Time Range',
              enum: ['1h', '6h', '12h', '24h', '7d', '30d', 'all'],
              type: 'string',
              description: 'Time frame with which to evaluate rankings',
            },
            name: 'time_range',
            in: 'path',
          },
          {
            description:
              "Rank-by categories. Parameter {time_range} only works for volume and market_cap_change. Market_cap, floor_price and whale_num don't change over time.",
            required: false,
            schema: {
              title: 'By',
              enum: [
                'market_cap',
                'market_cap_change',
                'volume',
                'floor_price',
                'whale_num',
                'sale_num',
              ],
              type: 'string',
              description:
                "Rank-by categories. Parameter {time_range} only works for volume and market_cap_change. Market_cap, floor_price and whale_num don't change over time.",
              default: 'volume',
            },
            name: 'by',
            in: 'query',
          },
          {
            description:
              'Whether only the collections with rarity field appear in the ranking.             If true, the collections without rarity field do not appear in the ranking.                  If false, all collections appear in the ranking.',
            required: false,
            schema: {
              title: 'With Rarity',
              type: 'boolean',
              description:
                'Whether only the collections with rarity field appear in the ranking.             If true, the collections without rarity field do not appear in the ranking.                  If false, all collections appear in the ranking.',
              default: false,
            },
            name: 'with_rarity',
            in: 'query',
          },
          {
            description: 'Whether to sort results in ascending order',
            required: false,
            schema: {
              title: 'Asc',
              type: 'boolean',
              description: 'Whether to sort results in ascending order',
              default: false,
            },
            example: false,
            name: 'asc',
            in: 'query',
          },
          {
            description:
              'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
            required: false,
            schema: {
              title: 'Offset',
              minimum: 0.0,
              type: 'integer',
              description:
                'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
              default: 0,
            },
            name: 'offset',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 50.0,
              minimum: 1.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 10,
            },
            name: 'limit',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/market/rank/nft/{time_range}': {
      get: {
        summary: 'Get top sales ranking',
        description:
          'Return NFT top 100 ranking sorted by price/change/highest_price/sale.\nCheck https://nftgo.io/analytics/top-nft-sales for details.',
        parameters: [
          {
            description: 'Type of time ranges',
            required: true,
            schema: {
              title: 'Time Range',
              enum: ['24h', '7d', '30d', '3M', '1y', 'all'],
              type: 'string',
              description: 'Type of time ranges',
            },
            name: 'time_range',
            in: 'path',
          },
          {
            description: 'The type of sorting',
            required: false,
            schema: {
              title: 'By',
              enum: ['price', 'change', 'highest_price', 'sale'],
              type: 'string',
              description: 'The type of sorting',
              default: 'price',
            },
            name: 'by',
            in: 'query',
          },
          {
            description: 'The type of NFTs which should be exported in the result',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/CategoryEnum',
                },
              ],
              description: 'The type of NFTs which should be exported in the result',
              default: 'ALL',
            },
            name: 'category',
            in: 'query',
          },
          {
            description:
              'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
            required: false,
            schema: {
              title: 'Offset',
              minimum: 0.0,
              type: 'integer',
              description:
                'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
              default: 0,
            },
            name: 'offset',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 50.0,
              minimum: 1.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 10,
            },
            name: 'limit',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/market/rank/leaderboard': {
      get: {
        summary: 'Get NFT profit ranking',
        description: 'Return NFT profit leaderboard.',
      },
    },
    '/eth/v1/market/rank/marketplaces/{time_range}': {
      get: {
        summary: 'Get marketplace ranking',
        description: 'Return NFT marketplace leaderboard.',
        parameters: [
          {
            description: 'Time frame with which to evaluate rankings',
            required: true,
            schema: {
              title: 'Time Range',
              enum: ['24h', '7d', '30d', '3M', '1y', 'all'],
              type: 'string',
              description: 'Time frame with which to evaluate rankings',
            },
            name: 'time_range',
            in: 'path',
          },
          {
            description: 'Sort by volume/sale num/trader num/buyer num/seller num',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/SortByMarketplaceEnum',
                },
              ],
              description: 'Sort by volume/sale num/trader num/buyer num/seller num',
              default: 'volume',
            },
            name: 'sort_by',
            in: 'query',
          },
          {
            description: 'Whether to sort results in ascending order',
            required: false,
            schema: {
              title: 'Asc',
              type: 'boolean',
              description: 'Whether to sort results in ascending order',
              default: false,
            },
            name: 'asc',
            in: 'query',
          },
          {
            description:
              'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
            required: false,
            schema: {
              title: 'Offset',
              minimum: 0.0,
              type: 'integer',
              description:
                'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
              default: 0,
            },
            name: 'offset',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 50.0,
              minimum: 1.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 10,
            },
            name: 'limit',
            in: 'query',
          },
          {
            description: 'Whether excluding wash trading transactions',
            required: false,
            schema: {
              title: 'Exclude Wash Trading',
              type: 'boolean',
              description: 'Whether excluding wash trading transactions',
              default: false,
            },
            name: 'exclude_wash_trading',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/market/chart/marketcap': {
      get: {
        summary: 'Get chart of market capitalization',
        description:
          'Return the market capitalization chart data on a given time range, including a series of value x and value y.\nx is a timestamp in seconds and y is the market capitalization in corresponding time.\n\nNote: The granularity of the data increases as the time range increases',
        parameters: [
          {
            description:
              'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
            required: false,
            schema: {
              title: 'Start Time',
              type: 'string',
              description:
                'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
              format: 'date-time',
              default: '2022-08-20T00:00:00+00:00',
            },
            example: 1661007946,
            name: 'start_time',
            in: 'query',
          },
          {
            description:
              'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
            required: false,
            schema: {
              title: 'End Time',
              type: 'string',
              description:
                'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
              format: 'date-time',
              default: '2022-09-01T00:00:00+00:00',
            },
            example: 1662007946,
            name: 'end_time',
            in: 'query',
          },
          {
            description: 'Unit, eg. ETH, USD',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/EthUsdEnum',
                },
              ],
              description: 'Unit, eg. ETH, USD',
              default: 'USD',
            },
            example: 'ETH',
            name: 'unit',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/market/chart/volume': {
      get: {
        summary: 'Get volume chart of market',
        description:
          'Return the market volume chart data on a given time range, including a series of value x and value y.\nx is a timestamp in seconds and y is the market volume in corresponding time.\n\nNote: The granularity of the data increases as the time range increases',
        parameters: [
          {
            description:
              'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
            required: false,
            schema: {
              title: 'Start Time',
              type: 'string',
              description:
                'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
              format: 'date-time',
              default: '2022-08-20T00:00:00+00:00',
            },
            example: 1661007946,
            name: 'start_time',
            in: 'query',
          },
          {
            description:
              'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
            required: false,
            schema: {
              title: 'End Time',
              type: 'string',
              description:
                'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
              format: 'date-time',
              default: '2022-09-01T00:00:00+00:00',
            },
            example: 1662007946,
            name: 'end_time',
            in: 'query',
          },
          {
            description: 'Unit, eg. ETH, USD',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/EthUsdEnum',
                },
              ],
              description: 'Unit, eg. ETH, USD',
              default: 'USD',
            },
            example: 'ETH',
            name: 'unit',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/collection/{contract_address}/info': {
      get: {
        summary: 'Get collection by contract',
        description: 'Return basic information about a collection',
        parameters: [
          {
            description: 'Address of the contract for this NFT collection',
            required: true,
            schema: {
              title: 'Contract Address',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Address of the contract for this NFT collection',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'contract_address',
            in: 'path',
          },
        ],
      },
    },
    '/eth/v1/collection/infos': {
      post: {
        summary: 'Get collections by collections',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CollectionsParams',
              },
            },
          },
          required: true,
        },
      },
    },
    '/eth/v1/collection/{collection}/metrics': {
      get: {
        summary: 'Get metrics by collection',
        description: 'Return metrics for an NFT collection given a contract address',
        parameters: [
          {
            description:
              'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            required: true,
            schema: {
              title: 'Collection',
              type: 'string',
              description:
                'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'collection',
            in: 'path',
          },
        ],
      },
    },
    '/eth/v1/collection/name/{keywords}': {
      get: {
        summary: 'Get collection by name',
        description:
          'Return basic collection information by searching collection name. Fuzzy matching is supported.',
        parameters: [
          {
            description: 'Keywords for the name in the collection search',
            required: true,
            schema: {
              title: 'Keywords',
              type: 'string',
              description: 'Keywords for the name in the collection search',
            },
            example: 'Bored Ape Yacht Club',
            name: 'keywords',
            in: 'path',
          },
        ],
      },
    },
    '/eth/v1/collection/opensea-slug/{opensea_slug}': {
      get: {
        summary: 'Get collection by opensea slug',
        description: 'Return basic collection information given an OpenSea slug.',
        parameters: [
          {
            description: 'OpenSea slug of the collection',
            required: true,
            schema: {
              title: 'Opensea Slug',
              type: 'string',
              description: 'OpenSea slug of the collection',
            },
            example: 'boredapeyachtclub',
            name: 'opensea_slug',
            in: 'path',
          },
        ],
      },
    },

    '/eth/v1/collection/{collection}/chart/marketcap': {
      get: {
        summary: 'Get chart of market capitalization by collection',
        parameters: [
          {
            description:
              'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            required: true,
            schema: {
              title: 'Collection',
              type: 'string',
              description:
                'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'collection',
            in: 'path',
          },
          {
            description: 'Unit, eg. ETH, USD',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/EthUsdEnum',
                },
              ],
              description: 'Unit, eg. ETH, USD',
              default: 'USD',
            },
            example: 'ETH',
            name: 'unit',
            in: 'query',
          },
          {
            description:
              'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
            required: false,
            schema: {
              title: 'Start Time',
              type: 'string',
              description:
                'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
              format: 'date-time',
              default: '2022-08-20T00:00:00+00:00',
            },
            example: 1661007946,
            name: 'start_time',
            in: 'query',
          },
          {
            description:
              'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
            required: false,
            schema: {
              title: 'End Time',
              type: 'string',
              description:
                'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
              format: 'date-time',
              default: '2022-09-01T00:00:00+00:00',
            },
            example: 1662007946,
            name: 'end_time',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/collection/{contract_address}/chart/volume': {
      get: {
        summary: 'Get volume chart of a collection',
        description:
          'Return a chart displying the historical transaction volumes of an NFT collection over a given time range, indexed by time.',
        parameters: [
          {
            description: 'Address of the contract for this NFT collection',
            required: true,
            schema: {
              title: 'Contract Address',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Address of the contract for this NFT collection',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'contract_address',
            in: 'path',
          },
          {
            description:
              'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
            required: false,
            schema: {
              title: 'Start Time',
              type: 'string',
              description:
                'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
              format: 'date-time',
              default: '2022-08-20T00:00:00+00:00',
            },
            example: 1661007946,
            name: 'start_time',
            in: 'query',
          },
          {
            description:
              'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
            required: false,
            schema: {
              title: 'End Time',
              type: 'string',
              description:
                'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
              format: 'date-time',
              default: '2022-09-01T00:00:00+00:00',
            },
            example: 1662007946,
            name: 'end_time',
            in: 'query',
          },
          {
            description:
              'Time unit for one interval. If time range > 7 days, then minimum allowed value of time interval is 1 hour.',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/TimeIntervalEnum',
                },
              ],
              description:
                'Time unit for one interval. If time range > 7 days, then minimum allowed value of time interval is 1 hour.',
              default: '1h',
            },
            example: '1h',
            name: 'time_interval',
            in: 'query',
          },
          {
            description: 'Unit, eg. ETH, USD',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/EthUsdEnum',
                },
              ],
              description: 'Unit, eg. ETH, USD',
              default: 'USD',
            },
            example: 'ETH',
            name: 'unit',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/collection/{collection}/chart/floor-price': {
      get: {
        summary: 'Get floor price chart by collection',
        description:
          'Return the market floor price chart data on a given time range, including a series of value x and value y. x is a timestamp in seconds and y is the floor price in corresponding time.',
        parameters: [
          {
            description:
              'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            required: true,
            schema: {
              title: 'Collection',
              type: 'string',
              description:
                'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'collection',
            in: 'path',
          },
          {
            description:
              'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
            required: false,
            schema: {
              title: 'Start Time',
              type: 'string',
              description:
                'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
              format: 'date-time',
              default: '2022-08-20T00:00:00+00:00',
            },
            example: 1661007946,
            name: 'start_time',
            in: 'query',
          },
          {
            description:
              'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
            required: false,
            schema: {
              title: 'End Time',
              type: 'string',
              description:
                'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
              format: 'date-time',
              default: '2022-09-01T00:00:00+00:00',
            },
            example: 1662007946,
            name: 'end_time',
            in: 'query',
          },
          {
            description: 'Unit, eg. ETH, USD',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/EthUsdEnum',
                },
              ],
              description: 'Unit, eg. ETH, USD',
              default: 'ETH',
            },
            example: 'ETH',
            name: 'unit',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/collection/{collection}/chart/holders': {
      get: {
        summary: 'Get holder chart by collection',
        description:
          'Return the holders chart data on a given time range, including a series of value x and value y. x is a timestamp in second and y is the number of holders in corresponding time.',
        parameters: [
          {
            description:
              'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            required: true,
            schema: {
              title: 'Collection',
              type: 'string',
              description:
                'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'collection',
            in: 'path',
          },
          {
            description:
              'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
            required: false,
            schema: {
              title: 'Start Time',
              type: 'string',
              description:
                'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
              format: 'date-time',
              default: '2022-08-20T00:00:00+00:00',
            },
            example: 1661007946,
            name: 'start_time',
            in: 'query',
          },
          {
            description:
              'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
            required: false,
            schema: {
              title: 'End Time',
              type: 'string',
              description:
                'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
              format: 'date-time',
              default: '2022-09-01T00:00:00+00:00',
            },
            example: 1662007946,
            name: 'end_time',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/collection/{collection}/holders': {
      get: {
        summary: 'Get holders by collection',
        description: 'Retrieve all holders of a specific collection.',
        parameters: [
          {
            description:
              'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            required: true,
            schema: {
              title: 'Collection',
              type: 'string',
              description:
                'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'collection',
            in: 'path',
          },
          {
            description:
              'Support top holders, whales and blue chip holders.top_100_holders is will be deprecated.',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/HolderTypeEnum',
                },
              ],
              description:
                'Support top holders, whales and blue chip holders.top_100_holders is will be deprecated.',
              default: 'top_holder',
            },
            name: 'holder_type',
            in: 'query',
          },
          {
            description:
              'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
            required: false,
            schema: {
              title: 'Offset',
              minimum: 0.0,
              type: 'integer',
              description:
                'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
              default: 0,
            },
            name: 'offset',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 50.0,
              minimum: 1.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 10,
            },
            name: 'limit',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/collection/{collection}/all-holders': {
      get: {
        summary: 'Get holder addresses by collection',
        description:
          "Return all holders' addresses of a collection given a contract address. Sort by nft_num.",
        parameters: [
          {
            description:
              'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            required: true,
            schema: {
              title: 'Collection',
              type: 'string',
              description:
                'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'collection',
            in: 'path',
          },
          {
            description:
              'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
            required: false,
            schema: {
              title: 'Offset',
              minimum: 0.0,
              type: 'integer',
              description:
                'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
              default: 0,
            },
            name: 'offset',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 100.0,
              minimum: 1.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 10,
            },
            name: 'limit',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/collection/traits': {
      get: {
        summary: 'Get traits with stats by collection',
        parameters: [
          {
            description: 'Address of the contract for this NFT collection, beginning with 0x',
            required: false,
            schema: {
              title: 'Contract Address',
              type: 'string',
              description: 'Address of the contract for this NFT collection, beginning with 0x',
              default: '',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'contract_address',
            in: 'query',
          },
          {
            description:
              'NFTGo slug of the collection. If the slug contains special characters, you need to escape them before performing the query.',
            required: false,
            schema: {
              title: 'Slug',
              type: 'string',
              description:
                'NFTGo slug of the collection. If the slug contains special characters, you need to escape them before performing the query.',
              default: '',
            },
            name: 'slug',
            in: 'query',
          },
          {
            description:
              'OpenSea slug of the collection.If the slug contains special characters, you need to escape them before performing the query.',
            required: false,
            schema: {
              title: 'Opensea Slug',
              type: 'string',
              description:
                'OpenSea slug of the collection.If the slug contains special characters, you need to escape them before performing the query.',
              default: '',
            },
            name: 'opensea_slug',
            in: 'query',
          },
          {
            description: 'Collection ID of the collection',
            required: false,
            schema: {
              title: 'Collection Id',
              type: 'string',
              description: 'Collection ID of the collection',
              default: '',
            },
            name: 'collection_id',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/marketplace/{contract_address}/floor-price': {
      get: {
        summary: 'Get floor price by collection',
        description: 'Return collection floor price for different marketplaces',
        parameters: [
          {
            description: 'Address of the contract for this NFT collection',
            required: true,
            schema: {
              title: 'Contract Address',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Address of the contract for this NFT collection',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'contract_address',
            in: 'path',
          },
        ],
      },
    },
    '/eth/v1/whale/': {
      get: {
        summary: 'Get whales',
        description:
          'A list of Whales. Whales: addresses with at least $1,000,000 worth of NFTs. Large amounts of money from whales might influence the market.',
        parameters: [
          {
            description: 'Sort by. Default: portfolio_value.',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/WhaleSortEnum',
                },
              ],
              description: 'Sort by. Default: portfolio_value.',
              default: 'portfolio_value',
            },
            name: 'sort_by',
            in: 'query',
          },
          {
            description: 'Whether including contract address',
            required: false,
            schema: {
              title: 'Include Contract',
              type: 'boolean',
              description: 'Whether including contract address',
              default: false,
            },
            example: false,
            name: 'include_contract',
            in: 'query',
          },
          {
            description: 'Whether to sort results in ascending order',
            required: false,
            schema: {
              title: 'Asc',
              type: 'boolean',
              description: 'Whether to sort results in ascending order',
              default: false,
            },
            example: false,
            name: 'asc',
            in: 'query',
          },
          {
            description:
              'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
            required: false,
            schema: {
              title: 'Offset',
              minimum: 0.0,
              type: 'integer',
              description:
                'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
              default: 0,
            },
            example: 0,
            name: 'offset',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 50.0,
              minimum: 0.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 20,
            },
            example: 20,
            name: 'limit',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/chart/sales-chart/{contract_address}': {
      get: {
        summary: 'Get sales chart by contract',
        description: 'Return collection sales chart over a time range given a contract address.',
        parameters: [
          {
            description: 'Address of the contract for this NFT collection',
            required: true,
            schema: {
              title: 'Contract Address',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Address of the contract for this NFT collection',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'contract_address',
            in: 'path',
          },
          {
            description:
              'Queries can be bounded by time range or start time/end time. If start time is chosen, time range parameter will be invalid. Start Time is the earliest timestamp to include, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00.',
            required: false,
            schema: {
              title: 'Start Time',
              type: 'string',
              description:
                'Queries can be bounded by time range or start time/end time. If start time is chosen, time range parameter will be invalid. Start Time is the earliest timestamp to include, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00.',
              format: 'date-time',
            },
            example: 1661007946,
            name: 'start_time',
            in: 'query',
          },
          {
            description:
              'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
            required: false,
            schema: {
              title: 'End Time',
              type: 'string',
              description:
                'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
              format: 'date-time',
            },
            example: 1662007946,
            name: 'end_time',
            in: 'query',
          },
          {
            description: 'Time range from now',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/TimeSpanEnum',
                },
              ],
              description: 'Time range from now',
              default: '24h',
            },
            example: '24h',
            name: 'time_range',
            in: 'query',
          },
          {
            description: 'Unit, eg. ETH, USD',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/EthUsdEnum',
                },
              ],
              description: 'Unit, eg. ETH, USD',
              default: 'ETH',
            },
            example: 'ETH',
            name: 'unit',
            in: 'query',
          },
          {
            description: 'Whether excluding wash trading transactions',
            required: false,
            schema: {
              title: 'Exclude Wash Trading',
              type: 'boolean',
              description: 'Whether excluding wash trading transactions',
              default: false,
            },
            example: false,
            name: 'exclude_wash_trading',
            in: 'query',
          },
          {
            description: 'Whether excluding outlier sales',
            required: false,
            schema: {
              title: 'Exclude Outliers',
              type: 'boolean',
              description: 'Whether excluding outlier sales',
              default: false,
            },
            example: false,
            name: 'exclude_outliers',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/chart/address/portfolio': {
      get: {
        summary: 'Get portfolio chart by address',
        description: 'Return address portfolio chart over a time range given a address.',
        parameters: [
          {
            description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
            required: false,
            schema: {
              title: 'Address',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
              default: '0x5ac69c26a15cfaaeb066043dcc932f7d01faf182',
            },
            example: '0x5ac69c26a15cfaaeb066043dcc932f7d01faf182',
            name: 'address',
            in: 'query',
          },
          {
            description: 'Time range from now',
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/TimeSpanTemEnum',
                },
              ],
              description: 'Time range from now',
              default: '7d',
            },
            example: '7d',
            name: 'time_range',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/chart/collection/traders': {
      get: {
        summary: 'Get traders chart by collection',
        description:
          'The number of unique addresses that bought NFTs or sold NFTs at least once of the collection.\nSuspected wash trades excluded.',
        parameters: [
          {
            required: false,
            schema: {
              title: 'Time Range',
              enum: ['24h', '7d', '30d', '3M', '1y', 'all'],
              type: 'string',
              default: '24h',
            },
            name: 'time_range',
            in: 'query',
          },
          {
            description: 'Address of the contract for this NFT collection, beginning with 0x',
            required: false,
            schema: {
              title: 'Contract Address',
              type: 'string',
              description: 'Address of the contract for this NFT collection, beginning with 0x',
              default: '',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'contract_address',
            in: 'query',
          },
          {
            description:
              'NFTGo slug of the collection. If the slug contains special characters, you need to escape them before performing the query.',
            required: false,
            schema: {
              title: 'Slug',
              type: 'string',
              description:
                'NFTGo slug of the collection. If the slug contains special characters, you need to escape them before performing the query.',
              default: '',
            },
            name: 'slug',
            in: 'query',
          },
          {
            description:
              'OpenSea slug of the collection.If the slug contains special characters, you need to escape them before performing the query.',
            required: false,
            schema: {
              title: 'Opensea Slug',
              type: 'string',
              description:
                'OpenSea slug of the collection.If the slug contains special characters, you need to escape them before performing the query.',
              default: '',
            },
            name: 'opensea_slug',
            in: 'query',
          },
          {
            description: 'Collection ID of the collection',
            required: false,
            schema: {
              title: 'Collection Id',
              type: 'string',
              description: 'Collection ID of the collection',
              default: '',
            },
            name: 'collection_id',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/chart/collection/sales': {
      get: {
        summary: 'Get top sales by collection',
        description: 'The top 10% sales info over the selected time range.',
        parameters: [
          {
            description: 'Whether to exlucde trade that with very high or very low price',
            required: false,
            schema: {
              title: 'Exclude Outlier',
              type: 'boolean',
              description: 'Whether to exlucde trade that with very high or very low price',
              default: false,
            },
            name: 'exclude_outlier',
            in: 'query',
          },
          {
            description: 'Whether to exclude wash trading',
            required: false,
            schema: {
              title: 'Exclude Wash Trading',
              type: 'boolean',
              description: 'Whether to exclude wash trading',
              default: true,
            },
            name: 'exclude_wash_trading',
            in: 'query',
          },
          {
            required: false,
            schema: {
              title: 'Time Range',
              enum: ['24h', '7d', '30d', '3M', '1y'],
              type: 'string',
              default: '24h',
            },
            name: 'time_range',
            in: 'query',
          },
          {
            description: 'Address of the contract for this NFT collection, beginning with 0x',
            required: false,
            schema: {
              title: 'Contract Address',
              type: 'string',
              description: 'Address of the contract for this NFT collection, beginning with 0x',
              default: '',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'contract_address',
            in: 'query',
          },
          {
            description:
              'NFTGo slug of the collection. If the slug contains special characters, you need to escape them before performing the query.',
            required: false,
            schema: {
              title: 'Slug',
              type: 'string',
              description:
                'NFTGo slug of the collection. If the slug contains special characters, you need to escape them before performing the query.',
              default: '',
            },
            name: 'slug',
            in: 'query',
          },
          {
            description:
              'OpenSea slug of the collection.If the slug contains special characters, you need to escape them before performing the query.',
            required: false,
            schema: {
              title: 'Opensea Slug',
              type: 'string',
              description:
                'OpenSea slug of the collection.If the slug contains special characters, you need to escape them before performing the query.',
              default: '',
            },
            name: 'opensea_slug',
            in: 'query',
          },
          {
            description: 'Collection ID of the collection',
            required: false,
            schema: {
              title: 'Collection Id',
              type: 'string',
              description: 'Collection ID of the collection',
              default: '',
            },
            name: 'collection_id',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v1/price': {
      get: {
        summary: 'Get ETH/USD Price',
        description: 'Get the current price of ETH in USD.',
      },
    },
    '/eth/v2/address/metrics': {
      get: {
        summary: 'Get metrics by address',
        description: 'Return address metrics given an Ethereum address.',
        parameters: [
          {
            description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
            required: false,
            schema: {
              title: 'Address',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
              default: '0x5ac69c26a15cfaaeb066043dcc932f7d01faf182',
            },
            example: '0x5ac69c26a15cfaaeb066043dcc932f7d01faf182',
            name: 'address',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v2/address/nfts': {
      get: {
        summary: 'Get NFTs by owner',
        description:
          'Return address portfolio by collection given an Ethereum address and a contract address.',
        parameters: [
          {
            description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
            required: false,
            schema: {
              title: 'Address',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
              default: '0x5ac69c26a15cfaaeb066043dcc932f7d01faf182',
            },
            example: '0x5ac69c26a15cfaaeb066043dcc932f7d01faf182',
            name: 'address',
            in: 'query',
          },
          {
            description: 'Addresses of the contract for NFT collection.',
            required: false,
            schema: {
              title: 'Contract Addresses',
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'Addresses of the contract for NFT collection.',
              default: [],
            },
            example:
              '["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d","0xa32422dfb5bf85b2084ef299992903eb93ff52b0"]',
            name: 'contract_addresses',
            in: 'query',
          },
          {
            description: 'Keywords for the name in the collection search',
            required: false,
            schema: {
              title: 'Keywords',
              type: 'string',
              description: 'Keywords for the name in the collection search',
              default: '',
            },
            example: 'Azuki',
            name: 'keywords',
            in: 'query',
          },
          {
            required: false,
            schema: {
              allOf: [
                {
                  $ref: '#/components/schemas/AddressNFTsEnum',
                },
              ],
              default: 'receivedTime',
            },
            example: 'receivedTime',
            name: 'sort_by',
            in: 'query',
          },
          {
            description: 'Whether to sort results in ascending order',
            required: false,
            schema: {
              title: 'Asc',
              type: 'boolean',
              description: 'Whether to sort results in ascending order',
              default: false,
            },
            name: 'asc',
            in: 'query',
          },
          {
            description: 'Used to retrieve the next page of results',
            required: false,
            schema: {
              title: 'Cursor',
              type: 'string',
              description: 'Used to retrieve the next page of results',
              default: '',
            },
            example: '',
            name: 'cursor',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 50.0,
              minimum: 0.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 20,
            },
            example: 20,
            name: 'limit',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v2/history/collection/{collection}/transactions': {
      get: {
        summary: 'Get collection transaction history',
        description: 'Return collection transaction history given a collection contract address',
        parameters: [
          {
            description:
              'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            required: true,
            schema: {
              title: 'Collection',
              type: 'string',
              description:
                'The collection filter can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'collection',
            in: 'path',
          },
          {
            description:
              'Now supported "mint","transfer","burn","sale","tokenOffer","collectionOffer","list".Separate multiple action with commas.',
            required: false,
            schema: {
              title: 'Action',
              type: 'string',
              description:
                'Now supported "mint","transfer","burn","sale","tokenOffer","collectionOffer","list".Separate multiple action with commas.',
              default: 'all',
            },
            example: 'all',
            name: 'action',
            in: 'query',
          },
          {
            description:
              'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
            required: false,
            schema: {
              title: 'Start Time',
              type: 'string',
              description:
                'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
              format: 'date-time',
            },
            example: 1661007946,
            name: 'start_time',
            in: 'query',
          },
          {
            description:
              'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
            required: false,
            schema: {
              title: 'End Time',
              type: 'string',
              description:
                'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
              format: 'date-time',
            },
            example: 1662007946,
            name: 'end_time',
            in: 'query',
          },
          {
            description:
              'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
            required: false,
            schema: {
              title: 'Offset',
              maximum: 9950.0,
              minimum: 0.0,
              type: 'integer',
              description:
                'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
              default: 0,
            },
            example: 0,
            name: 'offset',
            in: 'query',
          },
          {
            description: 'Used to retrieve the next page of results',
            required: false,
            schema: {
              title: 'Cursor',
              type: 'string',
              description: 'Used to retrieve the next page of results',
              default: '',
            },
            example: '',
            name: 'cursor',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 100.0,
              minimum: 0.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 20,
            },
            example: 20,
            name: 'limit',
            in: 'query',
          },
          {
            description: 'Whether excluding wash trading transactions',
            required: false,
            schema: {
              title: 'Exclude Wash Trading',
              type: 'boolean',
              description: 'Whether excluding wash trading transactions',
              default: false,
            },
            example: false,
            name: 'exclude_wash_trading',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v2/history/transactions': {
      get: {
        summary: 'Get chain transaction history',
        description: 'Return transaction history.',
        parameters: [
          {
            description:
              'Now supported "sale","transfer","mint","burn","all". Separate multiple action with commas.',
            required: false,
            schema: {
              title: 'Action',
              type: 'string',
              description:
                'Now supported "sale","transfer","mint","burn","all". Separate multiple action with commas.',
              default: 'all',
            },
            example: 'all',
            name: 'action',
            in: 'query',
          },
          {
            description:
              'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
            required: false,
            schema: {
              title: 'Start Time',
              type: 'string',
              description:
                'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
              format: 'date-time',
            },
            example: 1661007946,
            name: 'start_time',
            in: 'query',
          },
          {
            description:
              'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
            required: false,
            schema: {
              title: 'End Time',
              type: 'string',
              description:
                'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
              format: 'date-time',
            },
            example: 1662007946,
            name: 'end_time',
            in: 'query',
          },
          {
            description:
              'Lower bound block_number (inclusive). The from_timestamp param takes precedence if both from_timestamp and from_block are specified.',
            required: false,
            schema: {
              title: 'From Block',
              type: 'integer',
              description:
                'Lower bound block_number (inclusive). The from_timestamp param takes precedence if both from_timestamp and from_block are specified.',
            },
            example: 16949504,
            name: 'from_block',
            in: 'query',
          },
          {
            description:
              'Upper bound block_number (inclusive). The to_timestamp param takes precedence if both to_timestamp and to_block are specified.',
            required: false,
            schema: {
              title: 'To Block',
              type: 'integer',
              description:
                'Upper bound block_number (inclusive). The to_timestamp param takes precedence if both to_timestamp and to_block are specified.',
            },
            example: 16949504,
            name: 'to_block',
            in: 'query',
          },
          {
            description:
              'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
            required: false,
            schema: {
              title: 'Offset',
              maximum: 9950.0,
              minimum: 0.0,
              type: 'integer',
              description:
                'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
              default: 0,
            },
            example: 0,
            name: 'offset',
            in: 'query',
          },
          {
            description: 'Used to retrieve the next page of results',
            required: false,
            schema: {
              title: 'Cursor',
              type: 'string',
              description: 'Used to retrieve the next page of results',
              default: '',
            },
            example: '',
            name: 'cursor',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 100.0,
              minimum: 0.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 20,
            },
            example: 20,
            name: 'limit',
            in: 'query',
          },
          {
            description: 'Whether excluding wash trading transactions',
            required: false,
            schema: {
              title: 'Exclude Wash Trading',
              type: 'boolean',
              description: 'Whether excluding wash trading transactions',
              default: false,
            },
            example: false,
            name: 'exclude_wash_trading',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v2/history/nft/transactions': {
      get: {
        summary: 'Get NFT Transaction history',
        parameters: [
          {
            description: 'Address of the contract for this NFT collection',
            required: false,
            schema: {
              title: 'Contract Address',
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
              description: 'Address of the contract for this NFT collection',
              default: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            },
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'contract_address',
            in: 'query',
          },
          {
            description:
              'The token ID for this NFT. Each item in an NFT collection     will be assigned a unique id.',
            required: false,
            schema: {
              title: 'Token Id',
              type: 'string',
              description:
                'The token ID for this NFT. Each item in an NFT collection     will be assigned a unique id.',
              default: 4495,
            },
            example: 4495,
            name: 'token_id',
            in: 'query',
          },
          {
            description:
              'Now supported "sale","transfer","mint","burn","tokenOffer". Separate multiple action with commas.',
            required: false,
            schema: {
              title: 'Action',
              type: 'string',
              description:
                'Now supported "sale","transfer","mint","burn","tokenOffer". Separate multiple action with commas.',
              default: 'all',
            },
            example: 'all',
            name: 'action',
            in: 'query',
          },
          {
            description:
              'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
            required: false,
            schema: {
              title: 'Start Time',
              type: 'string',
              description:
                'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
              format: 'date-time',
            },
            example: 1661007946,
            name: 'start_time',
            in: 'query',
          },
          {
            description:
              'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
            required: false,
            schema: {
              title: 'End Time',
              type: 'string',
              description:
                'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
              format: 'date-time',
            },
            example: 1662007946,
            name: 'end_time',
            in: 'query',
          },
          {
            description: 'Whether excluding wash trading transactions',
            required: false,
            schema: {
              title: 'Exclude Wash Trading',
              type: 'boolean',
              description: 'Whether excluding wash trading transactions',
              default: false,
            },
            example: false,
            name: 'exclude_wash_trading',
            in: 'query',
          },
          {
            description:
              'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
            required: false,
            schema: {
              title: 'Offset',
              maximum: 9950.0,
              minimum: 0.0,
              type: 'integer',
              description:
                'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
              default: 0,
            },
            example: 0,
            name: 'offset',
            in: 'query',
          },
          {
            description: 'Used to retrieve the next page of results',
            required: false,
            schema: {
              title: 'Cursor',
              type: 'string',
              description: 'Used to retrieve the next page of results',
              default: '',
            },
            example: '',
            name: 'cursor',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 100.0,
              minimum: 0.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 20,
            },
            example: 20,
            name: 'limit',
            in: 'query',
          },
        ],
      },
    },
    '/eth/v2/history/address/{address}/activities': {
      get: {
        summary: 'Get address transaction history',
        parameters: [
          {
            description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
            required: true,
            schema: {
              title: 'Address',
              type: 'string',
              description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
            },
            example: '0xcaf1d788c67BdAAC155E7dcC4D64e2004eF651D4',
            name: 'address',
            in: 'path',
          },
          {
            description:
              'Now supported "mint","send","receive","burn","buy","sell","tokenOffer","list","collectionOffer". Separate multiple action with commas.',
            required: false,
            schema: {
              title: 'Action',
              type: 'string',
              description:
                'Now supported "mint","send","receive","burn","buy","sell","tokenOffer","list","collectionOffer". Separate multiple action with commas.',
              default: 'all',
            },
            example: 'all',
            name: 'action',
            in: 'query',
          },
          {
            description:
              'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
            required: false,
            schema: {
              title: 'Start Time',
              type: 'string',
              description:
                'Queries can be bounded by a Start Time and End Time. Start Time is the earliest timestamp to include in the transaction query, formatted as an UTC timestamp in seconds or ISO 8601 format date time string, such as 2022-08-20T00:00:00+00:00. Start Time limited to 2021-09-01T00:00:00+00:00 or later.',
              format: 'date-time',
            },
            example: 1661007946,
            name: 'start_time',
            in: 'query',
          },
          {
            description:
              'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
            required: false,
            schema: {
              title: 'End Time',
              type: 'string',
              description:
                'Where an End Time is specified, transaction queries will fetch all transactions up to but excluding the End Time, which is formatted as an UTC timestamp in seconds or ISO 8601 format date time string. The query window varies according to the plan.',
              format: 'date-time',
            },
            example: 1662007946,
            name: 'end_time',
            in: 'query',
          },
          {
            description: 'Whether excluding wash trading transactions',
            required: false,
            schema: {
              title: 'Exclude Wash Trading',
              type: 'boolean',
              description: 'Whether excluding wash trading transactions',
              default: false,
            },
            example: false,
            name: 'exclude_wash_trading',
            in: 'query',
          },
          {
            description:
              'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
            required: false,
            schema: {
              title: 'Offset',
              maximum: 9950.0,
              minimum: 0.0,
              type: 'integer',
              description:
                'The index of data segments. The returned data is divided into many segments.    One segment is returned at a time. {offset} parameter indicates the index of data segments.',
              default: 0,
            },
            example: 0,
            name: 'offset',
            in: 'query',
          },
          {
            description: 'Used to retrieve the next page of results',
            required: false,
            schema: {
              title: 'Cursor',
              type: 'string',
              description: 'Used to retrieve the next page of results',
              default: '',
            },
            example: '',
            name: 'cursor',
            in: 'query',
          },
          {
            description: 'The size of a returned data segment',
            required: false,
            schema: {
              title: 'Limit',
              maximum: 100.0,
              minimum: 0.0,
              type: 'integer',
              description: 'The size of a returned data segment',
              default: 20,
            },
            example: 20,
            name: 'limit',
            in: 'query',
          },
        ],
      },
    },
  },
  components: {
    schemas: {
      AddressInfoV2: {
        title: 'AddressInfoV2',
        type: 'object',
        properties: {
          address: {
            title: 'Address',
            type: 'string',
            description: 'The address on the blockchain',
          },
          ens: {
            title: 'Ens',
            type: 'string',
            description: 'Ethereum Name Service',
          },
          is_whale: {
            title: 'Is Whale',
            type: 'boolean',
            description: 'Whether the address is a whale',
            default: false,
          },
          blockchain: {
            title: 'Blockchain',
            type: 'string',
          },
          is_contract: {
            title: 'Is Contract',
            type: 'boolean',
            description: 'Whether the address is a contract address',
            default: false,
          },
          is_blue_chip_holder: {
            title: 'Is Blue Chip Holder',
            type: 'boolean',
            description: 'Whether the address is a blue chip holder',
            default: false,
          },
          is_super_blue_chip_holder: {
            title: 'Is Super Blue Chip Holder',
            type: 'boolean',
            description: 'Whether the address is a super blue chip holder',
            default: false,
          },
          is_multi_sign_wallet: {
            title: 'Is Multi Sign Wallet',
            type: 'boolean',
            description: 'Whether the address is a multi-signature wallet',
            default: false,
          },
          das: {
            title: 'Das',
            type: 'string',
            description: 'Bit domain name',
          },
          alias: {
            title: 'Alias',
            type: 'string',
            description: 'NFTGO alias name',
          },
        },
      },
      AddressListing: {
        title: 'AddressListing',
        type: 'object',
        properties: {
          order_id: {
            title: 'Order Id',
            type: 'string',
            description: 'ID for aggregate',
          },
          listing_time: {
            title: 'Listing Time',
            type: 'integer',
            description: 'The listing time of the NFT',
          },
          expired_time: {
            title: 'Expired Time',
            type: 'integer',
            description: 'The listing expire time of the NFT',
          },
          seller_address: {
            title: 'Seller Address',
            type: 'string',
            description: 'The seller address of the NFT',
          },
          order_kind: {
            title: 'Order Kind',
            type: 'string',
            description: 'The protocol type of this order',
          },
          total_quantity: {
            title: 'Total Quantity',
            type: 'integer',
            description: 'The sales number of order',
          },
          quantity_remaining: {
            title: 'Quantity Remaining',
            type: 'integer',
            description: 'Number of tokens remaining for this order',
          },
          listing_price: {
            title: 'Listing Price',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV3',
              },
            ],
            description: 'The listing price of order',
          },
          market: {
            title: 'Market',
            allOf: [
              {
                $ref: '#/components/schemas/CollectionFloorPriceV2',
              },
            ],
            description: 'The market info of order',
          },
          fee_bps: {
            title: 'Fee Bps',
            type: 'number',
            description: 'offer fee basis point',
          },
          fee_breakdown: {
            title: 'Fee Breakdown',
            type: 'array',
            items: {
              $ref: '#/components/schemas/FeeBreakdownItem',
            },
            description: 'optional fee break down',
          },
        },
      },
      AddressNFT: {
        title: 'AddressNFT',
        required: ['quantity'],
        type: 'object',
        properties: {
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            description: 'Name of the blockchain the NFT belongs to',
            example: 'ETH',
          },
          collection_name: {
            title: 'Collection Name',
            type: 'string',
            description: 'Name of the collection the NFT belongs to',
            example: 'Bored Ape Yacht Club',
          },
          collection_slug: {
            title: 'Collection Slug',
            type: 'string',
            description: 'NFTGo Slug of the collection the NFT belongs to',
            example: 'bored-ape-yacht-club',
          },
          collection_opensea_slug: {
            title: 'Collection Opensea Slug',
            type: 'string',
            description: 'OpenSea slug of the collection the NFT belongs to',
            example: 'boredapeyachtclub',
          },
          collection_logo: {
            title: 'Collection Logo',
            type: 'string',
            description: 'The logo url or base64 encoded data of a collection',
            example: 'https://static.nftgo.io/asset/1651210195557.png',
          },
          contract_type: {
            title: 'Contract Type',
            type: 'string',
            description: 'Type of contract: ERC721 or ERC1155',
            example: 'ERC721',
          },
          contract_address: {
            title: 'Contract Address',
            anyOf: [
              {
                maxLength: 42,
                minLength: 42,
                pattern: '^0x[a-fA-F0-9]{40}$',
                type: 'string',
              },
              {
                type: 'string',
              },
            ],
            description: 'Contract address of the collection the NFT belongs to',
            example: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
          },
          token_id: {
            title: 'Token Id',
            type: 'string',
            description: 'The token ID of the NFT',
            example: '4495',
          },
          name: {
            title: 'Name',
            type: 'string',
            description: 'The name of the NFT',
            example: 'Bored Ape Yacht Club #4495',
          },
          description: {
            title: 'Description',
            type: 'string',
            description: 'The description of the NFT',
          },
          image: {
            title: 'Image',
            type: 'string',
            description: 'The url or base64 data of image or video associated with the NFT',
            example:
              'https://static.nftgo.io/asset/metadata/image/5e236a5b9e95e4b88df604399ea7ca56229fdf86b9b8da78a6fd587a155b8b98',
          },
          animation_url: {
            title: 'Animation Url',
            type: 'string',
            description: 'The url of animation associated with the NFT',
          },
          owner_addresses: {
            title: 'Owner Addresses',
            type: 'array',
            items: {
              anyOf: [
                {
                  maxLength: 42,
                  minLength: 42,
                  pattern: '^0x[a-fA-F0-9]{40}$',
                  type: 'string',
                },
                {
                  type: 'string',
                },
              ],
            },
            description:
              "List of owner addresses currently holding the NFT.         A list of one address if it's an ERC721 NFT. A list of addresses if it's an ERC1155 NFT.",
            example: ['0xcaf1d788c67BdAAC155E7dcC4D64e2004eF651D4'],
          },
          traits: {
            title: 'Traits',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Trait',
            },
            description:
              'The list of NFT traits. Traits consist of a series of types and values, referring to the feature of an NFT. For example, if a project has avatar NFTs, the traits may include headwear, facial traits, clothes, etc. Traits make each item in an NFT collection unique and determine its rarity in a collection.',
            example: [
              {
                type: 'Eyes',
                value: 'Wide Eyed',
                percentage: 0.0549,
              },
              {
                type: 'Background',
                value: 'Aquamarine',
                percentage: 0.1266,
              },
              {
                type: 'Fur',
                value: 'Black',
                percentage: 0.1229,
              },
              {
                type: 'Mouth',
                value: 'Bored',
                percentage: 0.2272,
              },
              {
                type: 'Clothes',
                value: 'Service',
                percentage: 0.0142,
              },
            ],
          },
          rarity: {
            title: 'Rarity',
            allOf: [
              {
                $ref: '#/components/schemas/Rarity',
              },
            ],
            description:
              'NFT Rarity score. Calculation methods can be seen as below: https://mirror.xyz/nftgoio.eth/kHWaMtNY6ZOvDzr7PR99D03--VNu6-ZOjYuf6E9-QH0',
            example: {
              score: 34.72,
              rank: 9152,
              total: 10000,
            },
          },
          owners: {
            title: 'Owners',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Holder',
            },
            description: 'owner tag, with owner address and the quantity of nft this owner have',
          },
          extra_rarity_info: {
            title: 'Extra Rarity Info',
            allOf: [
              {
                $ref: '#/components/schemas/ExtraRarityInfo',
              },
            ],
            description: 'NFT Rarity info from open rarity and rarity sniper',
            example: {
              open_rarity: {
                rank: 9152,
              },
              rarity_sniper: {
                rank: 9152,
              },
            },
          },
          suspicious: {
            title: 'Suspicious',
            type: 'boolean',
            description: 'Is it not tradeable on OpenSea?',
          },
          last_sale: {
            title: 'Last Sale',
            allOf: [
              {
                $ref: '#/components/schemas/Sale',
              },
            ],
            description: 'Last sale price of the NFT',
            example: {
              tx_hash: '0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              price_token: 98.5,
              token_symbol: 'ETH',
              token_contract_address: '0x0000000000000000000000000000000000000000',
              price_usd: 202001.28197466402,
              price: {
                value: 98.5,
                crypto_unit: 'ETH',
                usd: 202001.28197466402,
                eth_value: 98.5,
                payment_token: {
                  address: '0x0000000000000000000000000000000000000000',
                  symbol: 'ETH',
                  decimals: 18,
                },
              },
              tx_url:
                'https://etherscan.io/tx/0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              time: 1652571359,
            },
          },
          best_offer: {
            title: 'Best Offer',
            allOf: [
              {
                $ref: '#/components/schemas/OfferWithPrice',
              },
            ],
            description: 'The real-time highest collection offer price across the marketplaces.',
          },
          best_listing: {
            title: 'Best Listing',
            allOf: [
              {
                $ref: '#/components/schemas/CryptoPriceWithOrderId',
              },
            ],
            description: 'The real-time highest collection listing price across the marketplaces.',
          },
          quantity: {
            title: 'Quantity',
            type: 'integer',
            description: 'The quantity of NFTs held',
            example: 1,
          },
          listing_data: {
            $ref: '#/components/schemas/NftListing',
          },
          floor_price: {
            $ref: '#/components/schemas/PriceV3',
          },
          pending_sales: {
            title: 'Pending Sales',
            type: 'array',
            items: {
              $ref: '#/components/schemas/PendingSale',
            },
            default: [],
          },
        },
      },
      AddressNFTs: {
        title: 'AddressNFTs',
        required: ['nfts'],
        type: 'object',
        properties: {
          next_cursor: {
            title: 'Next Cursor',
            type: 'string',
            description: 'The cursor to send to get the next page of results.',
          },
          nfts: {
            title: 'Nfts',
            type: 'array',
            items: {
              $ref: '#/components/schemas/AddressNFT',
            },
          },
        },
      },
      AddressNFTsEnum: {
        title: 'AddressNFTsEnum',
        enum: ['receivedTime', 'price', 'rarity', 'bestListing'],
        type: 'string',
        description: 'An enumeration.',
      },
      AddressOfferListingRelatedCollections: {
        title: 'AddressOfferListingRelatedCollections',
        type: 'object',
        properties: {
          collections: {
            title: 'Collections',
            type: 'array',
            items: {
              $ref: '#/components/schemas/CollectionBaseInfo',
            },
          },
          markets: {
            title: 'Markets',
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'A list of market name',
          },
        },
      },
      AddressParams: {
        title: 'AddressParams',
        required: ['addresses'],
        type: 'object',
        properties: {
          addresses: {
            title: 'Addresses',
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
            example: [
              '0x2761010826a0d0bbbf604aea3eeff35030da2bc0',
              '0x479150abece65b0444d6ede5dca9c30d68e0e122',
            ],
          },
        },
      },
      BlockchainIdentifier: {
        title: 'BlockchainIdentifier',
        type: 'object',
        properties: {
          address: {
            title: 'Address',
            type: 'string',
            description: 'The address on the blockchain',
          },
          ens: {
            title: 'Ens',
            type: 'string',
            description: 'Ethereum Name Service',
          },
        },
      },
      CategoryEnum: {
        title: 'CategoryEnum',
        enum: [
          'ALL',
          'DEFI',
          'METAVERSE',
          'GAME',
          'COLLECTIBLES',
          'ART',
          'IP',
          'UTILITY',
          'SOCIAL',
          'MUSIC',
          'PFP',
          'LAND',
          'PHOTOGRAPHY',
          'SPORTS',
          'DOMAIN_NAMES',
        ],
        type: 'string',
        description: 'An enumeration.',
      },
      Chart: {
        title: 'Chart',
        required: ['last_updated', 'x', 'y'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          x: {
            title: 'X',
            type: 'array',
            items: {
              type: 'integer',
            },
            description: 'List of timestamps in seconds',
            example: [
              1631836800, 1632096000, 1632355200, 1632614400, 1632873600, 1633132800, 1633392000,
            ],
          },
          y: {
            title: 'Y',
            type: 'array',
            items: {
              type: 'number',
            },
            description: 'The value of vertical axis',
            example: [
              5201028079.6985855, 5280712479.1252165, 5427212136.84057, 5597568407.601322,
              5807344349.263138, 6039138476.081366, 6279864229.656991,
            ],
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      ChartValue: {
        title: 'ChartValue',
        required: ['close', 'high', 'open', 'low', 'avg'],
        type: 'object',
        properties: {
          close: {
            title: 'Close',
            type: 'array',
            items: {
              type: 'number',
            },
            description: 'The closed floor price of each time point',
          },
          high: {
            title: 'High',
            type: 'array',
            items: {
              type: 'number',
            },
            description: 'The Max floor price of each time point',
          },
          open: {
            title: 'Open',
            type: 'array',
            items: {
              type: 'number',
            },
            description: 'The opened floor price of each time point',
          },
          low: {
            title: 'Low',
            type: 'array',
            items: {
              type: 'number',
            },
            description: 'The Min floor price of each time point',
          },
          avg: {
            title: 'Avg',
            type: 'array',
            items: {
              type: 'number',
            },
            description: 'The average floor price of each time point',
          },
        },
      },
      Collection: {
        title: 'Collection',
        required: ['last_updated', 'blockchain', 'contracts'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            description: 'The blockchain the collection belongs to',
            example: 'ETH',
          },
          name: {
            title: 'Name',
            type: 'string',
            description: 'Collection name',
            example: 'Bored Ape Yacht Club',
          },
          slug: {
            title: 'Slug',
            type: 'string',
            description:
              "A slug is generated from a collection name by using applying lower-case to all letters in the collection name and replacing all spaces with a '-'",
            example: 'bored-ape-yacht-club',
          },
          opensea_slug: {
            title: 'Opensea Slug',
            type: 'string',
            description: 'An opensea slug is generated from the corresponding opensea url link',
            example: 'boredapeyachtclub',
          },
          description: {
            title: 'Description',
            type: 'string',
            description: 'Collection description',
            example:
              'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs\u2014 unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.',
          },
          official_website_url: {
            title: 'Official Website Url',
            type: 'string',
            description: 'The official website url of collection',
            example: 'https://boredapeyachtclub.com/',
          },
          opensea_url: {
            title: 'Opensea Url',
            type: 'string',
            description: 'The opensea url of collection',
            example: 'https://opensea.io/collection/boredapeyachtclub',
          },
          logo: {
            title: 'Logo',
            type: 'string',
            description: 'The logo url or base64 encoded data of a collection',
            example: 'https://static.nftgo.io/asset/1651210195557.png',
          },
          contracts: {
            title: 'Contracts',
            type: 'array',
            items: {
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
            },
            description: 'List of contract addresses which belong to a collection',
            example: ['0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'],
          },
          contract_type: {
            title: 'Contract Type',
            type: 'string',
            description: 'Type of contract: ERC721 or ERC1155',
            example: 'ERC721',
          },
          categories: {
            title: 'Categories',
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'List of categor(ies) that a collection belongs to',
            example: ['PFP'],
          },
          discord_url: {
            title: 'Discord Url',
            type: 'string',
            description: 'The discord url of a collection',
            example: 'https://discord.com/invite/3P5K3dzgdB',
          },
          instagram_url: {
            title: 'Instagram Url',
            type: 'string',
            description: 'The instagram url of a collection',
            example: 'https://www.instagram.com/boredapeyachtclub/',
          },
          twitter_url: {
            title: 'Twitter Url',
            type: 'string',
            description: 'The twitter url of a collection',
            example: 'https://twitter.com/boredapeyc',
          },
          banner_image_url: {
            title: 'Banner Image Url',
            type: 'string',
            description: 'The banner image url of a collection',
          },
          telegram_url: {
            title: 'Telegram Url',
            type: 'string',
            description: 'The telegram url of a collection',
          },
          has_rarity: {
            title: 'Has Rarity',
            type: 'boolean',
            description: 'Whether the collection has rarity rankings',
            default: false,
            example: true,
          },
          is_blue_chip_coll: {
            title: 'Is Blue Chip Coll',
            type: 'boolean',
            description: 'Whether the collection is a blue chip collection',
            default: false,
            example: true,
          },
          total_supply: {
            title: 'Total Supply',
            type: 'integer',
            description:
              'The total number of NFTs in a collection includes the count of both existing NFTs and those that have been burned.\n        For ERC1155 collection, the count refers to the number of token types.',
          },
          is_spam: {
            title: 'Is Spam',
            type: 'boolean',
            description: 'Whether the collection is spam',
            default: false,
          },
          protocol_name: {
            title: 'Protocol Name',
            type: 'string',
            description: 'The protocol name of the collection',
            example: 'brc-20',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      CollectionBase: {
        title: 'CollectionBase',
        required: ['name', 'blockchain', 'slug', 'contracts'],
        type: 'object',
        properties: {
          name: {
            title: 'Name',
            type: 'string',
            description: 'Collection name',
            example: 'HyperNFT_HOS_1.0',
          },
          logo: {
            title: 'Logo',
            type: 'string',
            description: 'The logo url or base64 encoded data of a collection',
            example: 'https://static.nftgo.io/asset/1651210195557.png',
          },
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            description: 'The blockchain the collection belongs to',
            example: 'ETH',
          },
          slug: {
            title: 'Slug',
            type: 'string',
            description:
              "A slug is generated from a collection name by using applying lower-case to all letters in the collection name and replacing all spaces with a '-'",
            example: 'bored-ape-yacht-club',
          },
          official_website_url: {
            title: 'Official Website Url',
            type: 'string',
            description: 'The official website url of collection',
            example: 'https://boredapeyachtclub.com/',
          },
          contracts: {
            title: 'Contracts',
            type: 'array',
            items: {
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
            },
            description: 'List of contract addresses which belong to a collection',
            example: ['0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'],
          },
          contract_type: {
            title: 'Contract Type',
            type: 'string',
            description: 'Type of contract: ERC721 or ERC1155',
            example: 'ERC721',
          },
        },
      },
      CollectionBaseInfo: {
        title: 'CollectionBaseInfo',
        type: 'object',
        properties: {
          collection_id: {
            title: 'Collection Id',
            type: 'string',
            description: 'The collection id of the collection',
          },
          name: {
            title: 'Name',
            type: 'string',
            description: 'Collection name',
            example: 'Bored Ape Yacht Club',
          },
          logo: {
            title: 'Logo',
            type: 'string',
            description: 'The logo url or base64 encoded data of a collection',
            example: 'https://static.nftgo.io/asset/1651210195557.png',
          },
          slug: {
            title: 'Slug',
            type: 'string',
            description:
              "A slug is generated from a collection name by using applying lower-case to all letters in the collection name and replacing all spaces with a '-'",
            example: 'bored-ape-yacht-club',
          },
        },
      },
      CollectionFloorPrice: {
        title: 'CollectionFloorPrice',
        type: 'object',
        properties: {
          timestamp: {
            title: 'Timestamp',
            type: 'string',
            description: 'Timestamp in ISO 8601 format',
            example: '2022-07-05T05:00:00.000Z',
          },
          marketplace_name: {
            title: 'Marketplace Name',
            type: 'string',
            description: 'Name of the marketplace',
            example: 'X2Y2',
          },
          marketplace_link: {
            title: 'Marketplace Link',
            type: 'string',
            description: 'Marketplace link of the NFT',
          },
          floor_price: {
            title: 'Floor Price',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV2',
              },
            ],
            description: 'Floor Price of the collection',
          },
        },
      },
      CollectionFloorPriceV2: {
        title: 'CollectionFloorPriceV2',
        type: 'object',
        properties: {
          timestamp: {
            title: 'Timestamp',
            type: 'string',
            description: 'Timestamp in ISO 8601 format',
            example: '2022-07-05T05:00:00.000Z',
          },
          marketplace_name: {
            title: 'Marketplace Name',
            type: 'string',
            description: 'Name of the marketplace',
            example: 'X2Y2',
          },
          marketplace_link: {
            title: 'Marketplace Link',
            type: 'string',
            description: 'Marketplace link of the NFT',
          },
          floor_price: {
            title: 'Floor Price',
            allOf: [
              {
                $ref: '#/components/schemas/CryptoPriceV2',
              },
            ],
            description: 'Floor Price of the collection',
          },
        },
      },
      CollectionHolder: {
        title: 'CollectionHolder',
        required: [
          'holder_address',
          'blockchain',
          'nft_num',
          'est_holding_value_usd',
          'est_holding_value_eth',
          'buy_volume_usd',
          'buy_volume_eth',
          'sell_volume_usd',
          'sell_volume_eth',
          'pnl_usd',
          'pnl_eth',
        ],
        type: 'object',
        properties: {
          holder_address: {
            title: 'Holder Address',
            maxLength: 42,
            minLength: 42,
            pattern: '^0x[a-fA-F0-9]{40}$',
            type: 'string',
            description: "holder's address",
            example: '0x0a2542a170aa02b96b588aa3af8b09ab22a9d7ac',
          },
          blockchain: {
            title: 'Blockchain',
            pattern: '[A-Z]+',
            type: 'string',
            description: 'Blockchain the address belongs to',
            example: 'ETH',
          },
          holding_value_usd: {
            title: 'Holding Value Usd',
            type: 'number',
            description:
              'Deprecated.The holding value (USD) i.e. The sum of the last price of each NFT held by the address',
            example: 11312.576910773714,
          },
          holding_value_eth: {
            title: 'Holding Value Eth',
            type: 'number',
            description:
              'Deprecated.The holding value (ETh) i.e. The sum of the last price of each NFT held by the address',
            example: 10.28416083,
          },
          nft_num: {
            title: 'Nft Num',
            minimum: 0.0,
            type: 'integer',
            description: 'The number of NFTs owned by this address',
            example: 3,
          },
          est_holding_value_usd: {
            title: 'Est Holding Value Usd',
            type: 'number',
            description:
              "The estimated holding value (USD), a estimated price of a nft is calculated by 'if 7d volume of nft = 0 : estPrice = max(avg price, floor price)'; else : estPrice = last trade price",
            example: 1718.7829654688755,
          },
          est_holding_value_eth: {
            title: 'Est Holding Value Eth',
            type: 'number',
            description:
              "The estimated holding value (ETH), a estimated price of a nft is calculated by 'if 7d volume of nft = 0 : estPrice = max(avg price, floor price)'; else : estPrice = last trade price",
            example: 1.56181818,
          },
          buy_volume_usd: {
            title: 'Buy Volume Usd',
            type: 'number',
            description: 'The buy volume (USD) i.e. the total usd the address payed for purchasing',
            example: 1244908.5664819027,
          },
          buy_volume_eth: {
            title: 'Buy Volume Eth',
            type: 'number',
            description: 'The buy volume (ETH) i.e. the total usd the address payed for purchasing',
            example: 1131.73506044,
          },
          sell_volume_usd: {
            title: 'Sell Volume Usd',
            type: 'number',
            description: 'The sell volume (USD) i.e. the total usd the address got by selling',
            example: 647826.8522261272,
          },
          sell_volume_eth: {
            title: 'Sell Volume Eth',
            type: 'number',
            description: 'The sell volume (ETH) i.e. the total usd the address got by selling',
            example: 588.93350202,
          },
          pnl_usd: {
            title: 'Pnl Usd',
            type: 'number',
            description:
              'Pnl means profit and loss, positive value for profit and negative value for loss. Profit means the sum of realized profits (USD) made from sales and estimated unrealized profit of NFTs held by the address',
            example: -9593.793945304838,
          },
          pnl_eth: {
            title: 'Pnl Eth',
            type: 'number',
            description:
              'Pnl means profit and loss, positive value for profit and negative value for loss. Profit means the sum of realized profits (ETH) made from sales and estimated unrealized profit of NFTs held by the address',
            example: -8.72163086,
          },
          is_whale: {
            title: 'Is Whale',
            type: 'boolean',
            description: 'Whether the address is a whale',
            default: false,
          },
        },
      },
      CollectionHolding: {
        title: 'CollectionHolding',
        required: ['collection'],
        type: 'object',
        properties: {
          collection: {
            $ref: '#/components/schemas/Collection',
          },
          hold_num: {
            title: 'Hold Num',
            type: 'integer',
          },
          floor_price: {
            $ref: '#/components/schemas/PriceV3',
          },
        },
      },
      CollectionHoldingList: {
        title: 'CollectionHoldingList',
        type: 'object',
        properties: {
          total: {
            title: 'Total',
            type: 'integer',
            description: 'Total number of collections the address holds',
          },
          collection_holdings: {
            title: 'Collection Holdings',
            type: 'array',
            items: {
              $ref: '#/components/schemas/CollectionHolding',
            },
            description: 'A list of collections',
          },
        },
      },
      CollectionList: {
        title: 'CollectionList',
        required: ['total', 'collections'],
        type: 'object',
        properties: {
          total: {
            title: 'Total',
            type: 'integer',
            description: 'Total number of collections',
          },
          collections: {
            title: 'Collections',
            type: 'array',
            items: {
              $ref: '#/components/schemas/CollectionWithFP',
            },
            description: 'A list of collections',
          },
        },
      },
      CollectionSimpleInfo: {
        title: 'CollectionSimpleInfo',
        required: ['contracts'],
        type: 'object',
        properties: {
          collection_id: {
            title: 'Collection Id',
            type: 'string',
            description: 'The collection id of the collection',
          },
          name: {
            title: 'Name',
            type: 'string',
            description: 'Collection name',
            example: 'Bored Ape Yacht Club',
          },
          logo: {
            title: 'Logo',
            type: 'string',
            description: 'The logo url or base64 encoded data of a collection',
            example: 'https://static.nftgo.io/asset/1651210195557.png',
          },
          contracts: {
            title: 'Contracts',
            type: 'array',
            items: {
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
            },
            description: 'List of contract addresses which belong to a collection',
            example: ['0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'],
          },
          contract_type: {
            title: 'Contract Type',
            type: 'string',
            description: 'Type of contract: ERC721 or ERC1155',
            example: 'ERC721',
          },
          slug: {
            title: 'Slug',
            type: 'string',
            description:
              "A slug is generated from a collection name by using applying lower-case to all letters in the collection name and replacing all spaces with a '-'",
            example: 'bored-ape-yacht-club',
          },
          floor_price: {
            title: 'Floor Price',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV3',
              },
            ],
            description: 'Floor price of collection',
          },
        },
      },
      CollectionSupportedInfo: {
        title: 'CollectionSupportedInfo',
        type: 'object',
        properties: {
          marketplaces: {
            title: 'Marketplaces',
            description:
              'The marketplaces in which the current collection has listing and the corresponding listing quantity.',
            example: {
              opensea: 10,
            },
          },
          rarities: {
            title: 'Rarities',
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'What rarity models are supported by this collection on NFTGo.',
          },
        },
      },
      CollectionTrait: {
        title: 'CollectionTrait',
        required: ['name'],
        type: 'object',
        properties: {
          name: {
            title: 'Name',
            type: 'string',
            description: 'The name of the trait',
            example: 'Background',
          },
          display_type: {
            title: 'Display Type',
            type: 'string',
            description: 'The display type of the trait',
            example: 'string',
          },
          values: {
            title: 'Values',
            type: 'array',
            items: {
              $ref: '#/components/schemas/SingleTraitWithFloor',
            },
            description: 'The list of single traits of Collection.Contain floor price and count. ',
          },
          min: {
            title: 'Min',
            type: 'number',
            description: 'The min value of the trait',
            example: 1,
          },
          max: {
            title: 'Max',
            type: 'number',
            description: 'The max value of the trait',
            example: 3,
          },
          total: {
            title: 'Total',
            type: 'integer',
            description: 'The total count of the trait',
            example: 100,
          },
        },
        description: 'Return the list of traits of an Collection.Contain floor price and count.',
      },
      CollectionWithFP: {
        title: 'CollectionWithFP',
        required: ['last_updated', 'blockchain', 'contracts'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            description: 'The blockchain the collection belongs to',
            example: 'ETH',
          },
          name: {
            title: 'Name',
            type: 'string',
            description: 'Collection name',
            example: 'Bored Ape Yacht Club',
          },
          slug: {
            title: 'Slug',
            type: 'string',
            description:
              "A slug is generated from a collection name by using applying lower-case to all letters in the collection name and replacing all spaces with a '-'",
            example: 'bored-ape-yacht-club',
          },
          opensea_slug: {
            title: 'Opensea Slug',
            type: 'string',
            description: 'An opensea slug is generated from the corresponding opensea url link',
            example: 'boredapeyachtclub',
          },
          description: {
            title: 'Description',
            type: 'string',
            description: 'Collection description',
            example:
              'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs\u2014 unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.',
          },
          official_website_url: {
            title: 'Official Website Url',
            type: 'string',
            description: 'The official website url of collection',
            example: 'https://boredapeyachtclub.com/',
          },
          opensea_url: {
            title: 'Opensea Url',
            type: 'string',
            description: 'The opensea url of collection',
            example: 'https://opensea.io/collection/boredapeyachtclub',
          },
          logo: {
            title: 'Logo',
            type: 'string',
            description: 'The logo url or base64 encoded data of a collection',
            example: 'https://static.nftgo.io/asset/1651210195557.png',
          },
          contracts: {
            title: 'Contracts',
            type: 'array',
            items: {
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
            },
            description: 'List of contract addresses which belong to a collection',
            example: ['0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'],
          },
          contract_type: {
            title: 'Contract Type',
            type: 'string',
            description: 'Type of contract: ERC721 or ERC1155',
            example: 'ERC721',
          },
          categories: {
            title: 'Categories',
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'List of categor(ies) that a collection belongs to',
            example: ['PFP'],
          },
          discord_url: {
            title: 'Discord Url',
            type: 'string',
            description: 'The discord url of a collection',
            example: 'https://discord.com/invite/3P5K3dzgdB',
          },
          instagram_url: {
            title: 'Instagram Url',
            type: 'string',
            description: 'The instagram url of a collection',
            example: 'https://www.instagram.com/boredapeyachtclub/',
          },
          twitter_url: {
            title: 'Twitter Url',
            type: 'string',
            description: 'The twitter url of a collection',
            example: 'https://twitter.com/boredapeyc',
          },
          banner_image_url: {
            title: 'Banner Image Url',
            type: 'string',
            description: 'The banner image url of a collection',
          },
          telegram_url: {
            title: 'Telegram Url',
            type: 'string',
            description: 'The telegram url of a collection',
          },
          has_rarity: {
            title: 'Has Rarity',
            type: 'boolean',
            description: 'Whether the collection has rarity rankings',
            default: false,
            example: true,
          },
          is_blue_chip_coll: {
            title: 'Is Blue Chip Coll',
            type: 'boolean',
            description: 'Whether the collection is a blue chip collection',
            default: false,
            example: true,
          },
          total_supply: {
            title: 'Total Supply',
            type: 'integer',
            description:
              'The total number of NFTs in a collection includes the count of both existing NFTs and those that have been burned.\n        For ERC1155 collection, the count refers to the number of token types.',
          },
          is_spam: {
            title: 'Is Spam',
            type: 'boolean',
            description: 'Whether the collection is spam',
            default: false,
          },
          protocol_name: {
            title: 'Protocol Name',
            type: 'string',
            description: 'The protocol name of the collection',
            example: 'brc-20',
          },
          floor_price: {
            title: 'Floor Price',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV3',
              },
            ],
            description: 'Floor price of collection',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      CollectionsParams: {
        title: 'CollectionsParams',
        required: ['collections'],
        type: 'object',
        properties: {
          collections: {
            title: 'Collections',
            type: 'array',
            items: {
              type: 'string',
            },
            description:
              'The collection filters is a array.The elements can be a contract address, collection id, slug or opensea slug.If the slug contains special characters, you need to escape them before performing the query.Maximum size is 50.',
            example: ['0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', 'azuki'],
          },
        },
      },
      CreatedAddressOffers: {
        title: 'CreatedAddressOffers',
        type: 'object',
        properties: {
          offers: {
            title: 'Offers',
            type: 'array',
            items: {
              $ref: '#/components/schemas/CreatedOffer',
            },
            description: 'List of NFT offer on the address',
          },
          total: {
            title: 'Total',
            type: 'integer',
          },
        },
      },
      CreatedListing: {
        title: 'CreatedListing',
        type: 'object',
        properties: {
          nft: {
            $ref: '#/components/schemas/ListingNFTInfo',
          },
          listing_data: {
            title: 'Listing Data',
            type: 'array',
            items: {
              $ref: '#/components/schemas/AddressListing',
            },
          },
          collection: {
            $ref: '#/components/schemas/CollectionSimpleInfo',
          },
        },
      },
      CreatedOffer: {
        title: 'CreatedOffer',
        type: 'object',
        properties: {
          nft: {
            $ref: '#/components/schemas/OfferNFTInfo',
          },
          floor_price_difference: {
            title: 'Floor Price Difference',
            type: 'number',
            description:
              'Offer Price difference with collection floor price.Example:0.41, which means that the offer price is %41 higher than the floor price.',
          },
          collection: {
            $ref: '#/components/schemas/CollectionSimpleInfo',
          },
          offer: {
            $ref: '#/components/schemas/Offer',
          },
          to_address: {
            $ref: '#/components/schemas/AddressInfoV2',
          },
        },
      },
      CryptoPriceV2: {
        title: 'CryptoPriceV2',
        type: 'object',
        properties: {
          payment_token: {
            title: 'Payment Token',
            allOf: [
              {
                $ref: '#/components/schemas/PaymentToken',
              },
            ],
            description: 'The token used for payment',
            default: {
              address: '0x0000000000000000000000000000000000000000',
              symbol: 'ETH',
              decimals: 18,
            },
          },
          raw_value: {
            title: 'Raw Value',
            type: 'integer',
            description: 'Number of token paid',
            example: 10000000000000000,
          },
          value: {
            title: 'Value',
            type: 'number',
            description: 'Total value in the measure of {payment_token.symbol}',
            example: 86.8042,
          },
          usd: {
            title: 'Usd',
            type: 'number',
            description:
              'The equivalent payment in dollars, calculated based on the exchange rate at the time of the transaction',
          },
        },
      },
      CryptoPriceWithOrderId: {
        title: 'CryptoPriceWithOrderId',
        type: 'object',
        properties: {
          payment_token: {
            title: 'Payment Token',
            allOf: [
              {
                $ref: '#/components/schemas/PaymentToken',
              },
            ],
            description: 'The token used for payment',
            default: {
              address: '0x0000000000000000000000000000000000000000',
              symbol: 'ETH',
              decimals: 18,
            },
          },
          raw_value: {
            title: 'Raw Value',
            type: 'integer',
            description: 'Number of token paid',
            example: 10000000000000000,
          },
          value: {
            title: 'Value',
            type: 'number',
            description: 'Total value in the measure of {payment_token.symbol}',
            example: 86.8042,
          },
          usd: {
            title: 'Usd',
            type: 'number',
            description:
              'The equivalent payment in dollars, calculated based on the exchange rate at the time of the transaction',
          },
          market_name: {
            title: 'Market Name',
            type: 'string',
            example: 'opensea',
          },
          order_id: {
            title: 'Order Id',
            type: 'string',
            description: 'The unique order id',
          },
        },
      },
      EnsAddress: {
        title: 'EnsAddress',
        type: 'object',
        properties: {
          name: {
            title: 'Name',
            type: 'string',
            description: 'The ENS name',
          },
          address: {
            title: 'Address',
            type: 'string',
            description: 'The wallet address',
          },
        },
      },
      EthUsdEnum: {
        title: 'EthUsdEnum',
        enum: ['ETH', 'USD'],
        type: 'string',
        description: 'An enumeration.',
      },
      ExtraRarityInfo: {
        title: 'ExtraRarityInfo',
        type: 'object',
        properties: {
          open_rarity: {
            title: 'Open Rarity',
            allOf: [
              {
                $ref: '#/components/schemas/RarityInfoBase',
              },
            ],
            description: 'Open Rarity rank',
            example: {
              rank: 9152,
            },
          },
          rarity_sniper: {
            title: 'Rarity Sniper',
            allOf: [
              {
                $ref: '#/components/schemas/RarityInfoBase',
              },
            ],
            description: 'Rarity Sniper rank',
            example: {
              rank: 9152,
            },
          },
        },
      },
      Fee: {
        title: 'Fee',
        type: 'object',
        properties: {
          fee_type: {
            title: 'Fee Type',
            type: 'string',
            description:
              'The fee_type represents the type of tax, and there are currently two types: marketplace and royalty.',
          },
          recipient: {
            title: 'Recipient',
            type: 'string',
            description: 'The address for the allocation of tax payments.',
          },
          bps: {
            title: 'Bps',
            type: 'integer',
            description: 'The tax rate, where 250 represents 2.5%.',
          },
          price: {
            $ref: '#/components/schemas/PriceV3',
          },
        },
      },
      FeeBreakDownKind: {
        title: 'FeeBreakDownKind',
        enum: ['royalty', 'marketplace'],
        type: 'string',
        description: 'An enumeration.',
      },
      FeeBreakdownItem: {
        title: 'FeeBreakdownItem',
        required: ['bps', 'kind', 'recipient'],
        type: 'object',
        properties: {
          bps: {
            title: 'Bps',
            type: 'number',
            description: 'basis point',
          },
          kind: {
            allOf: [
              {
                $ref: '#/components/schemas/FeeBreakDownKind',
              },
            ],
            description: 'fee kind',
          },
          recipient: {
            title: 'Recipient',
            type: 'string',
            description: 'recipient',
          },
        },
      },
      HTTPValidationError: {
        title: 'HTTPValidationError',
        type: 'object',
        properties: {
          detail: {
            title: 'Detail',
            type: 'array',
            items: {
              $ref: '#/components/schemas/ValidationError',
            },
          },
        },
      },
      Holder: {
        title: 'Holder',
        required: ['address', 'start_hold_time', 'quantity'],
        type: 'object',
        properties: {
          address: {
            title: 'Address',
            anyOf: [
              {
                maxLength: 42,
                minLength: 42,
                pattern: '^0x[a-fA-F0-9]{40}$',
                type: 'string',
              },
              {
                type: 'string',
              },
            ],
            description: 'Ethereum address, 42-character hexadecimal string beginning with 0x',
            example: '0x5aa45180632a054f6f5fa6dd1db31cab03f2f1c2',
          },
          start_hold_time: {
            title: 'Start Hold Time',
            type: 'integer',
            description: 'The timestamp (in seconds) when the owner starts holding the NFT',
          },
          quantity: {
            title: 'Quantity',
            type: 'integer',
            description: 'The quantity of NFTs that the owner holds',
            example: 1,
          },
          address_tag: {
            $ref: '#/components/schemas/AddressInfoV2',
          },
        },
      },
      HolderTypeEnum: {
        title: 'HolderTypeEnum',
        enum: ['blue_chip_holder', 'whale', 'top_100_holder', 'top_holder'],
        type: 'string',
        description: 'An enumeration.',
      },
      Holders: {
        title: 'Holders',
        type: 'object',
        properties: {
          holders: {
            title: 'Holders',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Holder',
            },
          },
          total: {
            title: 'Total',
            type: 'integer',
            description: 'The total count of the NFT holders',
          },
        },
      },
      LeaderBoardItem: {
        title: 'LeaderBoardItem',
        required: [
          'address',
          'blockchain',
          'is_blue_chip_holder',
          'is_super_blue_chip_holder',
          'is_contract_address',
          'pnl_usd',
          'pnl_eth',
          'portfolio_eth',
          'portfolio_usd',
          'unrealized_profit_eth',
          'unrealized_profit_usd',
          'realized_profit_eth',
          'realized_profit_usd',
          'revenue_eth',
          'revenue_usd',
          'spent_eth',
          'spent_usd',
        ],
        type: 'object',
        properties: {
          address: {
            title: 'Address',
            maxLength: 42,
            minLength: 42,
            pattern: '^0x[a-fA-F0-9]{40}$',
            type: 'string',
            description: "Whale's address",
            example: '0xa99a76dddbb9678bc33f39919bc76d279c680c89',
          },
          blockchain: {
            title: 'Blockchain',
            pattern: '[A-Z]+',
            type: 'string',
            description: 'Blockchain the address belongs to',
            example: 'ETH',
          },
          is_blue_chip_holder: {
            title: 'Is Blue Chip Holder',
            type: 'boolean',
            description: 'Whether the address is a blue chip holder',
          },
          is_super_blue_chip_holder: {
            title: 'Is Super Blue Chip Holder',
            type: 'boolean',
            description: 'Whether the address is a super blue chip holder',
          },
          is_contract_address: {
            title: 'Is Contract Address',
            type: 'boolean',
            description: 'Whether the address is a contract address',
          },
          pnl_usd: {
            title: 'Pnl Usd',
            type: 'number',
            description:
              'Pnl means profit and loss, positive value for profit and negative value for loss. Profit means the sum of realized profits (USD) made from sales and estimated unrealized profit of NFTs held by the address',
            example: -9593.793945304838,
          },
          pnl_eth: {
            title: 'Pnl Eth',
            type: 'number',
            description:
              'Pnl means profit and loss, positive value for profit and negative value for loss. Profit means the sum of realized profits (USD) made from sales and estimated unrealized profit of NFTs held by the address',
            example: -9593.793945304838,
          },
          portfolio_eth: {
            title: 'Portfolio Eth',
            type: 'number',
            description:
              'Pnl means profit and loss, positive value for profit and negative value for loss. Profit means the sum of realized profits (USD) made from sales and estimated unrealized profit of NFTs held by the address',
            example: 10.28416083,
          },
          portfolio_usd: {
            title: 'Portfolio Usd',
            type: 'number',
            description:
              'Pnl means profit and loss, positive value for profit and negative value for loss. Profit means the sum of realized profits (USD) made from sales and estimated unrealized profit of NFTs held by the address',
            example: 1131.73506044,
          },
          unrealized_profit_eth: {
            title: 'Unrealized Profit Eth',
            type: 'number',
            description:
              'The sum of unrealized profit of NFTs held by this whale. Unrealized profit is a theoretical profit that has not been sold for cash.',
          },
          unrealized_profit_usd: {
            title: 'Unrealized Profit Usd',
            type: 'number',
            description:
              'The sum of unrealized profit of NFTs held by this whale. Unrealized profit is a theoretical profit that has not been sold for cash.',
          },
          realized_profit_eth: {
            title: 'Realized Profit Eth',
            type: 'number',
            description: 'Net profit from sold NFTs.',
          },
          realized_profit_usd: {
            title: 'Realized Profit Usd',
            type: 'number',
            description: 'Net profit from sold NFTs.',
          },
          revenue_eth: {
            title: 'Revenue Eth',
            type: 'number',
            description: 'Total money the whale gained by selling NFTs.',
          },
          revenue_usd: {
            title: 'Revenue Usd',
            type: 'number',
            description: 'Total money the whale gained by selling NFTs.',
          },
          spent_eth: {
            title: 'Spent Eth',
            type: 'number',
            description: 'Total money the whale spent buying and minting NFTs.',
          },
          spent_usd: {
            title: 'Spent Usd',
            type: 'number',
            description: 'Total money the whale spent buying and minting NFTs.',
          },
        },
      },
      LeaderBoardItemList: {
        title: 'LeaderBoardItemList',
        required: ['total', 'items'],
        type: 'object',
        properties: {
          total: {
            title: 'Total',
            type: 'integer',
            description: 'Total number of items',
            example: 10000,
          },
          items: {
            title: 'Items',
            type: 'array',
            items: {
              $ref: '#/components/schemas/LeaderBoardItem',
            },
            description: 'Leaderboard attributes',
            example: [
              {
                address: '0xa858ddc0445d8131dac4d1de01f834ffcba52ef1',
                is_whale: true,
                is_blue_chip_holder: false,
                pnl: 151863419.17999536,
                buy_volume_usd: 0.0,
                sell_volume_usd: 136101836.06437066,
                send_num: 23715,
                receive_num: 139494,
                mint_num: 0,
              },
            ],
          },
        },
        description:
          '\u5982\u679c Model \u53ef\u80fd\u53ea\u5305\u542b\u90e8\u5206\u6570\u636e\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f Total',
      },
      ListingInfo: {
        title: 'ListingInfo',
        type: 'object',
        properties: {
          contract_address: {
            title: 'Contract Address',
            type: 'string',
            description: 'Address of the contract for this NFT collection',
          },
          token_id: {
            title: 'Token Id',
            type: 'string',
            description:
              'The token ID for this NFT. Each item in an NFT collection     will be assigned a unique id.',
          },
          order_id: {
            title: 'Order Id',
            type: 'string',
            description: 'ID for aggregate',
          },
          listing_time: {
            title: 'Listing Time',
            type: 'integer',
            description: 'The listing time of the NFT',
          },
          expired_time: {
            title: 'Expired Time',
            type: 'integer',
            description: 'The listing expire time of the NFT',
          },
          eth_price: {
            title: 'Eth Price',
            type: 'number',
            description: 'The price(eth) of the NFT',
          },
          token_price: {
            title: 'Token Price',
            type: 'number',
            description: 'The price(eth) of the NFT',
          },
          usd_price: {
            title: 'Usd Price',
            type: 'number',
            description: 'The usd price(usd) of the NFT',
          },
          market_name: {
            title: 'Market Name',
            type: 'string',
            description: 'The listing market name the NFT',
          },
          market_link: {
            title: 'Market Link',
            type: 'string',
            description: 'The listing market link the NFT',
          },
          seller_address: {
            title: 'Seller Address',
            type: 'string',
            description: 'The seller address of the NFT',
          },
          payment_token: {
            title: 'Payment Token',
            allOf: [
              {
                $ref: '#/components/schemas/PaymentToken',
              },
            ],
            description: 'The payment token info',
          },
          order_kind: {
            title: 'Order Kind',
            type: 'string',
            description: 'The protocol type of this order',
          },
          quantity: {
            title: 'Quantity',
            type: 'integer',
            description: 'The sales number of order',
          },
        },
      },
      ListingNFTInfo: {
        title: 'ListingNFTInfo',
        required: ['contract_address', 'blockchain'],
        type: 'object',
        properties: {
          contract_address: {
            title: 'Contract Address',
            anyOf: [
              {
                maxLength: 42,
                minLength: 42,
                pattern: '^0x[a-fA-F0-9]{40}$',
                type: 'string',
              },
              {
                type: 'string',
              },
            ],
            description: 'Contract address of the collection this NFT belongs to',
          },
          token_id: {
            title: 'Token Id',
            type: 'string',
            description: 'The token ID of this NFT',
          },
          name: {
            title: 'Name',
            type: 'string',
            description: 'The name of this NFT',
          },
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            description: 'The blockchain where this NFT resides',
          },
          image: {
            title: 'Image',
            type: 'string',
            description: 'The url or base64 data of image or video associated with the NFT',
            example:
              'https://static.nftgo.io/asset/metadata/image/5e236a5b9e95e4b88df604399ea7ca56229fdf86b9b8da78a6fd587a155b8b98',
          },
          contract_type: {
            title: 'Contract Type',
            type: 'string',
            description: 'Type of contract: ERC721 or ERC1155',
            example: 'ERC721',
          },
          suspicious: {
            title: 'Suspicious',
            type: 'boolean',
            description: 'Is it not tradeable on OpenSea?',
            default: false,
          },
          rarity: {
            title: 'Rarity',
            allOf: [
              {
                $ref: '#/components/schemas/Rarity',
              },
            ],
            description:
              'NFT Rarity score. Calculation methods can be seen as below: https://mirror.xyz/nftgoio.eth/kHWaMtNY6ZOvDzr7PR99D03--VNu6-ZOjYuf6E9-QH0',
            example: {
              score: 34.72,
              rank: 9152,
              total: 10000,
            },
          },
          extra_rarity_info: {
            title: 'Extra Rarity Info',
            allOf: [
              {
                $ref: '#/components/schemas/ExtraRarityInfo',
              },
            ],
            description: 'NFT Rarity info from open rarity and rarity sniper',
            example: {
              open_rarity: {
                rank: 9152,
              },
              rarity_sniper: {
                rank: 9152,
              },
            },
          },
        },
      },
      MarketSentiment: {
        title: 'MarketSentiment',
        type: 'object',
        properties: {
          score: {
            title: 'Score',
            maximum: 100.0,
            minimum: 1.0,
            type: 'integer',
            description: 'score ranging from [1, 100]',
          },
          text: {
            title: 'Text',
            type: 'string',
            description:
              'Sentiment ranges: scores between (0, 20] are labeled cold;                 scores between (20, 40] are labeled cool;                      scores between (40, 60] are labeled normal;                           scores between (60, 80] are labeled warm;                                and scores between (80, 100] are labeled hot',
          },
        },
      },
      Marketplace: {
        title: 'Marketplace',
        required: [
          'marketplace_name',
          'volume_usd',
          'volume_eth',
          'sale_num',
          'trader_num',
          'buyer_num',
          'seller_num',
        ],
        type: 'object',
        properties: {
          marketplace_name: {
            title: 'Marketplace Name',
            type: 'string',
            description: 'Name of the marketplace',
            example: 'X2Y2',
          },
          marketplace_icon_url: {
            title: 'Marketplace Icon Url',
            type: 'string',
            description: 'Official website icon url of the marketplace',
            example: 'https://static.nftgo.io/marketplace/X2Y2.svg',
          },
          marketplace_offcial_site_url: {
            title: 'Marketplace Offcial Site Url',
            type: 'string',
            description: 'Official website url of the marketplace',
            example: 'https://x2y2.io/',
          },
          volume_usd: {
            title: 'Volume Usd',
            type: 'number',
            description:
              'The total USD volume of NFT sales in the marketplace over the selected time range.',
            example: 20578280.11807763,
          },
          volume_eth: {
            title: 'Volume Eth',
            type: 'number',
            description:
              'The total ETH volume of NFT sales in the marketplace over the selected time range',
            example: 18707.52738007,
          },
          sale_num: {
            title: 'Sale Num',
            type: 'integer',
            description: 'The number of sales in the marketplace over the selected time range.',
            example: 10011,
          },
          trader_num: {
            title: 'Trader Num',
            type: 'integer',
            description:
              'The number of unique addresses bought or sold at least one NFT over the selected time range in the marketplace.',
            example: 4417,
          },
          buyer_num: {
            title: 'Buyer Num',
            type: 'integer',
            description:
              'The number of unique addresses bought at least one NFT over the selected time range in the marketplace.',
            example: 1464,
          },
          seller_num: {
            title: 'Seller Num',
            type: 'integer',
            description:
              'The number of unique addresses sold at least one NFT over the selected time range in the marketplace.',
            example: 3338,
          },
          fee_rates: {
            title: 'Fee Rates',
            type: 'array',
            items: {
              $ref: '#/components/schemas/MarketplaceFeeRate',
            },
          },
        },
      },
      MarketplaceFeeRate: {
        title: 'MarketplaceFeeRate',
        required: ['min_value', 'max_value', 'unit'],
        type: 'object',
        properties: {
          title: {
            title: 'Title',
            type: 'string',
            description: 'Title of marketplace fee rate',
          },
          min_value: {
            title: 'Min Value',
            type: 'number',
            description: 'Minimum value of marketplace fee rate',
          },
          max_value: {
            title: 'Max Value',
            type: 'number',
            description: 'Maximum value of marketplace fee rate',
          },
          unit: {
            title: 'Unit',
            type: 'string',
            description: 'Unit of marketplace fee rate',
          },
        },
      },
      MultiCollectionTraits: {
        title: 'MultiCollectionTraits',
        required: ['traits'],
        type: 'object',
        properties: {
          collection_id: {
            title: 'Collection Id',
            type: 'string',
            description: 'The collection id of the collection',
          },
          collection_name: {
            title: 'Collection Name',
            type: 'string',
            description: 'Collection name',
            example: 'Bored Ape Yacht Club',
          },
          collection_slug: {
            title: 'Collection Slug',
            type: 'string',
            description: 'Collection slug',
          },
          opensea_slug: {
            title: 'Opensea Slug',
            type: 'string',
            description: 'An opensea slug is generated from the corresponding opensea url link',
            example: 'boredapeyachtclub',
          },
          contracts: {
            title: 'Contracts',
            type: 'array',
            items: {
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
            },
            description: 'List of contract addresses which belong to a collection',
          },
          traits: {
            title: 'Traits',
            type: 'array',
            items: {
              $ref: '#/components/schemas/CollectionTrait',
            },
          },
        },
      },
      NFTHolding: {
        title: 'NFTHolding',
        required: ['nft', 'quantity'],
        type: 'object',
        properties: {
          nft: {
            title: 'Nft',
            allOf: [
              {
                $ref: '#/components/schemas/NFT_with_last_sale',
              },
            ],
            description: 'NFT Information',
          },
          quantity: {
            title: 'Quantity',
            type: 'integer',
            description: 'The quantity of NFTs held',
            example: 1,
          },
        },
      },
      NFTHoldingList: {
        title: 'NFTHoldingList',
        required: ['assets'],
        type: 'object',
        properties: {
          total: {
            title: 'Total',
            type: 'integer',
            description: 'Total number of NFTs the address holds',
          },
          assets: {
            title: 'Assets',
            type: 'array',
            items: {
              $ref: '#/components/schemas/NFTHolding',
            },
            description: 'A list of NFT assets',
          },
        },
      },
      NFTMetrics: {
        title: 'NFTMetrics',
        required: ['last_updated'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          sale_num_7d: {
            title: 'Sale Num 7D',
            type: 'integer',
            description: 'Total number of sales in the last 7 days',
            example: 0,
          },
          sale_num_all: {
            title: 'Sale Num All',
            type: 'integer',
            description: 'Total number of all-time sales',
            example: 4,
          },
          max_price: {
            title: 'Max Price',
            allOf: [
              {
                $ref: '#/components/schemas/Sale',
              },
            ],
            description: 'Maximum historical sale price of this NFT',
            example: {
              tx_hash: '0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              price_token: 98.5,
              token_symbol: 'ETH',
              token_contract_address: '0x0000000000000000000000000000000000000000',
              price_usd: 202001.28197466402,
              price: {
                value: 98.5,
                crypto_unit: 'ETH',
                usd: 202001.28197466402,
                eth_value: 98.5,
                payment_token: {
                  address: '0x0000000000000000000000000000000000000000',
                  symbol: 'ETH',
                  decimals: 18,
                },
              },
              tx_url:
                'https://etherscan.io/tx/0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              time: 1651506757,
            },
          },
          min_price: {
            title: 'Min Price',
            allOf: [
              {
                $ref: '#/components/schemas/Sale',
              },
            ],
            description: 'Minimum historical sale price of this NFT',
            example: {
              tx_hash: '0xf28cc8354a14b627632a81dd7d87e0edbf9c40f9d0c94ee4cda0f13f07ec1b7c',
              price_token: 0.15,
              token_symbol: 'ETH',
              token_contract_address: '0x0000000000000000000000000000000000000000',
              price_usd: 425.0667547828569,
              price: {
                value: 0.15,
                crypto_unit: 'ETH',
                usd: 425.0667547828569,
                eth_value: 0.15,
                payment_token: {
                  address: '0x0000000000000000000000000000000000000000',
                  symbol: 'ETH',
                  decimals: 18,
                },
              },
              tx_url:
                'https://etherscan.io/tx/0xf28cc8354a14b627632a81dd7d87e0edbf9c40f9d0c94ee4cda0f13f07ec1b7c',
              time: 1619864413,
            },
          },
          last_price: {
            title: 'Last Price',
            allOf: [
              {
                $ref: '#/components/schemas/Sale',
              },
            ],
            description: 'Last sale price of this NFT',
            example: {
              tx_hash: '0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              price_token: 98.5,
              token_symbol: 'ETH',
              token_contract_address: '0x0000000000000000000000000000000000000000',
              price_usd: 202001.28197466402,
              price: {
                value: 98.5,
                crypto_unit: 'ETH',
                usd: 202001.28197466402,
                eth_value: 98.5,
                payment_token: {
                  address: '0x0000000000000000000000000000000000000000',
                  symbol: 'ETH',
                  decimals: 18,
                },
              },
              tx_url:
                'https://etherscan.io/tx/0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              time: 1652571359,
            },
          },
          avg_price_usd: {
            title: 'Avg Price Usd',
            type: 'object',
            additionalProperties: {
              type: 'number',
            },
            description: 'Average sale price of this NFT in USD over all sales',
            example: {
              '3M': 197405.47912092094,
              '1y': 197405.47912092094,
              all: 98988.12209388186,
            },
          },
          past_owners: {
            title: 'Past Owners',
            type: 'array',
            items: {
              $ref: '#/components/schemas/_AddressAndHoldingTime',
            },
            description:
              'Addresses that previously held this NFT (excluding current holders) and their respective holding periods',
            example: [
              {
                address: '0x6e185658442ab2a27f86402fc36b379c8ffc76f8',
                holding_time: 32588789,
              },
              {
                address: '0x0232d1083e970f0c78f56202b9a666b526fa379f',
                holding_time: 92988,
              },
              {
                address: '0xcc22f5b0f39d10be2a5414a53650b281538130a9',
                holding_time: 23971,
              },
              {
                address: '0x7baf191cfaa4a0b08991fb728179baaf3917836a',
                holding_time: 9818,
              },
              {
                address: '0x1050aa5151ba80d37e437c5253ee9476b82aadf1',
                holding_time: 1198,
              },
              {
                address: '0x2cca12bfe9554596509acfa437af75d7937635f5',
                holding_time: 605,
              },
            ],
          },
          create_time: {
            title: 'Create Time',
            type: 'integer',
            description: 'Date and time this NFT was minted (UTC in seconds).',
            example: 1619854595,
          },
          start_holding_time: {
            title: 'Start Holding Time',
            type: 'integer',
            description: 'Date and time the current owner acquired the NFT (UTC in seconds).',
            example: 1652571964,
          },
          longest_holding_time: {
            title: 'Longest Holding Time',
            type: 'integer',
            description: 'The longest time this NFT was held across all previous owners',
            example: 32588789,
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      NFTParams: {
        title: 'NFTParams',
        required: ['params'],
        type: 'object',
        properties: {
          params: {
            title: 'Params',
            type: 'array',
            items: {
              $ref: '#/components/schemas/_Params',
            },
          },
        },
      },
      NFTWithPrice: {
        title: 'NFTWithPrice',
        type: 'object',
        properties: {
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            description: 'Name of the blockchain the NFT belongs to',
            example: 'ETH',
          },
          collection_name: {
            title: 'Collection Name',
            type: 'string',
            description: 'Name of the collection the NFT belongs to',
            example: 'Bored Ape Yacht Club',
          },
          collection_slug: {
            title: 'Collection Slug',
            type: 'string',
            description: 'NFTGo Slug of the collection the NFT belongs to',
            example: 'bored-ape-yacht-club',
          },
          collection_opensea_slug: {
            title: 'Collection Opensea Slug',
            type: 'string',
            description: 'OpenSea slug of the collection the NFT belongs to',
            example: 'boredapeyachtclub',
          },
          collection_logo: {
            title: 'Collection Logo',
            type: 'string',
            description: 'The logo url or base64 encoded data of a collection',
            example: 'https://static.nftgo.io/asset/1651210195557.png',
          },
          contract_type: {
            title: 'Contract Type',
            type: 'string',
            description: 'Type of contract: ERC721 or ERC1155',
            example: 'ERC721',
          },
          contract_address: {
            title: 'Contract Address',
            anyOf: [
              {
                maxLength: 42,
                minLength: 42,
                pattern: '^0x[a-fA-F0-9]{40}$',
                type: 'string',
              },
              {
                type: 'string',
              },
            ],
            description: 'Contract address of the collection the NFT belongs to',
            example: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
          },
          token_id: {
            title: 'Token Id',
            type: 'string',
            description: 'The token ID of the NFT',
            example: '4495',
          },
          name: {
            title: 'Name',
            type: 'string',
            description: 'The name of the NFT',
            example: 'Bored Ape Yacht Club #4495',
          },
          description: {
            title: 'Description',
            type: 'string',
            description: 'The description of the NFT',
          },
          image: {
            title: 'Image',
            type: 'string',
            description: 'The url or base64 data of image or video associated with the NFT',
            example:
              'https://static.nftgo.io/asset/metadata/image/5e236a5b9e95e4b88df604399ea7ca56229fdf86b9b8da78a6fd587a155b8b98',
          },
          animation_url: {
            title: 'Animation Url',
            type: 'string',
            description: 'The url of animation associated with the NFT',
          },
          owner_addresses: {
            title: 'Owner Addresses',
            type: 'array',
            items: {
              anyOf: [
                {
                  maxLength: 42,
                  minLength: 42,
                  pattern: '^0x[a-fA-F0-9]{40}$',
                  type: 'string',
                },
                {
                  type: 'string',
                },
              ],
            },
            description:
              "List of owner addresses currently holding the NFT.         A list of one address if it's an ERC721 NFT. A list of addresses if it's an ERC1155 NFT.",
            example: ['0xcaf1d788c67BdAAC155E7dcC4D64e2004eF651D4'],
          },
          traits: {
            title: 'Traits',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Trait',
            },
            description:
              'The list of NFT traits. Traits consist of a series of types and values, referring to the feature of an NFT. For example, if a project has avatar NFTs, the traits may include headwear, facial traits, clothes, etc. Traits make each item in an NFT collection unique and determine its rarity in a collection.',
            example: [
              {
                type: 'Eyes',
                value: 'Wide Eyed',
                percentage: 0.0549,
              },
              {
                type: 'Background',
                value: 'Aquamarine',
                percentage: 0.1266,
              },
              {
                type: 'Fur',
                value: 'Black',
                percentage: 0.1229,
              },
              {
                type: 'Mouth',
                value: 'Bored',
                percentage: 0.2272,
              },
              {
                type: 'Clothes',
                value: 'Service',
                percentage: 0.0142,
              },
            ],
          },
          rarity: {
            title: 'Rarity',
            allOf: [
              {
                $ref: '#/components/schemas/Rarity',
              },
            ],
            description:
              'NFT Rarity score. Calculation methods can be seen as below: https://mirror.xyz/nftgoio.eth/kHWaMtNY6ZOvDzr7PR99D03--VNu6-ZOjYuf6E9-QH0',
            example: {
              score: 34.72,
              rank: 9152,
              total: 10000,
            },
          },
          owners: {
            title: 'Owners',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Holder',
            },
            description: 'owner tag, with owner address and the quantity of nft this owner have',
          },
          extra_rarity_info: {
            title: 'Extra Rarity Info',
            allOf: [
              {
                $ref: '#/components/schemas/ExtraRarityInfo',
              },
            ],
            description: 'NFT Rarity info from open rarity and rarity sniper',
            example: {
              open_rarity: {
                rank: 9152,
              },
              rarity_sniper: {
                rank: 9152,
              },
            },
          },
          suspicious: {
            title: 'Suspicious',
            type: 'boolean',
            description: 'Is it not tradeable on OpenSea?',
          },
          last_sale: {
            title: 'Last Sale',
            allOf: [
              {
                $ref: '#/components/schemas/Sale',
              },
            ],
            description: 'Last sale price of the NFT',
            example: {
              tx_hash: '0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              price_token: 98.5,
              token_symbol: 'ETH',
              token_contract_address: '0x0000000000000000000000000000000000000000',
              price_usd: 202001.28197466402,
              price: {
                value: 98.5,
                crypto_unit: 'ETH',
                usd: 202001.28197466402,
                eth_value: 98.5,
                payment_token: {
                  address: '0x0000000000000000000000000000000000000000',
                  symbol: 'ETH',
                  decimals: 18,
                },
              },
              tx_url:
                'https://etherscan.io/tx/0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              time: 1652571359,
            },
          },
          best_offer: {
            title: 'Best Offer',
            allOf: [
              {
                $ref: '#/components/schemas/CryptoPriceWithOrderId',
              },
            ],
            description: 'The real-time highest collection offer price across the marketplaces.',
          },
          best_listing: {
            title: 'Best Listing',
            allOf: [
              {
                $ref: '#/components/schemas/CryptoPriceWithOrderId',
              },
            ],
            description: 'The real-time highest collection listing price across the marketplaces.',
          },
        },
      },
      NFT_with_last_sale: {
        title: 'NFT_with_last_sale',
        type: 'object',
        properties: {
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            description: 'Name of the blockchain the NFT belongs to',
            example: 'ETH',
          },
          collection_name: {
            title: 'Collection Name',
            type: 'string',
            description: 'Name of the collection the NFT belongs to',
            example: 'Bored Ape Yacht Club',
          },
          collection_slug: {
            title: 'Collection Slug',
            type: 'string',
            description: 'NFTGo Slug of the collection the NFT belongs to',
            example: 'bored-ape-yacht-club',
          },
          collection_opensea_slug: {
            title: 'Collection Opensea Slug',
            type: 'string',
            description: 'OpenSea slug of the collection the NFT belongs to',
            example: 'boredapeyachtclub',
          },
          collection_logo: {
            title: 'Collection Logo',
            type: 'string',
            description: 'The logo url or base64 encoded data of a collection',
            example: 'https://static.nftgo.io/asset/1651210195557.png',
          },
          contract_type: {
            title: 'Contract Type',
            type: 'string',
            description: 'Type of contract: ERC721 or ERC1155',
            example: 'ERC721',
          },
          contract_address: {
            title: 'Contract Address',
            anyOf: [
              {
                maxLength: 42,
                minLength: 42,
                pattern: '^0x[a-fA-F0-9]{40}$',
                type: 'string',
              },
              {
                type: 'string',
              },
            ],
            description: 'Contract address of the collection the NFT belongs to',
            example: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
          },
          token_id: {
            title: 'Token Id',
            type: 'string',
            description: 'The token ID of the NFT',
            example: '4495',
          },
          name: {
            title: 'Name',
            type: 'string',
            description: 'The name of the NFT',
            example: 'Bored Ape Yacht Club #4495',
          },
          description: {
            title: 'Description',
            type: 'string',
            description: 'The description of the NFT',
          },
          image: {
            title: 'Image',
            type: 'string',
            description: 'The url or base64 data of image or video associated with the NFT',
            example:
              'https://static.nftgo.io/asset/metadata/image/5e236a5b9e95e4b88df604399ea7ca56229fdf86b9b8da78a6fd587a155b8b98',
          },
          animation_url: {
            title: 'Animation Url',
            type: 'string',
            description: 'The url of animation associated with the NFT',
          },
          owner_addresses: {
            title: 'Owner Addresses',
            type: 'array',
            items: {
              anyOf: [
                {
                  maxLength: 42,
                  minLength: 42,
                  pattern: '^0x[a-fA-F0-9]{40}$',
                  type: 'string',
                },
                {
                  type: 'string',
                },
              ],
            },
            description:
              "List of owner addresses currently holding the NFT.         A list of one address if it's an ERC721 NFT. A list of addresses if it's an ERC1155 NFT.",
            example: ['0xcaf1d788c67BdAAC155E7dcC4D64e2004eF651D4'],
          },
          traits: {
            title: 'Traits',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Trait',
            },
            description:
              'The list of NFT traits. Traits consist of a series of types and values, referring to the feature of an NFT. For example, if a project has avatar NFTs, the traits may include headwear, facial traits, clothes, etc. Traits make each item in an NFT collection unique and determine its rarity in a collection.',
            example: [
              {
                type: 'Eyes',
                value: 'Wide Eyed',
                percentage: 0.0549,
              },
              {
                type: 'Background',
                value: 'Aquamarine',
                percentage: 0.1266,
              },
              {
                type: 'Fur',
                value: 'Black',
                percentage: 0.1229,
              },
              {
                type: 'Mouth',
                value: 'Bored',
                percentage: 0.2272,
              },
              {
                type: 'Clothes',
                value: 'Service',
                percentage: 0.0142,
              },
            ],
          },
          rarity: {
            title: 'Rarity',
            allOf: [
              {
                $ref: '#/components/schemas/Rarity',
              },
            ],
            description:
              'NFT Rarity score. Calculation methods can be seen as below: https://mirror.xyz/nftgoio.eth/kHWaMtNY6ZOvDzr7PR99D03--VNu6-ZOjYuf6E9-QH0',
            example: {
              score: 34.72,
              rank: 9152,
              total: 10000,
            },
          },
          owners: {
            title: 'Owners',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Holder',
            },
            description: 'owner tag, with owner address and the quantity of nft this owner have',
          },
          extra_rarity_info: {
            title: 'Extra Rarity Info',
            allOf: [
              {
                $ref: '#/components/schemas/ExtraRarityInfo',
              },
            ],
            description: 'NFT Rarity info from open rarity and rarity sniper',
            example: {
              open_rarity: {
                rank: 9152,
              },
              rarity_sniper: {
                rank: 9152,
              },
            },
          },
          suspicious: {
            title: 'Suspicious',
            type: 'boolean',
            description: 'Is it not tradeable on OpenSea?',
          },
          last_sale: {
            title: 'Last Sale',
            allOf: [
              {
                $ref: '#/components/schemas/Sale',
              },
            ],
            description: 'Last sale price of the NFT',
            example: {
              tx_hash: '0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              price_token: 98.5,
              token_symbol: 'ETH',
              token_contract_address: '0x0000000000000000000000000000000000000000',
              price_usd: 202001.28197466402,
              price: {
                value: 98.5,
                crypto_unit: 'ETH',
                usd: 202001.28197466402,
                eth_value: 98.5,
                payment_token: {
                  address: '0x0000000000000000000000000000000000000000',
                  symbol: 'ETH',
                  decimals: 18,
                },
              },
              tx_url:
                'https://etherscan.io/tx/0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              time: 1652571359,
            },
          },
        },
      },
      NewAddressMetrics: {
        title: 'NewAddressMetrics',
        required: [
          'last_updated',
          'portfolio_value',
          'activity_num',
          'mint_num',
          'buy_num',
          'sell_num',
          'burn_num',
          'send_num',
          'receive_num',
          'nft_num',
          'collection_num',
          'is_blue_chip_holder',
          'is_super_blue_chip_holder',
          'pnl_value',
          'unrealized_profit',
          'realized_profit',
          'total_revenue',
          'total_spent',
          'total_gas',
        ],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          address_tag: {
            $ref: '#/components/schemas/AddressInfoV2',
          },
          portfolio_value: {
            title: 'Portfolio Value',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'The sum of the estimated value of the collections held by the address.Estimated value of each collection = the number of NFTs the address holds \u00d7 estimated NFT price of each collection.Suspected wash trades have been filtered out.',
          },
          portfolio_rank: {
            title: 'Portfolio Rank',
            type: 'integer',
            description: 'The rank by portfolio value',
            example: 244,
          },
          portfolio_history_1h: {
            title: 'Portfolio History 1H',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'The sum of the estimated value of the collections held by the address before one hours.',
          },
          portfolio_history_24h: {
            title: 'Portfolio History 24H',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'The sum of the estimated value of the collections held by the address before 24 hours.',
          },
          portfolio_history_7d: {
            title: 'Portfolio History 7D',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'The sum of the estimated value of the collections held by the address before 7 days.',
          },
          portfolio_change_percent: {
            title: 'Portfolio Change Percent',
            allOf: [
              {
                $ref: '#/components/schemas/PortfolioChangePercent',
              },
            ],
            description: 'The percentage change of the portfolio value of the address.',
          },
          activity_num: {
            title: 'Activity Num',
            minimum: 0.0,
            type: 'integer',
            description:
              "The number of activities associated with this address, including 'mint', 'buy', 'sell', 'burn', 'send' and 'receive'",
            example: 737,
          },
          mint_num: {
            title: 'Mint Num',
            minimum: 0.0,
            type: 'integer',
            description: "The number of 'mint' activities",
            example: 83,
          },
          buy_num: {
            title: 'Buy Num',
            minimum: 0.0,
            type: 'integer',
            description: "The number of 'buy' activities",
            example: 254,
          },
          sell_num: {
            title: 'Sell Num',
            minimum: 0.0,
            type: 'integer',
            description: "The number of 'sell' activities",
            example: 155,
          },
          burn_num: {
            title: 'Burn Num',
            minimum: 0.0,
            type: 'integer',
            description: "The number of 'burn' activities",
            example: 21,
          },
          send_num: {
            title: 'Send Num',
            minimum: 0.0,
            type: 'integer',
            description:
              "The number of 'send' activity, a sending action is the direct transfer of an NFT to another address, and specifically excludes transfers through an exchange",
            example: 103,
          },
          receive_num: {
            title: 'Receive Num',
            minimum: 0.0,
            type: 'integer',
            description:
              "The number of 'receive' activity, a receiving action is the receiving of an NFT directly through a transfer from another address, and specifically excludes purchases through an exchange",
            example: 121,
          },
          nft_num: {
            title: 'Nft Num',
            minimum: 0.0,
            type: 'integer',
            description: 'The number of NFTs owned by this address',
            example: 3,
          },
          collection_num: {
            title: 'Collection Num',
            minimum: 0.0,
            type: 'integer',
            description: 'The number of collections owned by this address',
            example: 3,
          },
          is_whale: {
            title: 'Is Whale',
            type: 'boolean',
            description: 'Whether the address is a whale',
            default: false,
          },
          is_blue_chip_holder: {
            title: 'Is Blue Chip Holder',
            type: 'boolean',
            description: 'Whether the address is a blue chip holder',
          },
          is_super_blue_chip_holder: {
            title: 'Is Super Blue Chip Holder',
            type: 'boolean',
            description: 'Whether the address is a super blue chip holder',
          },
          pnl_value: {
            title: 'Pnl Value',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'Profit and loss is the sum of realized profit made from sales and estimated unrealized profit of NFTs held by the address. Suspected wash trades have been filtered out.',
          },
          unrealized_profit: {
            title: 'Unrealized Profit',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'Estimated unrealized profit of NFTs held by the address.Suspected wash trades have been filtered out.',
          },
          realized_profit: {
            title: 'Realized Profit',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'Profit made from sales by the address.Suspected wash trades have been filtered out.',
          },
          total_revenue: {
            title: 'Total Revenue',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'Total money the address gained by selling NFTs.Suspected wash trades have been filtered out.',
          },
          total_spent: {
            title: 'Total Spent',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'Total money the address spent buying and minting NFTs.Suspected wash trades have been filtered out.',
          },
          total_gas: {
            title: 'Total Gas',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'Total gas fees paid by the address.Suspected wash trades have been filtered out.',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      NewWhale: {
        title: 'NewWhale',
        required: [
          'address',
          'blockchain',
          'is_blue_chip_holder',
          'is_super_blue_chip_holder',
          'is_contract_address',
          'pnl_usd',
          'pnl_eth',
          'portfolio_eth',
          'portfolio_usd',
          'portfolio_rank',
          'unrealized_profit_eth',
          'unrealized_profit_usd',
          'realized_profit_eth',
          'realized_profit_usd',
          'revenue_eth',
          'revenue_usd',
          'spent_eth',
          'spent_usd',
          'nft_num',
          'collection_num',
          'activities',
        ],
        type: 'object',
        properties: {
          address: {
            title: 'Address',
            maxLength: 42,
            minLength: 42,
            pattern: '^0x[a-fA-F0-9]{40}$',
            type: 'string',
            description: "Whale's address",
            example: '0xa99a76dddbb9678bc33f39919bc76d279c680c89',
          },
          blockchain: {
            title: 'Blockchain',
            pattern: '[A-Z]+',
            type: 'string',
            description: 'Blockchain the address belongs to',
            example: 'ETH',
          },
          is_blue_chip_holder: {
            title: 'Is Blue Chip Holder',
            type: 'boolean',
            description: 'Whether the address is a blue chip holder',
          },
          is_super_blue_chip_holder: {
            title: 'Is Super Blue Chip Holder',
            type: 'boolean',
            description: 'Whether the address is a super blue chip holder',
          },
          is_contract_address: {
            title: 'Is Contract Address',
            type: 'boolean',
            description: 'Whether the address is a contract address',
          },
          pnl_usd: {
            title: 'Pnl Usd',
            type: 'number',
            description:
              'Pnl means profit and loss, positive value for profit and negative value for loss. Profit means the sum of realized profits (USD) made from sales and estimated unrealized profit of NFTs held by the address',
            example: -9593.793945304838,
          },
          pnl_eth: {
            title: 'Pnl Eth',
            type: 'number',
            description:
              'Pnl means profit and loss, positive value for profit and negative value for loss. Profit means the sum of realized profits (USD) made from sales and estimated unrealized profit of NFTs held by the address',
            example: -9593.793945304838,
          },
          portfolio_eth: {
            title: 'Portfolio Eth',
            type: 'number',
            description:
              'Pnl means profit and loss, positive value for profit and negative value for loss. Profit means the sum of realized profits (USD) made from sales and estimated unrealized profit of NFTs held by the address',
            example: 10.28416083,
          },
          portfolio_usd: {
            title: 'Portfolio Usd',
            type: 'number',
            description:
              'Pnl means profit and loss, positive value for profit and negative value for loss. Profit means the sum of realized profits (USD) made from sales and estimated unrealized profit of NFTs held by the address',
            example: 1131.73506044,
          },
          portfolio_rank: {
            title: 'Portfolio Rank',
            type: 'integer',
            description: 'Positive value for profit ranking among all whales',
            example: 2,
          },
          unrealized_profit_eth: {
            title: 'Unrealized Profit Eth',
            type: 'number',
            description:
              'The sum of unrealized profit of NFTs held by this whale. Unrealized profit is a theoretical profit that has not been sold for cash.',
          },
          unrealized_profit_usd: {
            title: 'Unrealized Profit Usd',
            type: 'number',
            description:
              'The sum of unrealized profit of NFTs held by this whale. Unrealized profit is a theoretical profit that has not been sold for cash.',
          },
          realized_profit_eth: {
            title: 'Realized Profit Eth',
            type: 'number',
            description: 'Net profit from sold NFTs.',
          },
          realized_profit_usd: {
            title: 'Realized Profit Usd',
            type: 'number',
            description: 'Net profit from sold NFTs.',
          },
          revenue_eth: {
            title: 'Revenue Eth',
            type: 'number',
            description: 'Total money the whale gained by selling NFTs.',
          },
          revenue_usd: {
            title: 'Revenue Usd',
            type: 'number',
            description: 'Total money the whale gained by selling NFTs.',
          },
          spent_eth: {
            title: 'Spent Eth',
            type: 'number',
            description: 'Total money the whale spent buying and minting NFTs.',
          },
          spent_usd: {
            title: 'Spent Usd',
            type: 'number',
            description: 'Total money the whale spent buying and minting NFTs.',
          },
          nft_num: {
            title: 'Nft Num',
            minimum: 0.0,
            type: 'integer',
            description: 'The number of NFTs owned by this address',
            example: 3,
          },
          collection_num: {
            title: 'Collection Num',
            minimum: 0.0,
            type: 'integer',
            description: 'The number of collections owned by this address',
            example: 3,
          },
          activities: {
            title: 'Activities',
            type: 'integer',
            description: 'Total number of historical activities generated by the whale.',
          },
          last_trade: {
            $ref: '#/components/schemas/routers__models__NewWhale___Transaction',
          },
        },
      },
      NewWhaleList: {
        title: 'NewWhaleList',
        required: ['last_updated', 'total', 'whale_list'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          total: {
            title: 'Total',
            type: 'integer',
            description: 'Total number of items',
            example: 10000,
          },
          whale_list: {
            title: 'Whale List',
            type: 'array',
            items: {
              $ref: '#/components/schemas/NewWhale',
            },
            description: 'A list of whales',
          },
        },
        description:
          '\u5982\u679c Model \u53ef\u80fd\u53ea\u5305\u542b\u90e8\u5206\u6570\u636e\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f Total',
      },
      NftListing: {
        title: 'NftListing',
        required: ['last_updated', 'listing_orders'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          nft_list: {
            title: 'Nft List',
            type: 'array',
            items: {
              $ref: '#/components/schemas/ListingInfo',
            },
            description: 'This field will be deprecated soon.',
            example: [
              {
                contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
                token_id: '1292',
                order_id: 'cmVzZXJ2b2lyOjo2Mzc2ZGFhZDlhYTA4YzZmYzE5MmRjZGQ=',
                listing_time: 1668733446,
                expired_time: 1668765846,
                eth_price: 61.69,
                usd_price: 75156.39151930717,
                market_name: 'opensea',
                market_link:
                  'https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1292',
                seller_address: '0x5d5335e6bea4b12dcb942cec1da951ae63f2ae64',
                payment_token: {
                  address: '0x0000000000000000000000000000000000000000',
                  symbol: 'ETH',
                  decimals: 18,
                },
                order_kind: 'seaport-v1.5',
              },
              {
                contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
                token_id: '1292',
                order_id: 'cmVzZXJ2b2lyOjo2Mzc2YTcyYTlhYTA4YzZmYzFmYzI5MDE=',
                listing_time: 1668720410,
                expired_time: 1668778427,
                eth_price: 59.0,
                usd_price: 71879.18786900831,
                market_name: 'looksrare',
                market_link:
                  'https://looksrare.org/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1292',
                seller_address: '0x5d5335e6bea4b12dcb942cec1da951ae63f2ae64',
                payment_token: {
                  address: '0x0000000000000000000000000000000000000000',
                  symbol: 'ETH',
                  decimals: 18,
                },
                order_kind: 'seaport-v1.5',
              },
            ],
          },
          listing_orders: {
            title: 'Listing Orders',
            type: 'array',
            items: {
              $ref: '#/components/schemas/ListingInfo',
            },
            example: [
              {
                contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
                token_id: '1292',
                order_id: 'cmVzZXJ2b2lyOjo2Mzc2ZGFhZDlhYTA4YzZmYzE5MmRjZGQ=',
                listing_time: 1668733446,
                expired_time: 1668765846,
                eth_price: 61.69,
                usd_price: 75156.39151930717,
                market_name: 'opensea',
                market_link:
                  'https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1292',
                seller_address: '0x5d5335e6bea4b12dcb942cec1da951ae63f2ae64',
                payment_token: {
                  address: '0x0000000000000000000000000000000000000000',
                  symbol: 'ETH',
                  decimals: 18,
                },
                order_kind: 'seaport-v1.5',
                quantity: 1,
              },
              {
                contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
                token_id: '1292',
                order_id: 'cmVzZXJ2b2lyOjo2Mzc2YTcyYTlhYTA4YzZmYzFmYzI5MDE=',
                listing_time: 1668720410,
                expired_time: 1668778427,
                eth_price: 59.0,
                usd_price: 71879.18786900831,
                market_name: 'looksrare',
                market_link:
                  'https://looksrare.org/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1292',
                seller_address: '0x5d5335e6bea4b12dcb942cec1da951ae63f2ae64',
                payment_token: {
                  address: '0x0000000000000000000000000000000000000000',
                  symbol: 'ETH',
                  decimals: 18,
                },
                order_kind: 'seaport-v1.5',
                quantity: 1,
              },
            ],
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      OHLCChart: {
        title: 'OHLCChart',
        required: ['eth', 'usdt'],
        type: 'object',
        properties: {
          eth: {
            title: 'Eth',
            allOf: [
              {
                $ref: '#/components/schemas/ChartValue',
              },
            ],
            description: 'The floor price(ETH) object of each time point',
          },
          usdt: {
            title: 'Usdt',
            allOf: [
              {
                $ref: '#/components/schemas/ChartValue',
              },
            ],
            description: 'The floor price(USDT) object of each time point',
          },
        },
      },
      Offer: {
        title: 'Offer',
        type: 'object',
        properties: {
          contract_address: {
            title: 'Contract Address',
            type: 'string',
            description: 'nft contract address',
          },
          is_private: {
            title: 'Is Private',
            type: 'boolean',
            description: 'False means order can be fulfilled by anyone',
          },
          order_kind: {
            title: 'Order Kind',
            type: 'string',
            description: "Offer's marketplace protocol",
          },
          maker: {
            title: 'Maker',
            type: 'string',
            description: "Offer's maker address",
          },
          market_id: {
            title: 'Market Id',
            type: 'string',
            description: 'The marketplace uniqueId that order belongs to',
          },
          order_create_time: {
            title: 'Order Create Time',
            type: 'integer',
            description: 'Time that order is created',
          },
          order_expiration_time: {
            title: 'Order Expiration Time',
            type: 'integer',
            description: 'Time that order will expire',
          },
          order_hash: {
            title: 'Order Hash',
            type: 'string',
            description: 'Unique order hash',
          },
          order_id: {
            title: 'Order Id',
            type: 'string',
            description: 'Unique order id',
          },
          price: {
            title: 'Price',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV3',
              },
            ],
            description: 'Offer price',
          },
          quantity_remaining: {
            title: 'Quantity Remaining',
            type: 'integer',
            description: 'Number of tokens remaining for this offer',
          },
          order_status: {
            allOf: [
              {
                $ref: '#/components/schemas/OrderStatus',
              },
            ],
            description: "Offer's status",
          },
          taker: {
            title: 'Taker',
            type: 'string',
            description:
              "Offer's taker address, generally points to zero address implies any address can fulfill the offer",
          },
          total_quantity: {
            title: 'Total Quantity',
            type: 'integer',
            description: 'Number of tokens when offer was created',
          },
          on_chain_order_info: {
            title: 'On Chain Order Info',
            description: 'Order info on chian',
          },
          criteria: {
            title: 'Criteria',
            description: 'Describes the offer kind, this can be token, contract or trait offer',
          },
          fee_bps: {
            title: 'Fee Bps',
            type: 'number',
            description: 'offer fee basis point',
          },
          fee_breakdown: {
            title: 'Fee Breakdown',
            type: 'array',
            items: {
              $ref: '#/components/schemas/FeeBreakdownItem',
            },
            description: 'optional fee break down',
          },
        },
      },
      OfferNFTInfo: {
        title: 'OfferNFTInfo',
        required: ['contract_address', 'blockchain'],
        type: 'object',
        properties: {
          contract_address: {
            title: 'Contract Address',
            anyOf: [
              {
                maxLength: 42,
                minLength: 42,
                pattern: '^0x[a-fA-F0-9]{40}$',
                type: 'string',
              },
              {
                type: 'string',
              },
            ],
            description: 'Contract address of the collection this NFT belongs to',
          },
          token_id: {
            title: 'Token Id',
            type: 'string',
            description: 'The token ID of this NFT',
          },
          name: {
            title: 'Name',
            type: 'string',
            description: 'The name of this NFT',
          },
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            description: 'The blockchain where this NFT resides',
          },
          image: {
            title: 'Image',
            type: 'string',
            description: 'The url or base64 data of image or video associated with the NFT',
            example:
              'https://static.nftgo.io/asset/metadata/image/5e236a5b9e95e4b88df604399ea7ca56229fdf86b9b8da78a6fd587a155b8b98',
          },
          contract_type: {
            title: 'Contract Type',
            type: 'string',
            description: 'Type of contract: ERC721 or ERC1155',
            example: 'ERC721',
          },
          suspicious: {
            title: 'Suspicious',
            type: 'boolean',
            description: 'Is it not tradeable on OpenSea?',
            default: false,
          },
        },
      },
      OfferWithPrice: {
        title: 'OfferWithPrice',
        type: 'object',
        properties: {
          payment_token: {
            title: 'Payment Token',
            allOf: [
              {
                $ref: '#/components/schemas/PaymentToken',
              },
            ],
            description: 'The token used for payment',
            default: {
              address: '0x0000000000000000000000000000000000000000',
              symbol: 'ETH',
              decimals: 18,
            },
          },
          raw_value: {
            title: 'Raw Value',
            type: 'integer',
            description: 'Number of token paid',
            example: 10000000000000000,
          },
          value: {
            title: 'Value',
            type: 'number',
            description: 'Total value in the measure of {payment_token.symbol}',
            example: 86.8042,
          },
          usd: {
            title: 'Usd',
            type: 'number',
            description:
              'The equivalent payment in dollars, calculated based on the exchange rate at the time of the transaction',
          },
          market_name: {
            title: 'Market Name',
            type: 'string',
            example: 'opensea',
          },
          order_id: {
            title: 'Order Id',
            type: 'string',
            description: 'Unique order id',
          },
          contract_address: {
            title: 'Contract Address',
            type: 'string',
            description: 'nft contract address',
          },
          is_private: {
            title: 'Is Private',
            type: 'boolean',
            description: 'False means order can be fulfilled by anyone',
          },
          order_kind: {
            title: 'Order Kind',
            type: 'string',
            description: "Offer's marketplace protocol",
          },
          maker: {
            title: 'Maker',
            type: 'string',
            description: "Offer's maker address",
          },
          market_id: {
            title: 'Market Id',
            type: 'string',
            description: 'The marketplace uniqueId that order belongs to',
          },
          order_create_time: {
            title: 'Order Create Time',
            type: 'integer',
            description: 'Time that order is created',
          },
          order_expiration_time: {
            title: 'Order Expiration Time',
            type: 'integer',
            description: 'Time that order will expire',
          },
          order_hash: {
            title: 'Order Hash',
            type: 'string',
            description: 'Unique order hash',
          },
          price: {
            title: 'Price',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV3',
              },
            ],
            description: 'Offer price',
          },
          quantity_remaining: {
            title: 'Quantity Remaining',
            type: 'integer',
            description: 'Number of tokens remaining for this offer',
          },
          order_status: {
            allOf: [
              {
                $ref: '#/components/schemas/OrderStatus',
              },
            ],
            description: "Offer's status",
          },
          taker: {
            title: 'Taker',
            type: 'string',
            description:
              "Offer's taker address, generally points to zero address implies any address can fulfill the offer",
          },
          total_quantity: {
            title: 'Total Quantity',
            type: 'integer',
            description: 'Number of tokens when offer was created',
          },
          on_chain_order_info: {
            title: 'On Chain Order Info',
            description: 'Order info on chian',
          },
          criteria: {
            title: 'Criteria',
            description: 'Describes the offer kind, this can be token, contract or trait offer',
          },
          fee_bps: {
            title: 'Fee Bps',
            type: 'number',
            description: 'offer fee basis point',
          },
          fee_breakdown: {
            title: 'Fee Breakdown',
            type: 'array',
            items: {
              $ref: '#/components/schemas/FeeBreakdownItem',
            },
            description: 'optional fee break down',
          },
        },
      },
      OrderStatus: {
        title: 'OrderStatus',
        enum: ['active', 'cancelled', 'expired', 'filled', 'inactive'],
        type: 'string',
        description: 'An enumeration.',
      },
      PaymentToken: {
        title: 'PaymentToken',
        type: 'object',
        properties: {
          address: {
            title: 'Address',
            type: 'string',
            description: 'The address of the token used for payment',
            default: '0x0000000000000000000000000000000000000000',
          },
          symbol: {
            title: 'Symbol',
            type: 'string',
            description: 'The symbol of the token used for payment',
            default: 'ETH',
          },
          decimals: {
            title: 'Decimals',
            type: 'integer',
            description: 'The decimals of the token used for payment',
            default: 18,
          },
        },
      },
      PendingSale: {
        title: 'PendingSale',
        required: ['tx', 'first_seen'],
        type: 'object',
        properties: {
          tx: {
            title: 'Tx',
            allOf: [
              {
                $ref: '#/components/schemas/TXInfo',
              },
            ],
            description: 'transaction info id address of this nft',
          },
          first_seen: {
            title: 'First Seen',
            type: 'integer',
            description: 'transaction info id address of this nft',
          },
        },
      },
      Portfolio: {
        title: 'Portfolio',
        required: [
          'collection',
          'nft_num',
          'listing_num',
          'estimated_value',
          'unrealized_profit',
          'realized_profit',
          'avg_cost',
        ],
        type: 'object',
        properties: {
          collection: {
            $ref: '#/components/schemas/CollectionBase',
          },
          nft_num: {
            title: 'Nft Num',
            minimum: 0.0,
            type: 'integer',
            description: 'The number of NFTs owned by this address',
            example: 3,
          },
          listing_num: {
            title: 'Listing Num',
            minimum: 0.0,
            type: 'integer',
          },
          estimated_value: {
            title: 'Estimated Value',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'Estimated value of each collection = the number of NFTs the address holds \u00d7 estimated NFT price of each collection.Suspected wash trades have been filtered out.',
          },
          unrealized_profit: {
            title: 'Unrealized Profit',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'Estimated unrealized profit of NFTs held by the address.Suspected wash trades have been filtered out.',
          },
          realized_profit: {
            title: 'Realized Profit',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'Profit made from sales by the address.Suspected wash trades have been filtered out.',
          },
          avg_cost: {
            title: 'Avg Cost',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description:
              'Average cost of NFTs in each collection held by the address. The cost of each NFT is determined by the last sale price or the mint price.Suspected wash trades have been filtered out.',
          },
          floor_price: {
            title: 'Floor Price',
            allOf: [
              {
                $ref: '#/components/schemas/ValueModel',
              },
            ],
            description: 'Floor Price of the collection',
          },
          sales: {
            title: 'Sales',
            type: 'integer',
            description:
              'The number of transactions to buy or sell the NFTs of the collection over 24h.Suspected wash trades have been filtered out.',
          },
        },
      },
      PortfolioChangePercent: {
        title: 'PortfolioChangePercent',
        type: 'object',
        properties: {
          '30d': {
            title: '30D',
            type: 'number',
          },
          '7d': {
            title: '7D',
            type: 'number',
          },
          '24h': {
            title: '24H',
            type: 'number',
          },
          '1h': {
            title: '1H',
            type: 'number',
          },
        },
      },
      PortfolioList: {
        title: 'PortfolioList',
        required: ['last_updated', 'total', 'total_nft_listing', 'list'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          total: {
            title: 'Total',
            type: 'integer',
            description: 'Total number of collections the address holds',
          },
          total_nft_listing: {
            title: 'Total Nft Listing',
            type: 'integer',
            description: 'Total number of listing NFTs the address holds',
          },
          list: {
            title: 'List',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Portfolio',
            },
            description: 'A list of collections',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      PortfolioSortEnum: {
        title: 'PortfolioSortEnum',
        enum: [
          'nftNum',
          'estValueEth',
          'unrealizedProfitEth',
          'realizedProfitEth',
          'avgCostEth',
          'floorPrice',
          'saleNum24h',
        ],
        type: 'string',
        description: 'An enumeration.',
      },
      PriceV2: {
        title: 'PriceV2',
        type: 'object',
        properties: {
          value: {
            title: 'Value',
            type: 'number',
            description: 'Total value in the measure of {payment_token.symbol}',
            example: 86.8042,
          },
          crypto_unit: {
            title: 'Crypto Unit',
            type: 'string',
            description: 'The crypto unit of measurement, e.g. ETH, USDC, DAI.',
            example: 'ETH',
          },
          usd: {
            title: 'Usd',
            type: 'number',
            description:
              'Total US dollar value of the cryptocurrency. It equals to quantity * crypto_unit * usd_price_per_crypto_unit',
            example: 99614.18167703273,
          },
          eth_value: {
            title: 'Eth Value',
            type: 'number',
            description: 'Deprecated.Total value in the measure of ETH',
            example: 86.8042,
          },
          payment_token: {
            title: 'Payment Token',
            allOf: [
              {
                $ref: '#/components/schemas/PaymentToken',
              },
            ],
            description: 'The token used for payment',
            default: {
              address: '0x0000000000000000000000000000000000000000',
              symbol: 'ETH',
              decimals: 18,
            },
          },
        },
        description: 'Price in cryptocurrency or US dollars or eth',
      },
      PriceV2WithMarket: {
        title: 'PriceV2WithMarket',
        type: 'object',
        properties: {
          value: {
            title: 'Value',
            type: 'number',
            description: 'Total value in the measure of {payment_token.symbol}',
            example: 86.8042,
          },
          crypto_unit: {
            title: 'Crypto Unit',
            type: 'string',
            description: 'The crypto unit of measurement, e.g. ETH, USDC, DAI.',
            example: 'ETH',
          },
          usd: {
            title: 'Usd',
            type: 'number',
            description:
              'Total US dollar value of the cryptocurrency. It equals to quantity * crypto_unit * usd_price_per_crypto_unit',
            example: 99614.18167703273,
          },
          eth_value: {
            title: 'Eth Value',
            type: 'number',
            description: 'Deprecated.Total value in the measure of ETH',
            example: 86.8042,
          },
          payment_token: {
            title: 'Payment Token',
            allOf: [
              {
                $ref: '#/components/schemas/PaymentToken',
              },
            ],
            description: 'The token used for payment',
            default: {
              address: '0x0000000000000000000000000000000000000000',
              symbol: 'ETH',
              decimals: 18,
            },
          },
          market_name: {
            title: 'Market Name',
            type: 'string',
            example: 'opensea',
          },
        },
        description: 'Price in cryptocurrency or US dollars or eth',
      },
      PriceV3: {
        title: 'PriceV3',
        type: 'object',
        properties: {
          value: {
            title: 'Value',
            type: 'number',
            description: 'Total value in the measure of {payment_token.symbol}',
            example: 86.8042,
          },
          raw_value: {
            title: 'Raw Value',
            anyOf: [
              {
                type: 'integer',
              },
              {
                type: 'string',
              },
            ],
            description: 'Total raw value in the measure of {payment_token.symbol}',
            example: 86804200000000000000,
          },
          usd: {
            title: 'Usd',
            type: 'number',
            description:
              'Total US dollar value of the cryptocurrency. It equals to quantity * crypto_unit * usd_price_per_crypto_unit',
            example: 99614.18167703273,
          },
          payment_token: {
            title: 'Payment Token',
            allOf: [
              {
                $ref: '#/components/schemas/PaymentToken',
              },
            ],
            description: 'The token used for payment',
            default: {
              address: '0x0000000000000000000000000000000000000000',
              symbol: 'ETH',
              decimals: 18,
            },
          },
        },
        description: 'Price in cryptocurrency or US dollars or Token.',
      },
      Rarity: {
        title: 'Rarity',
        type: 'object',
        properties: {
          score: {
            title: 'Score',
            type: 'number',
            description:
              'Rarity score. See methodology: https://mirror.xyz/nftgoio.eth/kHWaMtNY6ZOvDzr7PR99D03--VNu6-ZOjYuf6E9-QH0',
            example: 34.72,
          },
          rank: {
            title: 'Rank',
            type: 'integer',
            description: 'The rarity rank',
            example: 9152,
          },
          total: {
            title: 'Total',
            type: 'integer',
            description:
              'Total number of NFTs belonging to the colleciton involved in calculation of rarity',
            example: 10000,
          },
        },
        description: 'https://mirror.xyz/nftgoio.eth/kHWaMtNY6ZOvDzr7PR99D03--VNu6-ZOjYuf6E9-QH0',
      },
      RarityInfoBase: {
        title: 'RarityInfoBase',
        required: ['rank'],
        type: 'object',
        properties: {
          rank: {
            title: 'Rank',
            type: 'integer',
            description: 'The rarity rank',
            example: 9152,
          },
        },
      },
      RaritySourceEnum: {
        title: 'RaritySourceEnum',
        enum: ['nftGo', 'openRarity', 'raritySniper'],
        type: 'string',
        description: 'An enumeration.',
      },
      ReceivedAddressListings: {
        title: 'ReceivedAddressListings',
        type: 'object',
        properties: {
          listings: {
            title: 'Listings',
            type: 'array',
            items: {
              $ref: '#/components/schemas/CreatedListing',
            },
            description: 'List of NFT listings on the address',
          },
        },
      },
      ReceivedAddressOffers: {
        title: 'ReceivedAddressOffers',
        type: 'object',
        properties: {
          offers: {
            title: 'Offers',
            type: 'array',
            items: {
              $ref: '#/components/schemas/ReceivedOffer',
            },
            description: 'List of NFT offer on the address',
          },
          total: {
            title: 'Total',
            type: 'integer',
          },
        },
      },
      ReceivedOffer: {
        title: 'ReceivedOffer',
        type: 'object',
        properties: {
          nft: {
            $ref: '#/components/schemas/OfferNFTInfo',
          },
          floor_price_difference: {
            title: 'Floor Price Difference',
            type: 'number',
            description:
              'Offer Price difference with collection floor price.Example:0.41, which means that the offer price is %41 higher than the floor price.',
          },
          collection: {
            $ref: '#/components/schemas/CollectionSimpleInfo',
          },
          best_offer: {
            $ref: '#/components/schemas/Offer',
          },
          est_portfolio_value: {
            title: 'Est Portfolio Value',
            type: 'object',
            additionalProperties: {
              type: 'number',
            },
            description: 'Est. Profit = Offer Price - royalties - marketplace fees - cost.',
          },
        },
      },
      Sale: {
        title: 'Sale',
        type: 'object',
        properties: {
          tx_hash: {
            title: 'Tx Hash',
            type: 'string',
            description: 'Transaction Hash',
          },
          price_token: {
            title: 'Price Token',
            type: 'number',
            description: 'Trade price quoted in transaction token',
          },
          token_symbol: {
            title: 'Token Symbol',
            type: 'string',
            description: 'Symbol of the token the sale was transacted in',
          },
          token_contract_address: {
            title: 'Token Contract Address',
            type: 'string',
            description: 'Contract address of the token the sale was transacted in',
          },
          price_usd: {
            title: 'Price Usd',
            type: 'number',
            description: 'The transaction price converted to USD',
          },
          is_wash_trade: {
            title: 'Is Wash Trade',
            type: 'boolean',
            description: 'Whether last sale is a wash trade',
          },
          price: {
            title: 'Price',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV2',
              },
            ],
            description: 'Transaction price',
          },
          tx_url: {
            title: 'Tx Url',
            type: 'string',
            description: 'Transaction url',
          },
          time: {
            title: 'Time',
            type: 'integer',
            description: 'Transaction timestamp in seconds',
          },
        },
      },
      SalesChart: {
        title: 'SalesChart',
        required: ['last_updated', 'x', 'y', 'total', 'details'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          x: {
            title: 'X',
            type: 'array',
            items: {
              type: 'integer',
            },
            description: 'List of timestamps in seconds',
            example: [
              1631836800, 1632096000, 1632355200, 1632614400, 1632873600, 1633132800, 1633392000,
            ],
          },
          y: {
            title: 'Y',
            type: 'array',
            items: {
              type: 'number',
            },
            description: 'Collection sales chart at each timestamp',
          },
          total: {
            title: 'Total',
            type: 'integer',
            description: 'Total number of sales scatter point',
          },
          details: {
            title: 'Details',
            type: 'array',
            items: {
              $ref: '#/components/schemas/SalesDetail',
            },
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      SalesDetail: {
        title: 'SalesDetail',
        required: ['token_id', 'seller_address', 'buyer_address'],
        type: 'object',
        properties: {
          token_id: {
            title: 'Token Id',
            type: 'string',
            description: 'The token id of the transfer NFT',
          },
          seller_address: {
            title: 'Seller Address',
            type: 'string',
            description: 'The seller address of the NFT',
          },
          buyer_address: {
            title: 'Buyer Address',
            type: 'string',
            description: 'The buyer address of the NFT',
          },
        },
      },
      SearchNFT: {
        title: 'SearchNFT',
        type: 'object',
        properties: {
          animation_url: {
            title: 'Animation Url',
            type: 'string',
            description: 'The url of animation associated with the NFT',
          },
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            description: 'Name of the blockchain the NFT belongs to',
            example: 'ETH',
          },
          collection_name: {
            title: 'Collection Name',
            type: 'string',
            description: 'Name of the collection the NFT belongs to',
            example: 'Bored Ape Yacht Club',
          },
          collection_slug: {
            title: 'Collection Slug',
            type: 'string',
            description: 'NFTGo Slug of the collection the NFT belongs to',
            example: 'bored-ape-yacht-club',
          },
          collection_opensea_slug: {
            title: 'Collection Opensea Slug',
            type: 'string',
            description: 'OpenSea slug of the collection the NFT belongs to',
            example: 'boredapeyachtclub',
          },
          collection_logo: {
            title: 'Collection Logo',
            type: 'string',
            description: 'The logo url or base64 encoded data of a collection',
            example: 'https://static.nftgo.io/asset/1651210195557.png',
          },
          contract_type: {
            title: 'Contract Type',
            type: 'string',
            description: 'Type of contract: ERC721 or ERC1155',
            example: 'ERC721',
          },
          contract_address: {
            title: 'Contract Address',
            anyOf: [
              {
                maxLength: 42,
                minLength: 42,
                pattern: '^0x[a-fA-F0-9]{40}$',
                type: 'string',
              },
              {
                type: 'string',
              },
            ],
            description: 'Contract address of the collection the NFT belongs to',
            example: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
          },
          token_id: {
            title: 'Token Id',
            type: 'string',
            description: 'The token ID of the NFT',
            example: '4495',
          },
          name: {
            title: 'Name',
            type: 'string',
            description: 'The name of the NFT',
            example: 'Bored Ape Yacht Club #4495',
          },
          image: {
            title: 'Image',
            type: 'string',
            description: 'The url or base64 data of image or video associated with the NFT',
            example:
              'https://static.nftgo.io/asset/metadata/image/5e236a5b9e95e4b88df604399ea7ca56229fdf86b9b8da78a6fd587a155b8b98',
          },
          traits: {
            title: 'Traits',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Trait',
            },
            description:
              'The list of NFT traits. Traits consist of a series of types and values, referring to the feature of an NFT. For example, if a project has avatar NFTs, the traits may include headwear, facial traits, clothes, etc. Traits make each item in an NFT collection unique and determine its rarity in a collection.',
            example: [
              {
                type: 'Eyes',
                value: 'Wide Eyed',
                percentage: 0.0549,
              },
              {
                type: 'Background',
                value: 'Aquamarine',
                percentage: 0.1266,
              },
              {
                type: 'Fur',
                value: 'Black',
                percentage: 0.1229,
              },
              {
                type: 'Mouth',
                value: 'Bored',
                percentage: 0.2272,
              },
              {
                type: 'Clothes',
                value: 'Service',
                percentage: 0.0142,
              },
            ],
          },
          suspicious: {
            title: 'Suspicious',
            type: 'boolean',
            description: 'Is it not tradeable on OpenSea?',
          },
          last_sale: {
            title: 'Last Sale',
            allOf: [
              {
                $ref: '#/components/schemas/Sale',
              },
            ],
            description: 'Last sale price of the NFT',
            example: {
              tx_hash: '0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              price_token: 98.5,
              token_symbol: 'ETH',
              token_contract_address: '0x0000000000000000000000000000000000000000',
              price_usd: 202001.28197466402,
              price: {
                value: 98.5,
                crypto_unit: 'ETH',
                usd: 202001.28197466402,
                eth_value: 98.5,
                payment_token: {
                  address: '0x0000000000000000000000000000000000000000',
                  symbol: 'ETH',
                  decimals: 18,
                },
              },
              tx_url:
                'https://etherscan.io/tx/0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              time: 1652571359,
            },
          },
        },
      },
      SimpleHolderInfo: {
        title: 'SimpleHolderInfo',
        required: ['holder_address', 'nft_num'],
        type: 'object',
        properties: {
          holder_address: {
            title: 'Holder Address',
            maxLength: 42,
            minLength: 42,
            pattern: '^0x[a-fA-F0-9]{40}$',
            type: 'string',
            description: "holder's address",
            example: '0x0a2542a170aa02b96b588aa3af8b09ab22a9d7ac',
          },
          nft_num: {
            title: 'Nft Num',
            minimum: 0.0,
            type: 'integer',
            description: 'The number of NFTs owned by this address',
            example: 3,
          },
        },
      },
      SimpleHolderInfoList: {
        title: 'SimpleHolderInfoList',
        required: ['total', 'last_updated', 'holders_info'],
        type: 'object',
        properties: {
          total: {
            title: 'Total',
            type: 'integer',
            description: 'Total number of items',
            example: 10000,
          },
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          holders_info: {
            title: 'Holders Info',
            type: 'array',
            items: {
              $ref: '#/components/schemas/SimpleHolderInfo',
            },
            description: "A list of holders' information",
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      SimpleNFTInfoWithContractType: {
        title: 'SimpleNFTInfoWithContractType',
        required: ['contract_address', 'blockchain'],
        type: 'object',
        properties: {
          contract_address: {
            title: 'Contract Address',
            anyOf: [
              {
                maxLength: 42,
                minLength: 42,
                pattern: '^0x[a-fA-F0-9]{40}$',
                type: 'string',
              },
              {
                type: 'string',
              },
            ],
            description: 'Contract address of the collection this NFT belongs to',
          },
          token_id: {
            title: 'Token Id',
            type: 'string',
            description: 'The token ID of this NFT',
          },
          name: {
            title: 'Name',
            type: 'string',
            description: 'The name of this NFT',
          },
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            description: 'The blockchain where this NFT resides',
          },
          image: {
            title: 'Image',
            type: 'string',
            description: 'The url or base64 data of image or video associated with the NFT',
            example:
              'https://static.nftgo.io/asset/metadata/image/5e236a5b9e95e4b88df604399ea7ca56229fdf86b9b8da78a6fd587a155b8b98',
          },
          contract_type: {
            title: 'Contract Type',
            type: 'string',
            description: 'Type of contract: ERC721 or ERC1155',
            example: 'ERC721',
          },
        },
      },
      SingleTraitWithFloor: {
        title: 'SingleTraitWithFloor',
        type: 'object',
        properties: {
          name: {
            title: 'Name',
            type: 'string',
            description: 'The name of trait',
          },
          value: {
            title: 'Value',
            type: 'string',
            description: 'The value of trait',
          },
          percentage: {
            title: 'Percentage',
            type: 'number',
            description: 'The rarity percentage of trait',
          },
          count: {
            title: 'Count',
            type: 'integer',
            description: 'The NFT count of the trait',
            example: 100,
          },
          eth_floor_price: {
            title: 'Eth Floor Price',
            type: 'number',
            description: 'The floor price of the trait in ETH',
            example: 0.1,
          },
          usd_floor_price: {
            title: 'Usd Floor Price',
            type: 'number',
            description: 'The floor price of the trait in USD',
            example: 100,
          },
        },
      },
      SortByAddressCreatedOfferEnum: {
        title: 'SortByAddressCreatedOfferEnum',
        enum: ['offer_price', 'floor_difference', 'order_create_time', 'order_expire_time'],
        type: 'string',
        description: 'An enumeration.',
      },
      SortByAddressReceivedOfferEnum: {
        title: 'SortByAddressReceivedOfferEnum',
        enum: [
          'best_offer',
          'floor_difference',
          'est_profit',
          'order_create_time',
          'order_expire_time',
        ],
        type: 'string',
        description: 'An enumeration.',
      },
      SortByMarketplaceEnum: {
        title: 'SortByMarketplaceEnum',
        enum: ['volume', 'sale_num', 'trader_num', 'buyer_num', 'seller_num'],
        type: 'string',
        description: 'An enumeration.',
      },
      SortByNFTEnum: {
        title: 'SortByNFTEnum',
        enum: [
          'listing_price_low_to_high',
          'listing_price_high_to_low',
          'last_price_low_to_high',
          'last_price_high_to_low',
          'rarity_low_to_high',
          'rarity_high_to_low',
          'sales_time',
        ],
        type: 'string',
        description: 'An enumeration.',
      },
      SortByTopMintsEnum: {
        title: 'SortByTopMintsEnum',
        enum: [
          'mint_num',
          'mint_volume',
          'minter_num',
          'whale_num',
          'total_gas_fee',
          'first_mint_time',
          'fomo',
        ],
        type: 'string',
        description: 'An enumeration.',
      },
      TXInfo: {
        title: 'TXInfo',
        type: 'object',
        properties: {
          hash: {
            title: 'Hash',
            type: 'string',
            description: 'transaction hash on chain',
          },
          from_tags: {
            title: 'From Tags',
            allOf: [
              {
                $ref: '#/components/schemas/AddressInfoV2',
              },
            ],
            description: 'address tag of the wallet address which this transaction from',
          },
          gas: {
            title: 'Gas',
            type: 'integer',
            description: 'gas amount this transaction cost',
          },
          gas_price: {
            title: 'Gas Price',
            type: 'string',
            description: 'gas price when this transaction happen',
          },
          max_fee_per_gas: {
            title: 'Max Fee Per Gas',
            type: 'string',
            description: 'max fee per gas',
          },
          max_priority_fee_per_gas: {
            title: 'Max Priority Fee Per Gas',
            type: 'string',
            description: 'max priority fee per gas',
          },
        },
      },
      TimeIntervalEnum: {
        title: 'TimeIntervalEnum',
        enum: ['1m', '5m', '30m', '1h', '2h', '4h', '1d'],
        type: 'string',
        description: 'An enumeration.',
      },
      TimeSpanEnum: {
        title: 'TimeSpanEnum',
        enum: [
          '15m',
          '1h',
          '4h',
          '12h',
          '24h',
          '3d',
          '7d',
          '14d',
          '30d',
          '2M',
          '3M',
          '6M',
          '1y',
          'all',
        ],
        type: 'string',
        description: 'An enumeration.',
      },
      TimeSpanTemEnum: {
        title: 'TimeSpanTemEnum',
        enum: ['24h', '7d', '30d'],
        type: 'string',
        description: 'An enumeration.',
      },
      TopMintCollectionItem: {
        title: 'TopMintCollectionItem',
        required: [
          'contract_address',
          'blockchain',
          'mint_num',
          'total_mint_num',
          'mint_volume',
          'mint_price',
          'minter_num',
          'whale_num',
          'total_gas_fee',
          'first_mint_time',
          'fomo',
        ],
        type: 'object',
        properties: {
          collection_name: {
            title: 'Collection Name',
            type: 'string',
            description: 'Collection name',
            example: 'HyperNFT_HOS_1.0',
          },
          contract_address: {
            title: 'Contract Address',
            type: 'string',
            description: 'Address of the contract for this NFT collection',
            example: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
          },
          contract_url: {
            title: 'Contract Url',
            type: 'string',
            description: 'Contract address etherscan url',
            example: 'https://etherscan.io/address/0x929832b1f1515cf02c9548a0ff454f1b0e216b18',
          },
          collection_logo_url: {
            title: 'Collection Logo Url',
            type: 'string',
            description: 'The logo url or base64 encoded data of a collection',
            example: 'https://static.nftgo.io/asset/1651210195557.png',
          },
          blockchain: {
            title: 'Blockchain',
            pattern: '[A-Z]+',
            type: 'string',
            description: 'Blockchain the address belongs to',
            example: 'ETH',
          },
          mint_num: {
            title: 'Mint Num',
            type: 'integer',
            description: 'Number of minted NFTs',
            example: 81735,
          },
          mint_change: {
            title: 'Mint Change',
            type: 'number',
            description: 'The mint num change percent.',
            example: '5.727',
          },
          total_mint_num: {
            title: 'Total Mint Num',
            type: 'integer',
            description: 'Number of minted NFTs',
            example: 81735,
          },
          mint_volume: {
            $ref: '#/components/schemas/CryptoPriceV2',
          },
          mint_price: {
            title: 'Mint Price',
            allOf: [
              {
                $ref: '#/components/schemas/CryptoPriceV2',
              },
            ],
            description: 'The price of mint',
          },
          minter_num: {
            title: 'Minter Num',
            type: 'integer',
            description: 'Number of minters',
            example: 1,
          },
          whale_num: {
            title: 'Whale Num',
            type: 'integer',
            description:
              'Current number of whales holding NFTs in this collection. The addresses with $1,000,000+ NFT holding value across all collections are considered whales.',
            example: 507,
          },
          total_gas_fee: {
            title: 'Total Gas Fee',
            allOf: [
              {
                $ref: '#/components/schemas/CryptoPriceV2',
              },
            ],
            description: 'Total gas fee for minting',
          },
          first_mint_time: {
            title: 'First Mint Time',
            type: 'integer',
            description: 'First mint timestamp in second',
            example: 1655984546000,
          },
          fomo: {
            title: 'Fomo',
            type: 'string',
            description:
              "A textual description of the market's degree of Fomo. It is an enumeration value ['NONE', 'LOW', 'MEDIUM', 'HIGH']",
          },
        },
      },
      Trait: {
        title: 'Trait',
        type: 'object',
        properties: {
          type: {
            title: 'Type',
            type: 'string',
            description: 'The type of trait',
          },
          value: {
            title: 'Value',
            type: 'string',
            description: 'The value of trait',
          },
          percentage: {
            title: 'Percentage',
            type: 'number',
            description: 'The rarity percentage of trait',
          },
        },
        description: 'Trait of an NFT',
      },
      TraitBase: {
        title: 'TraitBase',
        type: 'object',
        properties: {
          type: {
            title: 'Type',
            type: 'string',
            description: 'The type of trait',
          },
          value: {
            title: 'Value',
            type: 'string',
            description: 'The value of trait',
          },
        },
      },
      TraitOfferTarget: {
        title: 'TraitOfferTarget',
        type: 'object',
        properties: {
          key: {
            title: 'Key',
            type: 'string',
            description:
              "The target trait of 'trait_offer' is the desired characteristic or attribute that the trait represents.",
          },
          kind: {
            title: 'Kind',
            type: 'string',
          },
          trait: {
            $ref: '#/components/schemas/TraitBase',
          },
        },
      },
      TransactionListV2: {
        title: 'TransactionListV2',
        required: ['total', 'transactions'],
        type: 'object',
        properties: {
          next_cursor: {
            title: 'Next Cursor',
            type: 'string',
            description: 'The cursor to send to get the next page of results.',
          },
          total: {
            title: 'Total',
            type: 'integer',
          },
          transactions: {
            title: 'Transactions',
            type: 'array',
            items: {
              $ref: '#/components/schemas/routers__models__TransactionListV2___Transaction',
            },
          },
        },
      },
      USDPrice: {
        title: 'USDPrice',
        required: ['price'],
        type: 'object',
        properties: {
          price: {
            title: 'Price',
            type: 'number',
          },
        },
      },
      ValidationError: {
        title: 'ValidationError',
        required: ['loc', 'msg', 'type'],
        type: 'object',
        properties: {
          loc: {
            title: 'Location',
            type: 'array',
            items: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'integer',
                },
              ],
            },
          },
          msg: {
            title: 'Message',
            type: 'string',
          },
          type: {
            title: 'Error Type',
            type: 'string',
          },
        },
      },
      ValueModel: {
        title: 'ValueModel',
        type: 'object',
        properties: {
          eth: {
            title: 'Eth',
            type: 'number',
            description: 'The value of ETH.',
            example: 940.4564493476864,
          },
          usd: {
            title: 'Usd',
            type: 'number',
            description: 'The value of USD.',
            example: 1148313.9113801576,
          },
        },
        description: 'Base value Model',
      },
      WhaleSortEnum: {
        title: 'WhaleSortEnum',
        enum: [
          'portfolio_value',
          'pnl',
          'unrealized_profit',
          'realized_profit',
          'revenue',
          'spent',
          'collection_num',
          'nft_num',
          'activities',
          'last_trade',
        ],
        type: 'string',
        description: 'An enumeration.',
      },
      _AddressAndHoldingTime: {
        title: '_AddressAndHoldingTime',
        required: ['address', 'holding_time'],
        type: 'object',
        properties: {
          address: {
            title: 'Address',
            maxLength: 42,
            minLength: 42,
            pattern: '^0x[a-fA-F0-9]{40}$',
            type: 'string',
            description: 'Ethereum Address',
          },
          holding_time: {
            title: 'Holding Time',
            type: 'integer',
            description:
              'HHolding time is calculated as the difference between the time an item is bought and sold in seconds. For example, if the NFT is sold at 2022-04-19 14:00 and bought at 2022-04-19 13:00 holding time is 3600',
          },
        },
      },
      _AvgPriceChart: {
        title: '_AvgPriceChart',
        required: ['x', 'y'],
        type: 'object',
        properties: {
          x: {
            title: 'X',
            type: 'array',
            items: {
              type: 'integer',
            },
            description:
              'List of timestamps in seconds. These timestamps are the start time of each time period. The end time of each time period is the next timestamp.',
            example: [
              1631836800, 1632096000, 1632355200, 1632614400, 1632873600, 1633132800, 1633392000,
            ],
          },
          y: {
            title: 'Y',
            type: 'array',
            items: {
              type: 'number',
            },
            description:
              'The average price in Ether. If the value is None, it means that there is no transaction occurred in this time period.',
            example: [77.6985855, 111.1252165, null, null, 23.263138, 78.081366, 70.656991],
          },
          change_percentage: {
            title: 'Change Percentage',
            type: 'number',
            description:
              'The change percentage of the average price in the last `time_range`. If the value is None, it means that there is no transaction occurred in the last `time_range`',
          },
        },
      },
      _Chart: {
        title: '_Chart',
        required: ['x', 'y'],
        type: 'object',
        properties: {
          x: {
            title: 'X',
            type: 'array',
            items: {
              type: 'integer',
            },
            description: 'List of timestamps in seconds',
            example: [
              1631836800, 1632096000, 1632355200, 1632614400, 1632873600, 1633132800, 1633392000,
            ],
          },
          y: {
            title: 'Y',
            type: 'array',
            items: {
              type: 'number',
            },
            description: 'The value of vertical axis',
            example: [
              5201028079.6985855, 5280712479.1252165, 5427212136.84057, 5597568407.601322,
              5807344349.263138, 6039138476.081366, 6279864229.656991,
            ],
          },
        },
      },
      _Collection: {
        title: '_Collection',
        required: ['name', 'slug', 'contracts', 'blockchain'],
        type: 'object',
        properties: {
          collection_id: {
            title: 'Collection Id',
            type: 'string',
          },
          name: {
            title: 'Name',
            type: 'string',
          },
          slug: {
            title: 'Slug',
            type: 'string',
          },
          contracts: {
            title: 'Contracts',
            type: 'array',
            items: {
              type: 'string',
            },
          },
          blockchain: {
            title: 'Blockchain',
            type: 'string',
          },
        },
      },
      _CollectionFloorPriceList: {
        title: '_CollectionFloorPriceList',
        required: ['collection_floor_price_list'],
        type: 'object',
        properties: {
          collection_floor_price_list: {
            title: 'Collection Floor Price List',
            type: 'array',
            items: {
              $ref: '#/components/schemas/CollectionFloorPrice',
            },
            description: 'Collection floor price by marketplaces',
          },
        },
      },
      _CollectionHolderList: {
        title: '_CollectionHolderList',
        required: ['total', 'last_updated', 'holders_info'],
        type: 'object',
        properties: {
          total: {
            title: 'Total',
            type: 'integer',
            description: 'Total number of items',
            example: 10000,
          },
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          holders_info: {
            title: 'Holders Info',
            type: 'array',
            items: {
              $ref: '#/components/schemas/CollectionHolder',
            },
            description:
              'List of holders in the collection.         Note: The returned values all default to the value of the NFT under the given collection',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      _CollectionItem: {
        title: '_CollectionItem',
        required: ['last_updated', 'blockchain', 'contracts'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            description: 'The blockchain the collection belongs to',
            example: 'ETH',
          },
          name: {
            title: 'Name',
            type: 'string',
            description: 'Collection name',
            example: 'Bored Ape Yacht Club',
          },
          slug: {
            title: 'Slug',
            type: 'string',
            description:
              "A slug is generated from a collection name by using applying lower-case to all letters in the collection name and replacing all spaces with a '-'",
            example: 'bored-ape-yacht-club',
          },
          opensea_slug: {
            title: 'Opensea Slug',
            type: 'string',
            description: 'An opensea slug is generated from the corresponding opensea url link',
            example: 'boredapeyachtclub',
          },
          description: {
            title: 'Description',
            type: 'string',
            description: 'Collection description',
            example:
              'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs\u2014 unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.',
          },
          official_website_url: {
            title: 'Official Website Url',
            type: 'string',
            description: 'The official website url of collection',
            example: 'https://boredapeyachtclub.com/',
          },
          opensea_url: {
            title: 'Opensea Url',
            type: 'string',
            description: 'The opensea url of collection',
            example: 'https://opensea.io/collection/boredapeyachtclub',
          },
          logo: {
            title: 'Logo',
            type: 'string',
            description: 'The logo url or base64 encoded data of a collection',
            example: 'https://static.nftgo.io/asset/1651210195557.png',
          },
          contracts: {
            title: 'Contracts',
            type: 'array',
            items: {
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
            },
            description: 'List of contract addresses which belong to a collection',
            example: ['0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'],
          },
          contract_type: {
            title: 'Contract Type',
            type: 'string',
            description: 'Type of contract: ERC721 or ERC1155',
            example: 'ERC721',
          },
          categories: {
            title: 'Categories',
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'List of categor(ies) that a collection belongs to',
            example: ['PFP'],
          },
          discord_url: {
            title: 'Discord Url',
            type: 'string',
            description: 'The discord url of a collection',
            example: 'https://discord.com/invite/3P5K3dzgdB',
          },
          instagram_url: {
            title: 'Instagram Url',
            type: 'string',
            description: 'The instagram url of a collection',
            example: 'https://www.instagram.com/boredapeyachtclub/',
          },
          twitter_url: {
            title: 'Twitter Url',
            type: 'string',
            description: 'The twitter url of a collection',
            example: 'https://twitter.com/boredapeyc',
          },
          banner_image_url: {
            title: 'Banner Image Url',
            type: 'string',
            description: 'The banner image url of a collection',
          },
          telegram_url: {
            title: 'Telegram Url',
            type: 'string',
            description: 'The telegram url of a collection',
          },
          has_rarity: {
            title: 'Has Rarity',
            type: 'boolean',
            description: 'Whether the collection has rarity rankings',
            default: false,
            example: true,
          },
          is_blue_chip_coll: {
            title: 'Is Blue Chip Coll',
            type: 'boolean',
            description: 'Whether the collection is a blue chip collection',
            default: false,
            example: true,
          },
          total_supply: {
            title: 'Total Supply',
            type: 'integer',
            description:
              'The total number of NFTs in a collection includes the count of both existing NFTs and those that have been burned.\n        For ERC1155 collection, the count refers to the number of token types.',
          },
          is_spam: {
            title: 'Is Spam',
            type: 'boolean',
            description: 'Whether the collection is spam',
            default: false,
          },
          protocol_name: {
            title: 'Protocol Name',
            type: 'string',
            description: 'The protocol name of the collection',
            example: 'brc-20',
          },
          market_cap_usd: {
            title: 'Market Cap Usd',
            type: 'number',
            description: 'Current market capitalization (USD) of the collection',
            example: 2074173716.1442845,
          },
          market_cap_eth: {
            title: 'Market Cap Eth',
            type: 'number',
            description: 'Current market capitalization (ETH) of the collection',
            example: 1885612.46922208,
          },
          market_cap_change_percentage: {
            title: 'Market Cap Change Percentage',
            type: 'number',
            description: 'Change in market capitalization of the collection over {time_range}',
            example: -0.6799999999999999,
          },
          volume_usd: {
            title: 'Volume Usd',
            type: 'number',
            description: 'Total transaction volume (USD) of the collection over {time_range}',
            example: 3771348.1764030457,
          },
          volume_eth: {
            title: 'Volume Eth',
            type: 'number',
            description: 'Total transaction volume (ETH) of the collection over {time_range}',
            example: 3428.49834218,
          },
          floor_price_usd: {
            title: 'Floor Price Usd',
            type: 'number',
            description: 'Current floor price of the collection (USD)',
            example: 77099.75243050091,
          },
          floor_price_eth: {
            title: 'Floor Price Eth',
            type: 'number',
            description: 'Current floor price of the collection (ETH)',
            example: 70.09068403,
          },
          whale_num: {
            title: 'Whale Num',
            type: 'integer',
            description:
              'Current number of whales holding NFTs in this collection. The addresses with $1,000,000+ NFT holding value across all collections are considered whales.',
            example: 507,
          },
          holder_num: {
            title: 'Holder Num',
            type: 'integer',
            description: 'Current number of holders in this collection.',
            example: 3560,
          },
          sale_num: {
            title: 'Sale Num',
            type: 'integer',
            description: 'The number of sales in the marketplace over the selected time range.',
            example: 10011,
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      _CollectionMetrics: {
        title: '_CollectionMetrics',
        required: [
          'last_updated',
          'volume_usd',
          'volume_eth',
          'avg_price_usd',
          'avg_price_eth',
          'sale_num',
          'liquidity',
          'buyer_num',
          'seller_num',
          'trader_num',
        ],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          market_cap_usd: {
            title: 'Market Cap Usd',
            type: 'number',
            description:
              'The market capitalization (USD) of a collection reflecting the total market value of a collection and is calculated as the sum of the last trade price of each item in the collection.',
          },
          market_cap_eth: {
            title: 'Market Cap Eth',
            type: 'number',
            description:
              'The market capitalization (ETH) of a collection reflecting the total market value of a collection and is calculated as the sum of the last trade price of each item in the collection.',
          },
          volume_usd: {
            title: 'Volume Usd',
            type: 'object',
            additionalProperties: {
              type: 'number',
            },
            example: {
              '24h': 964658.0341310501,
              '7d': 8489015.133845806,
              '30d': 58360112.514140606,
              all: 2144593170.17594,
            },
          },
          volume_eth: {
            title: 'Volume Eth',
            type: 'object',
            additionalProperties: {
              type: 'number',
            },
            example: {
              '24h': 964658.0341310501,
              '7d': 8489015.133845806,
              '30d': 58360112.514140606,
              all: 2144593170.17594,
            },
          },
          holder_num: {
            title: 'Holder Num',
            type: 'integer',
            description: 'The number of holders of NFTs in a collection',
          },
          listing_num: {
            title: 'Listing Num',
            type: 'integer',
            description: 'The number of listing of NFTs in a collection',
          },
          circulating_supply: {
            title: 'Circulating Supply',
            type: 'integer',
            description: 'The total number of NFTs in a collection.',
          },
          total_supply: {
            title: 'Total Supply',
            type: 'integer',
            description:
              'The total number of NFTs in a collection includes the count of both existing NFTs and those that have been burned.\n        For ERC1155 collection, the count refers to the number of token types.',
          },
          floor_price: {
            title: 'Floor Price',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV2WithMarket',
              },
            ],
            description: 'floor price of a collection',
          },
          best_offer: {
            title: 'Best Offer',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV2WithMarket',
              },
            ],
            description: 'The real-time highest collection offer price across the marketplaces.',
          },
          avg_price_usd: {
            title: 'Avg Price Usd',
            type: 'object',
            additionalProperties: {
              type: 'number',
            },
            description:
              'The average traded price (USD) across all items in a collection traded over a specified time frame',
            example: {
              '24h': 112121.0978185555,
              '7d': 112401.77036646252,
              '30d': 123345.07067891226,
            },
          },
          avg_price_eth: {
            title: 'Avg Price Eth',
            type: 'object',
            additionalProperties: {
              type: 'number',
            },
            description:
              'The average traded price (USD) across all items in a collection traded over a specified time frame',
            example: {
              '24h': 101.92827074,
              '7d': 102.18342761,
              '30d': 112.13188244,
            },
          },
          sale_num: {
            title: 'Sale Num',
            type: 'object',
            additionalProperties: {
              type: 'integer',
            },
            description: 'The number of sale transactions over a specified time frame',
            example: {
              '24h': 8,
              '7d': 76,
              '30d': 465,
            },
          },
          transfer_num: {
            title: 'Transfer Num',
            type: 'object',
            additionalProperties: {
              type: 'integer',
            },
            description: 'The number of transfer records, including transfer, mint and burn',
            example: {
              '24h': 1,
              '7d': 2,
              '30d': 3,
            },
          },
          liquidity: {
            title: 'Liquidity',
            type: 'object',
            additionalProperties: {
              type: 'number',
            },
            description:
              "Turnover is a measure for the relative liquidity of a collection and is calculated is calculated as the ratio of the total number of sales over the total number of items in a collection over a specified time frame: 'liquidity = sale_num / (total # of itmes in a collection)",
            example: {
              '24h': 0.0008,
              '7d': 0.0076,
              '30d': 0.0465,
            },
          },
          buyer_num: {
            title: 'Buyer Num',
            type: 'object',
            additionalProperties: {
              type: 'integer',
            },
            description: 'The number of buyers over certain interval (24h/7d/30d)',
            example: {
              '24h': 8,
              '7d': 63,
              '30d': 342,
            },
          },
          seller_num: {
            title: 'Seller Num',
            type: 'object',
            additionalProperties: {
              type: 'integer',
            },
            description: 'The number of sellers over certain interval (24h/7d/30d)',
            example: {
              '24h': 8,
              '7d': 66,
              '30d': 363,
            },
          },
          trader_num: {
            title: 'Trader Num',
            type: 'object',
            additionalProperties: {
              type: 'integer',
            },
            description:
              "The number of unique addresses buying or selling over certain interval (24h/7d/30d), note that 'trader_num \u2260 buyer_num + seller_num', as some addresses may generate both buy and sell transactions",
            example: {
              '24h': 16,
              '7d': 124,
              '30d': 625,
            },
          },
          collection_id: {
            title: 'Collection Id',
            type: 'string',
            description: 'The collection id of the collection',
          },
          collection_name: {
            title: 'Collection Name',
            type: 'string',
            description: 'Collection name',
            example: 'Bored Ape Yacht Club',
          },
          collection_slug: {
            title: 'Collection Slug',
            type: 'string',
            description: 'Collection slug',
          },
          opensea_slug: {
            title: 'Opensea Slug',
            type: 'string',
            description: 'An opensea slug is generated from the corresponding opensea url link',
            example: 'boredapeyachtclub',
          },
          contracts: {
            title: 'Contracts',
            type: 'array',
            items: {
              maxLength: 42,
              minLength: 42,
              pattern: '^0x[a-fA-F0-9]{40}$',
              type: 'string',
            },
            description: 'List of contract addresses which belong to a collection',
            example: ['0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'],
          },
          floor_price_change_percentage: {
            title: 'Floor Price Change Percentage',
            type: 'object',
            additionalProperties: {
              type: 'number',
            },
            description: 'Percentage change in floor prices',
            example: {
              '24h': 68,
              '7d': 195,
              '30d': 625,
            },
          },
          market_cap_usd_rank: {
            title: 'Market Cap Usd Rank',
            type: 'integer',
            description: 'market capitalization ranking in dollars',
            example: 1476,
          },
          market_cap_eth_rank: {
            title: 'Market Cap Eth Rank',
            type: 'integer',
            description: 'market capitalization ranking in Ether',
            example: 1030,
          },
          volume_change_percent: {
            title: 'Volume Change Percent',
            allOf: [
              {
                $ref: '#/components/schemas/routers__ETH__v1__collection___CollectionMetrics__VolumeChangePercent',
              },
            ],
            description: 'The percentage change of the volume of the market.',
          },
          collection: {
            $ref: '#/components/schemas/Collection',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      _CollectionRankingList: {
        title: '_CollectionRankingList',
        required: ['total', 'collections'],
        type: 'object',
        properties: {
          total: {
            title: 'Total',
            type: 'integer',
            description: 'Total number of collections in the ranking list',
            example: 2964,
          },
          collections: {
            title: 'Collections',
            type: 'array',
            items: {
              $ref: '#/components/schemas/_CollectionItem',
            },
            description: 'List of collection items in the ranking list',
          },
        },
      },
      _ETHAddressList: {
        title: '_ETHAddressList',
        required: ['total', 'relations'],
        type: 'object',
        properties: {
          total: {
            title: 'Total',
            minimum: 0.0,
            type: 'integer',
            description: 'Total number of addresses that related to a given address',
            example: 769,
          },
          relations: {
            title: 'Relations',
            type: 'array',
            items: {
              $ref: '#/components/schemas/_Relation',
            },
            example: [
              {
                peer_address: '0x54be3a794282c030b15e43ae2bb182e14c409c5e',
                receive_from_peer_num: 8,
                send_to_peer_num: 0,
                peer_is_whale: true,
                peer_is_contract: false,
                peer_is_blue_chip_holder: true,
                peer_is_super_blue_chip_holder: true,
              },
            ],
          },
        },
      },
      _FloorDepth: {
        title: '_FloorDepth',
        required: ['x', 'y'],
        type: 'object',
        properties: {
          x: {
            title: 'X',
            type: 'array',
            items: {
              type: 'integer',
            },
            description:
              'Trasaction price in Ether. Each point represents a start of a price range. The end of the range is the next point',
          },
          y: {
            title: 'Y',
            type: 'array',
            items: {
              type: 'number',
            },
          },
        },
      },
      _FloorPriceChart: {
        title: '_FloorPriceChart',
        required: ['last_updated', 'x', 'y'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          x: {
            title: 'X',
            type: 'array',
            items: {
              type: 'integer',
            },
            description: 'List of timestamps in seconds',
            example: [
              1631836800, 1632096000, 1632355200, 1632614400, 1632873600, 1633132800, 1633392000,
            ],
          },
          y: {
            title: 'Y',
            type: 'array',
            items: {
              type: 'number',
            },
            description: 'The floor price of each time point',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      _FloorPriceWithUsdtChart: {
        title: '_FloorPriceWithUsdtChart',
        required: ['last_updated', 'x', 'y'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          x: {
            title: 'X',
            type: 'array',
            items: {
              type: 'integer',
            },
            description: 'List of timestamps in seconds',
            example: [
              1631836800, 1632096000, 1632355200, 1632614400, 1632873600, 1633132800, 1633392000,
            ],
          },
          y: {
            $ref: '#/components/schemas/OHLCChart',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      _HolderTrendsChart: {
        title: '_HolderTrendsChart',
        required: ['holder', 'whale', 'blue_chip', 'change_percentage'],
        type: 'object',
        properties: {
          holder: {
            $ref: '#/components/schemas/_Chart',
          },
          whale: {
            $ref: '#/components/schemas/_Chart',
          },
          blue_chip: {
            $ref: '#/components/schemas/_Chart',
          },
          change_percentage: {
            $ref: '#/components/schemas/routers__ETH__v1__chart___HolderTrendsChart___Change',
          },
        },
      },
      _HoldersChart: {
        title: '_HoldersChart',
        required: ['last_updated', 'x', 'y'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          x: {
            title: 'X',
            type: 'array',
            items: {
              type: 'integer',
            },
            description: 'List of timestamps in seconds',
            example: [
              1631836800, 1632096000, 1632355200, 1632614400, 1632873600, 1633132800, 1633392000,
            ],
          },
          y: {
            title: 'Y',
            type: 'array',
            items: {
              type: 'integer',
            },
            description: 'The number of holders',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      _HoldingAmountDistributionChart: {
        title: '_HoldingAmountDistributionChart',
        required: ['1', '2-3', '4-10', '11-50', '51-100', '>100'],
        type: 'object',
        properties: {
          '1': {
            title: '1',
            type: 'integer',
          },
          '2-3': {
            title: '2-3',
            type: 'integer',
          },
          '4-10': {
            title: '4-10',
            type: 'integer',
          },
          '11-50': {
            title: '11-50',
            type: 'integer',
          },
          '51-100': {
            title: '51-100',
            type: 'integer',
          },
          '>100': {
            title: '>100',
            type: 'integer',
          },
        },
      },
      _HoldingPeriodDistributionChart: {
        title: '_HoldingPeriodDistributionChart',
        required: ['<24h', '1-7d', '7-30d', '30d-3M', '3M-1Y', '>1Y'],
        type: 'object',
        properties: {
          '<24h': {
            title: '<24H',
            type: 'number',
          },
          '1-7d': {
            title: '1-7D',
            type: 'number',
          },
          '7-30d': {
            title: '7-30D',
            type: 'number',
          },
          '30d-3M': {
            title: '30D-3M',
            type: 'number',
          },
          '3M-1Y': {
            title: '3M-1Y',
            type: 'number',
          },
          '>1Y': {
            title: '>1Y',
            type: 'number',
          },
        },
      },
      _ListingNumberChart: {
        title: '_ListingNumberChart',
        required: ['last_updated', 'x', 'y'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          x: {
            title: 'X',
            type: 'array',
            items: {
              type: 'integer',
            },
            description: 'List of timestamps in seconds',
            example: [
              1631836800, 1632096000, 1632355200, 1632614400, 1632873600, 1633132800, 1633392000,
            ],
          },
          y: {
            title: 'Y',
            type: 'array',
            items: {
              type: 'integer',
            },
            description: 'The number of listings at each time point',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      _MarketMetrics: {
        title: '_MarketMetrics',
        required: ['volume', 'trader_num', 'buyer_num', 'seller_num', 'transfer_num', 'sale_num'],
        type: 'object',
        properties: {
          market_sentiment: {
            title: 'Market Sentiment',
            allOf: [
              {
                $ref: '#/components/schemas/MarketSentiment',
              },
            ],
            description:
              'The Market Sentiment Index (experimental) is calculated based on (i) market volatility, (ii) trading volume, and (iii) social media and google search trends. The score is updated hourly',
            example: {
              score: 23,
              text: 'cool',
            },
          },
          market_cap_usd: {
            title: 'Market Cap Usd',
            type: 'number',
            description: 'Total market capitalization (USD)',
            example: 22881991205.551968,
          },
          volume: {
            title: 'Volume',
            type: 'object',
            additionalProperties: {
              type: 'number',
            },
            description: 'The total volume of transactions in the market over specified time frame',
            example: {
              '24h': 34044059.76876831,
              '7d': 242359700.55677032,
              '30d': 1253440094.8153,
              '3M': 2253440094.8153,
              '1y': 4253440094.8153,
              all: 60197909627.55946,
            },
          },
          holder_num: {
            title: 'Holder Num',
            type: 'integer',
            description: 'Total number of unique addresses holding NFTs',
            example: 2509276,
          },
          whale_num: {
            title: 'Whale Num',
            type: 'integer',
            description: 'Total number of unique whale addresses holding NFTs',
            example: 1465,
          },
          collection_num: {
            title: 'Collection Num',
            type: 'integer',
            description: 'Total number of collections',
            example: 2970,
          },
          nft_num: {
            title: 'Nft Num',
            type: 'integer',
            description: 'Total number of NFTs belonging to collections',
            example: 30186855,
          },
          trader_num: {
            title: 'Trader Num',
            type: 'object',
            additionalProperties: {
              type: 'integer',
            },
            description:
              'The number of unique addresses transacting in NFTs over a specified time frame.',
            example: {
              '24h': 30306,
              '7d': 130160,
              '30d': 307342,
              all: 1630973,
            },
          },
          buyer_num: {
            title: 'Buyer Num',
            type: 'object',
            additionalProperties: {
              type: 'integer',
            },
            description:
              'The number of unique addresses entering buy transactions in NFTs over a specified time frame.',
            example: {
              '24h': 16267,
              '7d': 75434,
              '30d': 199046,
              all: 1427242,
            },
          },
          seller_num: {
            title: 'Seller Num',
            type: 'object',
            additionalProperties: {
              type: 'integer',
            },
            description:
              'The number of unique addresses entering sale transactions in NFTs over a specified time frame.',
            example: {
              '24h': 19040,
              '7d': 86695,
              '30d': 205107,
              all: 817814,
            },
          },
          transfer_num: {
            title: 'Transfer Num',
            type: 'object',
            additionalProperties: {
              type: 'integer',
            },
            description: 'The number of transfers in the market',
            example: {
              '24h': 57168,
              '7d': 363788,
              '30d': 3003146,
              all: 43959057,
            },
          },
          sale_num: {
            title: 'Sale Num',
            type: 'object',
            additionalProperties: {
              type: 'integer',
            },
            description: 'The number of items sold in the market over a specified time frame',
            example: {
              '24h': 38322,
              '7d': 295796,
              '30d': 1196058,
              all: 16184562,
            },
          },
          volume_change_percent: {
            title: 'Volume Change Percent',
            allOf: [
              {
                $ref: '#/components/schemas/routers__models__MarketMetrics__VolumeChangePercent',
              },
            ],
            description: 'The percentage change of the volume of the market.',
          },
        },
      },
      _MarketpalceLeaderboard: {
        title: '_MarketpalceLeaderboard',
        required: ['total', 'last_updated', 'marketplaces_info'],
        type: 'object',
        properties: {
          total: {
            title: 'Total',
            type: 'integer',
            description: 'Total number of items',
            example: 10000,
          },
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          marketplaces_info: {
            title: 'Marketplaces Info',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Marketplace',
            },
            description: 'List of marketplaces',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      _NFTRankingItem: {
        title: '_NFTRankingItem',
        required: ['name', 'contract_address', 'token_id', 'collection', 'sale_num'],
        type: 'object',
        properties: {
          name: {
            title: 'Name',
            type: 'string',
            description: 'NFT name',
          },
          image: {
            title: 'Image',
            type: 'string',
            description: 'NFT image url or base64 encoded data',
          },
          animation_url: {
            title: 'Animation Url',
            type: 'string',
            description: 'NFT animation url',
          },
          contract_address: {
            title: 'Contract Address',
            type: 'string',
            description: 'NFT contract address',
          },
          token_id: {
            title: 'Token Id',
            type: 'string',
            description: 'NFT token id',
          },
          rarity: {
            title: 'Rarity',
            allOf: [
              {
                $ref: '#/components/schemas/Rarity',
              },
            ],
            description: 'NFT rarity',
          },
          traits: {
            title: 'Traits',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Trait',
            },
            description: 'NFT traits',
          },
          collection: {
            title: 'Collection',
            allOf: [
              {
                $ref: '#/components/schemas/_Collection',
              },
            ],
            description: 'Name of collection the nft belongs to',
          },
          owner: {
            title: 'Owner',
            allOf: [
              {
                $ref: '#/components/schemas/BlockchainIdentifier',
              },
            ],
            description: 'Currently owned by',
          },
          last_price: {
            title: 'Last Price',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV2',
              },
            ],
            description: 'Last traded price of the NFT (USD)',
          },
          price_change_usd: {
            title: 'Price Change Usd',
            type: 'number',
            description:
              'The difference (USD) between the last traded price of the NFT and the previous traded price before it',
          },
          price_change_eth: {
            title: 'Price Change Eth',
            type: 'number',
            description:
              'The difference (ETH) between the last traded price of the NFT and the previous traded price before it',
          },
          max_price: {
            title: 'Max Price',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV2',
              },
            ],
            description: 'The maximum price of the NFT in USD',
          },
          sale_num: {
            title: 'Sale Num',
            type: 'integer',
            description: 'The number of sales of this NFT over {time_range}',
          },
          last_deal_time: {
            title: 'Last Deal Time',
            type: 'integer',
            description: 'The timestamp in seconds of the latest trade',
          },
        },
      },
      _NFTRankingList: {
        title: '_NFTRankingList',
        required: ['last_updated', 'total', 'nfts'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          total: {
            title: 'Total',
            type: 'integer',
            description: 'The total number of NFTs in the ranking',
          },
          nfts: {
            title: 'Nfts',
            type: 'array',
            items: {
              $ref: '#/components/schemas/_NFTRankingItem',
            },
            example: [
              {
                name: 'Meebit #1938',
                image:
                  'https://static.nftgo.io/asset/metadata/4c5d98c87fe0cfae61c01541879b4193.undefined',
                contract_address: '0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7',
                token_id: '1938',
                rarity: {
                  score: 46.19,
                  rank: 3928,
                  total: 20000,
                },
                traits: [
                  {
                    type: 'Type',
                    value: 'Human',
                  },
                  {
                    type: 'Hair Style',
                    value: 'Curly',
                  },
                  {
                    type: 'Hair Color',
                    value: 'Blue',
                  },
                  {
                    type: 'Glasses',
                    value: 'Sunglasses',
                  },
                ],
                collection: {
                  name: 'Meebits',
                  slug: 'meebits',
                  contracts: ['0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7'],
                  blockchain: 'ETH',
                },
                owner: {
                  address: '0xa12c5c80d594e78f7bdef9842aa234b65339bd21',
                },
                last_price: {
                  quantity: 164.0,
                  value: 164.0,
                  crypto_unit: 'ETH',
                  usd: 176107.50759122497,
                },
                price_change_usd: -3221.4787974004576,
                max_price: {
                  quantity: 184.0,
                  value: 184.0,
                  crypto_unit: 'ETH',
                  usd: 193528.72680634644,
                },
                sale_num: 9,
                last_deal_time: 1652596299,
              },
            ],
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      _NFTRarity: {
        title: '_NFTRarity',
        required: ['token_id'],
        type: 'object',
        properties: {
          token_id: {
            title: 'Token Id',
            type: 'string',
            description:
              'The token ID for this NFT. Each item in an NFT collection     will be assigned a unique id.',
          },
          rarity: {
            title: 'Rarity',
            allOf: [
              {
                $ref: '#/components/schemas/Rarity',
              },
            ],
            description: 'The rarity of the NFT',
          },
        },
      },
      _NFT_pro: {
        title: '_NFT_pro',
        type: 'object',
        properties: {
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            description: 'Name of the blockchain the NFT belongs to',
            example: 'ETH',
          },
          collection_name: {
            title: 'Collection Name',
            type: 'string',
            description: 'Name of the collection the NFT belongs to',
            example: 'Bored Ape Yacht Club',
          },
          collection_slug: {
            title: 'Collection Slug',
            type: 'string',
            description: 'NFTGo Slug of the collection the NFT belongs to',
            example: 'bored-ape-yacht-club',
          },
          collection_opensea_slug: {
            title: 'Collection Opensea Slug',
            type: 'string',
            description: 'OpenSea slug of the collection the NFT belongs to',
            example: 'boredapeyachtclub',
          },
          collection_logo: {
            title: 'Collection Logo',
            type: 'string',
            description: 'The logo url or base64 encoded data of a collection',
            example: 'https://static.nftgo.io/asset/1651210195557.png',
          },
          contract_type: {
            title: 'Contract Type',
            type: 'string',
            description: 'Type of contract: ERC721 or ERC1155',
            example: 'ERC721',
          },
          contract_address: {
            title: 'Contract Address',
            anyOf: [
              {
                maxLength: 42,
                minLength: 42,
                pattern: '^0x[a-fA-F0-9]{40}$',
                type: 'string',
              },
              {
                type: 'string',
              },
            ],
            description: 'Contract address of the collection the NFT belongs to',
            example: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
          },
          token_id: {
            title: 'Token Id',
            type: 'string',
            description: 'The token ID of the NFT',
            example: '4495',
          },
          name: {
            title: 'Name',
            type: 'string',
            description: 'The name of the NFT',
            example: 'Bored Ape Yacht Club #4495',
          },
          description: {
            title: 'Description',
            type: 'string',
            description: 'The description of the NFT',
          },
          image: {
            title: 'Image',
            type: 'string',
            description: 'The url or base64 data of image or video associated with the NFT',
            example:
              'https://static.nftgo.io/asset/metadata/image/5e236a5b9e95e4b88df604399ea7ca56229fdf86b9b8da78a6fd587a155b8b98',
          },
          animation_url: {
            title: 'Animation Url',
            type: 'string',
            description: 'The url of animation associated with the NFT',
          },
          owner_addresses: {
            title: 'Owner Addresses',
            type: 'array',
            items: {
              anyOf: [
                {
                  maxLength: 42,
                  minLength: 42,
                  pattern: '^0x[a-fA-F0-9]{40}$',
                  type: 'string',
                },
                {
                  type: 'string',
                },
              ],
            },
            description:
              "List of owner addresses currently holding the NFT.         A list of one address if it's an ERC721 NFT. A list of addresses if it's an ERC1155 NFT.",
            example: ['0xcaf1d788c67BdAAC155E7dcC4D64e2004eF651D4'],
          },
          traits: {
            title: 'Traits',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Trait',
            },
            description:
              'The list of NFT traits. Traits consist of a series of types and values, referring to the feature of an NFT. For example, if a project has avatar NFTs, the traits may include headwear, facial traits, clothes, etc. Traits make each item in an NFT collection unique and determine its rarity in a collection.',
            example: [
              {
                type: 'Eyes',
                value: 'Wide Eyed',
                percentage: 0.0549,
              },
              {
                type: 'Background',
                value: 'Aquamarine',
                percentage: 0.1266,
              },
              {
                type: 'Fur',
                value: 'Black',
                percentage: 0.1229,
              },
              {
                type: 'Mouth',
                value: 'Bored',
                percentage: 0.2272,
              },
              {
                type: 'Clothes',
                value: 'Service',
                percentage: 0.0142,
              },
            ],
          },
          rarity: {
            title: 'Rarity',
            allOf: [
              {
                $ref: '#/components/schemas/Rarity',
              },
            ],
            description:
              'NFT Rarity score. Calculation methods can be seen as below: https://mirror.xyz/nftgoio.eth/kHWaMtNY6ZOvDzr7PR99D03--VNu6-ZOjYuf6E9-QH0',
            example: {
              score: 34.72,
              rank: 9152,
              total: 10000,
            },
          },
          owners: {
            title: 'Owners',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Holder',
            },
            description: 'owner tag, with owner address and the quantity of nft this owner have',
          },
          extra_rarity_info: {
            title: 'Extra Rarity Info',
            allOf: [
              {
                $ref: '#/components/schemas/ExtraRarityInfo',
              },
            ],
            description: 'NFT Rarity info from open rarity and rarity sniper',
            example: {
              open_rarity: {
                rank: 9152,
              },
              rarity_sniper: {
                rank: 9152,
              },
            },
          },
          suspicious: {
            title: 'Suspicious',
            type: 'boolean',
            description: 'Is it not tradeable on OpenSea?',
          },
          last_sale: {
            title: 'Last Sale',
            allOf: [
              {
                $ref: '#/components/schemas/Sale',
              },
            ],
            description: 'Last sale price of the NFT',
            example: {
              tx_hash: '0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              price_token: 98.5,
              token_symbol: 'ETH',
              token_contract_address: '0x0000000000000000000000000000000000000000',
              price_usd: 202001.28197466402,
              is_wash_trade: false,
              price: {
                value: 98.5,
                crypto_unit: 'ETH',
                usd: 202001.28197466402,
                payment_token: {
                  address: '0x0000000000000000000000000000000000000000',
                  symbol: 'ETH',
                  decimals: 18,
                },
              },
              tx_url:
                'https://etherscan.io/tx/0x8443c7fd50cecbfac1e5a330fed8e53ee8e611c6029dcbd6097ca729c9360328',
              time: 1652571359,
            },
          },
          listing_price: {
            title: 'Listing Price',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV2',
              },
            ],
            description: 'Listing price of the NFT',
            example: {
              value: 98.5,
              crypto_unit: 'ETH',
              usd: 202001.28197466402,
              payment_token: {
                address: '0x0000000000000000000000000000000000000000',
                symbol: 'ETH',
                decimals: 18,
              },
            },
          },
          listing_data: {
            $ref: '#/components/schemas/NftListing',
          },
          best_offer: {
            $ref: '#/components/schemas/Offer',
          },
          listing_time: {
            title: 'Listing Time',
            type: 'integer',
            description: 'Listing time of the NFT, formatted as timestamp in second.',
          },
          marketplace: {
            title: 'Marketplace',
            type: 'string',
            description: 'Listing marketplace of the NFT',
          },
          marketplace_link: {
            title: 'Marketplace Link',
            type: 'string',
            description: 'Marketplace link of the NFT',
          },
          pending_sales: {
            title: 'Pending Sales',
            type: 'array',
            items: {
              $ref: '#/components/schemas/PendingSale',
            },
            default: [],
          },
        },
      },
      _NFT_pro_list: {
        title: '_NFT_pro_list',
        required: ['total', 'nfts'],
        type: 'object',
        properties: {
          total: {
            title: 'Total',
            type: 'integer',
            description: 'Total number of items',
            example: 10000,
          },
          next_cursor: {
            title: 'Next Cursor',
            type: 'string',
          },
          nfts: {
            title: 'Nfts',
            type: 'array',
            items: {
              $ref: '#/components/schemas/_NFT_pro',
            },
            description: 'List of NFTs in the collection',
          },
        },
        description:
          '\u5982\u679c Model \u53ef\u80fd\u53ea\u5305\u542b\u90e8\u5206\u6570\u636e\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f Total',
      },
      _Order: {
        title: '_Order',
        required: [
          'time',
          'price',
          'blockchain',
          'contract_address',
          'token_id',
          'quantity',
          'buyer',
          'seller',
        ],
        type: 'object',
        properties: {
          time: {
            title: 'Time',
            type: 'integer',
            example: 1676871515,
          },
          price: {
            title: 'Price',
            type: 'number',
            example: 70.95,
          },
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            example: 'ETH',
          },
          contract_address: {
            title: 'Contract Address',
            maxLength: 42,
            minLength: 42,
            pattern: '^0x[a-fA-F0-9]{40}$',
            type: 'string',
            example: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
          },
          token_id: {
            title: 'Token Id',
            type: 'string',
            example: '2418',
          },
          token_name: {
            title: 'Token Name',
            type: 'string',
            example: 'CryptoPunk #2418',
          },
          quantity: {
            title: 'Quantity',
            type: 'integer',
            example: 1,
          },
          buyer: {
            $ref: '#/components/schemas/_Trader',
          },
          seller: {
            $ref: '#/components/schemas/_Trader',
          },
        },
      },
      _Params: {
        title: '_Params',
        required: ['contract_address', 'token_id'],
        type: 'object',
        properties: {
          contract_address: {
            title: 'Contract Address',
            type: 'string',
          },
          token_id: {
            title: 'Token Id',
            type: 'string',
          },
        },
      },
      _Rarity: {
        title: '_Rarity',
        required: ['last_updated'],
        type: 'object',
        properties: {
          score: {
            title: 'Score',
            type: 'number',
            description:
              'Rarity score. See methodology: https://mirror.xyz/nftgoio.eth/kHWaMtNY6ZOvDzr7PR99D03--VNu6-ZOjYuf6E9-QH0',
            example: 34.72,
          },
          rank: {
            title: 'Rank',
            type: 'integer',
            description: 'The rarity rank',
            example: 9152,
          },
          total: {
            title: 'Total',
            type: 'integer',
            description:
              'Total number of NFTs belonging to the colleciton involved in calculation of rarity',
            example: 10000,
          },
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      _RarityList: {
        title: '_RarityList',
        required: ['last_updated', 'nft_rarity_list'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          nft_rarity_list: {
            title: 'Nft Rarity List',
            type: 'array',
            items: {
              $ref: '#/components/schemas/_NFTRarity',
            },
            example: [
              {
                token_id: '4495',
                rarity: {
                  score: 34.72,
                  rank: 9152,
                  total: 10000,
                },
              },
              {
                token_id: '3312',
                rarity: {
                  score: 86.3,
                  rank: 34,
                  total: 10000,
                },
              },
            ],
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      _Relation: {
        title: '_Relation',
        required: ['peer_address', 'receive_from_peer_num', 'send_to_peer_num'],
        type: 'object',
        properties: {
          peer_address: {
            title: 'Peer Address',
            maxLength: 42,
            minLength: 42,
            pattern: '^0x[a-fA-F0-9]{40}$',
            type: 'string',
            example: '',
          },
          receive_from_peer_num: {
            title: 'Receive From Peer Num',
            minimum: 0.0,
            type: 'integer',
            description: 'How many NFTs were received from the peer_address',
          },
          send_to_peer_num: {
            title: 'Send To Peer Num',
            minimum: 0.0,
            type: 'integer',
            description: 'How many NFTs were sent to the peer_address',
          },
          peer_is_whale: {
            title: 'Peer Is Whale',
            type: 'boolean',
            description: 'Whether the peer_address is a whale',
          },
          peer_is_contract: {
            title: 'Peer Is Contract',
            type: 'boolean',
            description: 'Whether the peer_address is a contract',
          },
          peer_is_blue_chip_holder: {
            title: 'Peer Is Blue Chip Holder',
            type: 'boolean',
            description: 'Whether the peer_address is a blue chip holder',
          },
          peer_is_super_blue_chip_holder: {
            title: 'Peer Is Super Blue Chip Holder',
            type: 'boolean',
            description: 'Whether the peer_address is a super blue chip holder',
          },
        },
      },
      _SalesChart: {
        title: '_SalesChart',
        type: 'array',
        items: {
          $ref: '#/components/schemas/_Order',
        },
      },
      _TopMintList: {
        title: '_TopMintList',
        required: ['last_updated', 'top_mint_collection_items'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          top_mint_collection_items: {
            title: 'Top Mint Collection Items',
            type: 'array',
            items: {
              $ref: '#/components/schemas/TopMintCollectionItem',
            },
            description: 'List of top mint collection items',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      _Trader: {
        title: '_Trader',
        required: ['is_super_blue_chip_holder', 'is_blue_chip_holder', 'is_contract', 'is_whale'],
        type: 'object',
        properties: {
          address: {
            title: 'Address',
            type: 'string',
          },
          ens: {
            title: 'Ens',
            type: 'string',
          },
          avatar: {
            title: 'Avatar',
            maxLength: 65536,
            minLength: 1,
            type: 'string',
            format: 'uri',
          },
          twitter: {
            title: 'Twitter',
            type: 'string',
          },
          is_super_blue_chip_holder: {
            title: 'Is Super Blue Chip Holder',
            type: 'boolean',
          },
          is_blue_chip_holder: {
            title: 'Is Blue Chip Holder',
            type: 'boolean',
          },
          is_contract: {
            title: 'Is Contract',
            type: 'boolean',
          },
          is_whale: {
            title: 'Is Whale',
            type: 'boolean',
          },
        },
      },
      _TradersChart: {
        title: '_TradersChart',
        required: ['buyer', 'seller', 'change_percentage'],
        type: 'object',
        properties: {
          buyer: {
            $ref: '#/components/schemas/Chart',
          },
          seller: {
            $ref: '#/components/schemas/Chart',
          },
          change_percentage: {
            $ref: '#/components/schemas/routers__ETH__v1__chart___TradersChart___Change',
          },
        },
      },
      routers__ETH__v1__chart___HolderTrendsChart___Change: {
        title: '_Change',
        type: 'object',
        properties: {
          holder: {
            title: 'Holder',
            type: 'number',
          },
          whale: {
            title: 'Whale',
            type: 'number',
          },
          blue_chip_holder: {
            title: 'Blue Chip Holder',
            type: 'number',
          },
        },
      },
      routers__ETH__v1__chart___TradersChart___Change: {
        title: '_Change',
        type: 'object',
        properties: {
          buyer: {
            title: 'Buyer',
            type: 'number',
          },
          seller: {
            title: 'Seller',
            type: 'number',
          },
        },
      },
      routers__ETH__v1__collection___CollectionMetrics__VolumeChangePercent: {
        title: 'VolumeChangePercent',
        type: 'object',
        properties: {
          '1y': {
            title: '1Y',
            type: 'number',
          },
          '30d': {
            title: '30D',
            type: 'number',
          },
          '7d': {
            title: '7D',
            type: 'number',
          },
          '24h': {
            title: '24H',
            type: 'number',
          },
        },
      },
      routers__ETH__v1__collection___MarketCapChart: {
        title: '_MarketCapChart',
        required: ['last_updated', 'x', 'y'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          x: {
            title: 'X',
            type: 'array',
            items: {
              type: 'integer',
            },
            description: 'List of timestamps in seconds',
            example: [
              1631836800, 1632096000, 1632355200, 1632614400, 1632873600, 1633132800, 1633392000,
            ],
          },
          y: {
            title: 'Y',
            type: 'array',
            items: {
              type: 'number',
            },
            description: 'The market capitalization at each time point',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      routers__ETH__v1__collection___VolumeChart: {
        title: '_VolumeChart',
        required: ['last_updated', 'x', 'y'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          x: {
            title: 'X',
            type: 'array',
            items: {
              type: 'integer',
            },
            description: 'List of timestamps in seconds',
            example: [
              1631836800, 1632096000, 1632355200, 1632614400, 1632873600, 1633132800, 1633392000,
            ],
          },
          y: {
            title: 'Y',
            type: 'array',
            items: {
              type: 'number',
            },
            description: 'Transaction volume at each timestamp',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      routers__ETH__v1__market___MarketCapChart: {
        title: '_MarketCapChart',
        required: ['last_updated', 'x', 'y'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          x: {
            title: 'X',
            type: 'array',
            items: {
              type: 'integer',
            },
            description: 'List of timestamps in seconds',
            example: [
              1631836800, 1632096000, 1632355200, 1632614400, 1632873600, 1633132800, 1633392000,
            ],
          },
          y: {
            title: 'Y',
            type: 'array',
            items: {
              type: 'number',
            },
            description: 'The marketplace market cap of each time point',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      routers__ETH__v1__market___VolumeChart: {
        title: '_VolumeChart',
        required: ['last_updated', 'x', 'y'],
        type: 'object',
        properties: {
          last_updated: {
            title: 'Last Updated',
            type: 'integer',
            description: 'Last updated timestamp in seconds',
            example: 1652598929,
          },
          x: {
            title: 'X',
            type: 'array',
            items: {
              type: 'integer',
            },
            description: 'List of timestamps in seconds',
            example: [
              1631836800, 1632096000, 1632355200, 1632614400, 1632873600, 1633132800, 1633392000,
            ],
          },
          y: {
            title: 'Y',
            type: 'array',
            items: {
              type: 'number',
            },
            description: 'The marketplace volume of each time point',
          },
        },
        description:
          '\u5982\u679c Model \u7684\u6570\u636e\u5b58\u5728\u6709\u6548\u671f\uff0c \u5219\u5b83\u5e94\u8be5\u7ee7\u627f LastUpdatedModel',
      },
      routers__models__MarketMetrics__VolumeChangePercent: {
        title: 'VolumeChangePercent',
        type: 'object',
        properties: {
          '1y': {
            title: '1Y',
            type: 'number',
          },
          '3M': {
            title: '3M',
            type: 'number',
          },
          '30d': {
            title: '30D',
            type: 'number',
          },
          '7d': {
            title: '7D',
            type: 'number',
          },
          '24h': {
            title: '24H',
            type: 'number',
          },
        },
      },
      routers__models__NewWhale___Transaction: {
        title: '_Transaction',
        required: ['tx_hash'],
        type: 'object',
        properties: {
          tx_hash: {
            title: 'Tx Hash',
            type: 'string',
          },
          time: {
            title: 'Time',
            type: 'integer',
          },
        },
      },
      routers__models__TransactionListV2___Transaction: {
        title: '_Transaction',
        required: ['blockchain', 'event', 'quantity', 'time'],
        type: 'object',
        properties: {
          blockchain: {
            title: 'Blockchain',
            type: 'string',
            description: 'The name of the blockchain where the transaction ocurred',
            example: 'ETH',
          },
          sender: {
            title: 'Sender',
            allOf: [
              {
                $ref: '#/components/schemas/AddressInfoV2',
              },
            ],
            description: 'Sender of transaction',
            example: {
              address: '0xa5004c8b2d64ad08a80d33ad000820d63aa2ccc9',
              is_whale: false,
              blockchain: 'ETH',
              is_contract: false,
              is_blue_chip_holder: false,
              is_super_blue_chip_holder: false,
              is_multi_sign_wallet: false,
            },
          },
          receiver: {
            title: 'Receiver',
            allOf: [
              {
                $ref: '#/components/schemas/AddressInfoV2',
              },
            ],
            description: 'Receiver of transaction',
            example: {
              address: '0xd2dc28f65c76510a4a930d28664a60828c4cf64e',
              ens: 'tima.eth',
              is_whale: false,
              blockchain: 'ETH',
              is_contract: false,
              is_blue_chip_holder: false,
              is_super_blue_chip_holder: false,
              is_multi_sign_wallet: false,
            },
          },
          event: {
            title: 'Event',
            type: 'string',
            description: 'Transaction type',
            example: 'transfer',
          },
          quantity: {
            title: 'Quantity',
            type: 'integer',
            description: 'Quantity of NFTs involved in the transaction',
            example: 1,
          },
          tx_hash: {
            title: 'Tx Hash',
            type: 'string',
            description: 'Transaction hash',
            example: '0x286b7537cc79dca661b28fc58137b9f0385d1e3886a147e087922e104d1d4311',
          },
          time: {
            title: 'Time',
            type: 'integer',
            description: 'Transaction timestamp in seconds',
            example: 1652626903,
          },
          nft: {
            title: 'Nft',
            allOf: [
              {
                $ref: '#/components/schemas/SimpleNFTInfoWithContractType',
              },
            ],
            description: 'NFT involved in the transaction',
            example: {
              contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
              token_id: '6512',
              name: 'Bored Ape Yacht Club #6512',
              blockchain: 'ETH',
              contract_type: 'ERC721',
            },
          },
          collection: {
            $ref: '#/components/schemas/CollectionBaseInfo',
          },
          gas_fee: {
            title: 'Gas Fee',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV3',
              },
            ],
            description: 'The gas fee of transaction',
          },
          price: {
            title: 'Price',
            allOf: [
              {
                $ref: '#/components/schemas/PriceV3',
              },
            ],
            description:
              'Value of the NFT transaction. May be None if the transcation is a transfer (send/receive), mint or burn',
          },
          marketplace_path: {
            title: 'Marketplace Path',
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'List of marketplace or aggregator corresponding to the activity.',
            example: ['blur-aggregator', 'opensea'],
          },
          fees: {
            title: 'Fees',
            type: 'array',
            items: {
              $ref: '#/components/schemas/Fee',
            },
          },
          trait_offer_target: {
            title: 'Trait Offer Target',
            allOf: [
              {
                $ref: '#/components/schemas/TraitOfferTarget',
              },
            ],
            description:
              'The value of the trait associated with the offer, only when the event is "trait_offer".',
          },
        },
      },
    },
  },
};
