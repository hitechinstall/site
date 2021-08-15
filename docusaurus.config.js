const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  customFields: {
    tagline2: '𝒞𝑜𝓂𝑒 𝑜𝓃 𝒾𝓃!',
    phone: '612-559 - 1000',
  },
  title: '𝒲𝑒𝓁𝒸𝑜𝓂𝑒 𝓉𝑜 ℋ𝒾𝒯𝑒𝒸𝒽ℐ𝓃𝓈𝓉𝒶𝓁𝓁.𝒸𝑜𝓂',
  tagline: '39 𝒴𝑒𝒶𝓇𝓈 𝒾𝓃 𝒷𝓊𝓈𝒾𝓃𝑒𝓈𝓈 𝒽𝒶𝓈 𝓉𝒶𝓊𝑔𝒽𝓉 𝓊𝓈 𝒶 𝓁𝑜𝓉!',
  url: 'https://hitechinstall.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/hitech_logo.ico',
  organizationName: 'hitechinstall', // Usually your GitHub org/user name.
  projectName: 'site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'HiTechInstall.com',
      logo: {
        alt: 'HiTech Install Logo',
        src: 'img/hitech_logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'manufacturers',
          position: 'left',
          label: 'Manufacturers',
        },
        {to: '/docs/contact', label: 'Contact', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/hitechinstall/site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} 𝓗𝓲-𝓣𝓮𝓬𝓱 𝓘𝓷𝓼𝓽𝓪𝓵𝓵𝓪𝓽𝓲𝓸𝓷/𝓢𝓮𝓬𝓾𝓻𝓲𝓽𝔂 𝓛𝓛𝓒`,
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Manufacturers',
              to: '/docs/manufacturers',
            },
            {
              label: 'Contact Us',
              to: '/docs/contact',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/hitechinstallmn',
            },
            {
              label: 'Instagram',
              href: 'https://Instagram.com/hitechinstallmn',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hitechinstall',
            },
          ],
        },
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} 𝓗𝓲-𝓣𝓮𝓬𝓱 𝓘𝓷𝓼𝓽𝓪𝓵𝓵𝓪𝓽𝓲𝓸𝓷/𝓢𝓮𝓬𝓾𝓻𝓲𝓽𝔂 𝓛𝓛𝓒`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hitechinstall/site/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/hitechinstall/site/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
