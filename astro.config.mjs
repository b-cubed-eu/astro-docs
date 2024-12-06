import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'B-Cubed guides & tutorials',
      social: {
        github: 'https://github.com/b-cubed-eu/documentation',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Example guide', slug: 'guides/example' },
            { label: 'Software development guide', slug: 'guides/dev-guide' }
          ],
        },
        {
          label: 'Tutorials',
          autogenerate: { directory: 'tutorials' },
        },
      ],
    }),
  ],
});
