import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { remarkHeadingId } from "remark-custom-heading-id"

// https://astro.build/config
export default defineConfig({
  site: 'https://b-cubed-eu.github.io',
  base: 'astro-docs',
  integrations: [
    starlight({
      title: 'B-Cubed documentation',
      social: {
        github: 'https://github.com/b-cubed-eu/documentation',
      },
      editLink: {
        baseUrl: 'https://github.com/b-cubed-eu/documentation/edit/main/',
      },
      sidebar: [
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'R',
          autogenerate: { directory: 'r' },
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkHeadingId]
  }
});
