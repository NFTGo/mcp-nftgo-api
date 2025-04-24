# NFTGo MCP

A Model Context Protocol server that provides HTTP request to NFTGo Developer API based on NFTGo [API documentation](https://docs.nftgo.io/reference/introduction).

Currently only support Ethereum.

## Key Features
**1. NFT Collection**
- Retrieve Collection Details: Fetch metadata and statistics for specific NFT collections.
- List Collections: Obtain a list of NFT collections with filtering and sorting options.

**2. NFT Asset**
- Get NFT Details: Access detailed information about individual NFTs, including metadata and ownership.
- List NFTs: Retrieve lists of NFTs based on various criteria such as collection, owner, or traits.

**3. Market Data and Analytics**
- Market Trends: Analyze market trends and metrics over time.
- Price History: Access historical pricing data for NFTs and collections.
- Volume and Sales Data: Retrieve data on trading volumes and sales activities.

**4. User and Wallet Information**
- Wallet Holdings: View NFTs held by specific wallet addresses.
- Transaction History: Access the transaction history associated with wallets or NFTs.

**5. Search and Filtering Capabilities**
- Advanced Search: Perform searches across NFTs and collections using various filters and parameters.
- Trait-Based Filtering: Filter NFTs based on specific traits or attributes.

**6. Real-Time Data and Notifications**
- Webhooks: Set up webhooks to receive real-time updates on specific events or changes.
- Live Data Feeds: Access live data streams for market activities and NFT events.

## Usage with Claude Desktop

To use this server with the Claude Desktop app, add the following configuration to the "mcpServers" section of your `claude_desktop_config.json`:

### NPX

```json
{
  "mcpServers": {
    "nftgoapi": {
      "command": "npx",
      "args": ["-y", "@nftgo/mcp-nftgo-api", "NFTGO-API-KEY"]
    }
  }
}
```

Replace `NFTGO-API-KEY` with your API key. You can create your free `NFTGo-API-KEY` [here](https://nftgo.io/developers).

## Building

```sh
pnpm install
pnpm build
```

## License

This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
