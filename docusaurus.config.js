// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gentle Guide',
  tagline: 'Moar wipes!!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://adeptsofcataclysm.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Cata_guide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'adeptsofcataclysm', // Usually your GitHub org/user name.
  projectName: 'Cata_guide', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/adeptsofcataclysm/Cata_guide/tree/source',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'Адепты Катаклизма',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'bd',
            position: 'left',
            label: 'Твердыня Крыла Тьмы',
          },
        {
          type: 'docSidebar',
          sidebarId: 'bot',
          position: 'left',
          label: 'Сумеречный Бастион',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tfw',
          position: 'left',
          label: 'Трон Четырёх Ветров',
        },
        {
          type: 'docSidebar',
          sidebarId: 'fl',
          position: 'left',
          label: 'Огненные просторы'
        },
        {
          type: 'docSidebar',
          sidebarId: 'ds',
          position: 'left',
          label: 'Душа дракона'
        },
        {to: 'adepts', label: 'О нас', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Руководства',
            items: [
              {
                label: 'ТКТ',
                to: '/docs/bd/intro',
              },
                {
                  label: 'СБ',
                  to: '/docs/bot/intro',
                },
                {
                  label: 'ТЧВ',
                  to: '/docs/tfw/intro',
                },
                {
                  label: 'ФЛ',
                  to: '/docs/fl/intro'
                },
                {
                  label: 'ДС',
                  to: '/docs/ds/intro'
                }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                to: 'https://adeptsofcataclysm.github.io/Cata_guide/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/NPSjpTeWwt',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gentlemanchik. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

    plugins: ['./plugins/plugin-wowhead'],
};

export default config;
