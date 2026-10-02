#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "tt3labs",
  boardId: "tt3labs-official",
  domain: "tt3labs.com",
  npmName: "zc-tt3labs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
