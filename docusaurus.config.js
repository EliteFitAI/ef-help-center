// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
require('dotenv').config();
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EliteFit.AI',
  tagline: 'Reforming Healthcare and Fitness through AI',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.elitefitforyou.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'helpcenter', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [require.resolve('./src/ClientModules/ScrollToCenter.js')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '2.0',
              path: '',
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true, // Respects user's system preference
      },
      metadata: [
        { name: 'algolia-site-verification', content: '2060A96D4D652C3A' },
      ],
      navbar: {
        title: 'EliteFit.AI',
        logo: {
          alt: 'EliteFit.AI Logo',
          src: 'img/EFLogo.svg',
          href: 'https://www.elitefitforyou.com/'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Help Center',
          },
          {
            type: 'docsVersionDropdown',
            versions: ['current', '1.0'],
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark', // or 'light'
        links: [
          {
            items: [{
              html: `
            <div class="col-md-4 mb-3">
<!--          <img class="ef-footer-logo mb-4" src="../assets/images/ef-footer-logo.webp" alt="EliteFit">-->
          <div class="ef-footer-logo mb-4">
            <img src="/img/EFLogo.svg" alt="EliteFit"/>
            <div class="logo-text">ELITEFIT.AI</div>
          </div>
          <div class="text-footer">Copyright © EliteFit Pte Ltd</div>
          <div class="text-footer mb-4">All Rights Reserved.</div>
          <div class="social-logo">
            <a href="https://www.facebook.com/Elitefitforyou" target="_blank">
              <img src="https://img.icons8.com/?size=100&id=F1Q_pDY0qwkx&format=png&color=ffffff" alt="Facebook"/>
            </a>
            <a href="https://www.linkedin.com/company/elitefit-ai" target="_blank">
              <img src="https://img.icons8.com/?size=100&id=2EqeH19eMd3a&format=png&color=ffffff" alt="Linkedin"/>
            </a>
            <a href="https://www.youtube.com/channel/UCtFOZEYkdxcWRvGfHKIu0jQ" target="_blank">
              <img src="https://img.icons8.com/?size=100&id=oNs9WuTrXJUL&format=png&color=ffffff" alt="YouTube"/>
            </a>
            <a href="https://www.instagram.com/elitefit.ai/" target="_blank">
              <img src="https://img.icons8.com/?size=100&id=85154&format=png&color=ffffff" alt="Instagram"/>
            </a>
          </div>
        </div>
                `
            }]
          },
          {
            title: 'Who we serve',
            items: [
              { label: 'Healthcare', to: 'https://www.elitefitforyou.com/healthcare' },
              { label: 'Fitness/Yoga', to: 'https://www.elitefitforyou.com/fitness' },
              { label: 'Insurance', to: 'https://www.elitefitforyou.com/insurance' },
              { label: 'Public Sector', to: 'https://www.elitefitforyou.com/publicsector' },
            ],
          },
          {
            title: 'About EliteFit.AI',
            items: [
              { label: 'Why EliteFit.AI', to: 'https://www.elitefitforyou.com/our-journey' },
              { label: 'Careers', to: 'https://www.elitefitforyou.com/careers' },
              { label: 'Contact Us', to: 'https://www.elitefitforyou.com/contact-us' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'Videos', to: 'https://www.elitefitforyou.com/videos' },
              { label: 'Press', to: 'https://www.elitefitforyou.com/press' },
              { label: 'FAQ', to: 'https://help.elitefitforyou.com/FAQs' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Terms of Use', to: 'https://www.elitefitforyou.com/terms-of-use' },
              { label: 'Privacy Policy', to: 'https://www.elitefitforyou.com/privacy-policy' },
              { label: 'Cookies & Ads', to: 'https://www.elitefitforyou.com/cookie-policy' },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      // algolia: {
      //   appId: process.env.ALGOLIA_APP_ID,
      //   apiKey: process.env.ALGOLIA_API_KEY,
      //   indexName: process.env.ALGOLIA_INDEX_NAME,
      //   insights: true,
      //   searchParameters: {},
      //   searchPagePath: 'search',
      // },
    }),

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: ['en'],
        removeDefaultStemmer: true,          // partial words
        fuzzyMatchingDistance: 1,            // typos
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
        searchResultContextMaxLength: 80,
      },
    ],
  ],
};

export default config;
