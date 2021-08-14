export default {
  "title": "HiTechInstall.com",
  "tagline": "39 𝒴𝑒𝒶𝓇𝓈 𝒾𝓃 𝒷𝓊𝓈𝒾𝓃𝑒𝓈𝓈 𝒽𝒶𝓈 𝓉𝒶𝓊𝑔𝒽𝓉 𝓊𝓈 𝒶 𝓁𝑜𝓉!",
  "url": "https://hitechinstall.com",
  "baseUrl": "/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/hitech_logo.ico",
  "organizationName": "hitechinstall",
  "projectName": "site",
  "themeConfig": {
    "navbar": {
      "title": "HiTechInstall.com",
      "logo": {
        "alt": "HiTech Install Logo",
        "src": "img/hitech_logo.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "manufacturers",
          "position": "left",
          "label": "Manufacturers",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/hitechinstall/site",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "copyright": "Copyright © 2021 𝓗𝓲-𝓣𝓮𝓬𝓱 𝓘𝓷𝓼𝓽𝓪𝓵𝓵𝓪𝓽𝓲𝓸𝓷/𝓢𝓮𝓬𝓾𝓻𝓲𝓽𝔂 𝓛𝓛𝓒",
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Manufacturers",
              "to": "/docs/manufacturers"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Twitter",
              "href": "https://twitter.com/hitechinstallmn"
            },
            {
              "label": "Instagram",
              "href": "https://Instagram.com/hitechinstallmn"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/hitechinstall"
            }
          ]
        }
      ]
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/oni/Repositories/github.com/hitechinstall/site/sidebars.js",
          "editUrl": "https://github.com/hitechinstall/site/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/hitechinstall/site/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/oni/Repositories/github.com/hitechinstall/site/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};