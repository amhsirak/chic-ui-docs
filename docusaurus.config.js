// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chic UI',
  tagline: 'Simple and Lightweight UI Component Library for React',
  url: 'https://chic-ui.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'karishmashuklaa',
  projectName: 'chic-ui',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/karishmashuklaa/chic-ui',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-H5KSS8RL0W',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Chic UI',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/karishmashuklaa/chic-ui',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.npmjs.com/package/chic-ui',
            label: 'NPM',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
              {
                label: 'Components',
                to: '/docs/components/avatar',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/karishmashuklaa/chic-ui',
              },
              {
                label: 'NPM',
                href: 'https://www.npmjs.com/package/chic-ui',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Documentation',
                href: 'https://github.com/karishmashuklaa/chic-ui-docs',
              },
              {
                label: 'Source Code',
                href: 'https://github.com/karishmashuklaa/chic-ui',
              },
            ],
          },
        ],
        copyright: `Built by <a href='https://github.com/karishmashuklaa/chic-ui/graphs/contributors'>GitHub Contributors</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
