// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || "http://localhost:4321",
  integrations: [sitemap(), mdx(), tailwind(), robotsTxt({
    sitemap: true,
    host: process.env.ASTRO_SITE || "http://localhost:4321",
    policy: [
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 10
      }
    ]
  })]
});
