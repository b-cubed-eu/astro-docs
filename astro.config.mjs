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
      logo: {
        src: './src/assets/b3-logo.svg',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/b-cubed-eu/astro-docs/',
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
