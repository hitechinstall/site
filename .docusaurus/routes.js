
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/site/',
  component: ComponentCreator('/site/','c9f'),
  exact: true,
},
{
  path: '/site/blog',
  component: ComponentCreator('/site/blog','375'),
  exact: true,
},
{
  path: '/site/blog/hello-world',
  component: ComponentCreator('/site/blog/hello-world','997'),
  exact: true,
},
{
  path: '/site/blog/hola',
  component: ComponentCreator('/site/blog/hola','d4f'),
  exact: true,
},
{
  path: '/site/blog/tags',
  component: ComponentCreator('/site/blog/tags','b3b'),
  exact: true,
},
{
  path: '/site/blog/tags/docusaurus',
  component: ComponentCreator('/site/blog/tags/docusaurus','6bd'),
  exact: true,
},
{
  path: '/site/blog/tags/facebook',
  component: ComponentCreator('/site/blog/tags/facebook','97e'),
  exact: true,
},
{
  path: '/site/blog/tags/hello',
  component: ComponentCreator('/site/blog/tags/hello','1dd'),
  exact: true,
},
{
  path: '/site/blog/tags/hitechinstall',
  component: ComponentCreator('/site/blog/tags/hitechinstall','af0'),
  exact: true,
},
{
  path: '/site/blog/tags/hola',
  component: ComponentCreator('/site/blog/tags/hola','af6'),
  exact: true,
},
{
  path: '/site/blog/tags/welcome',
  component: ComponentCreator('/site/blog/tags/welcome','a6d'),
  exact: true,
},
{
  path: '/site/blog/welcome',
  component: ComponentCreator('/site/blog/welcome','0ad'),
  exact: true,
},
{
  path: '/site/blog/welcome_to_hitechinstall',
  component: ComponentCreator('/site/blog/welcome_to_hitechinstall','556'),
  exact: true,
},
{
  path: '/site/markdown-page',
  component: ComponentCreator('/site/markdown-page','7f3'),
  exact: true,
},
{
  path: '/site/my-react-page',
  component: ComponentCreator('/site/my-react-page','849'),
  exact: true,
},
{
  path: '/site/docs',
  component: ComponentCreator('/site/docs','a0a'),
  
  routes: [
{
  path: '/site/docs/contact',
  component: ComponentCreator('/site/docs/contact','078'),
  exact: true,
},
{
  path: '/site/docs/intro',
  component: ComponentCreator('/site/docs/intro','8f0'),
  exact: true,
},
{
  path: '/site/docs/manufacturers',
  component: ComponentCreator('/site/docs/manufacturers','ef5'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
