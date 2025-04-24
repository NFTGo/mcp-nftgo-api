# NFTGoAPI

A Model Context Protocol server that provides HTTP request to NFTGo Developer API based on NFTGo API documentation.

## Components

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

Replace `NFTGO-API-KEY` with your API key.

## Building

```sh
pnpm install
pnpm build
```

## License

This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
