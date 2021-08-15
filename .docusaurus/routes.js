
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','5e3'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','e13'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','f97'),
  exact: true,
},
{
  path: '/blog/tags/hitechinstall',
  component: ComponentCreator('/blog/tags/hitechinstall','fbb'),
  exact: true,
},
{
  path: '/blog/tags/welcome',
  component: ComponentCreator('/blog/tags/welcome','fe9'),
  exact: true,
},
{
  path: '/blog/welcome_to_hitechinstall',
  component: ComponentCreator('/blog/welcome_to_hitechinstall','715'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/my-react-page',
  component: ComponentCreator('/my-react-page','86f'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','d26'),
  
  routes: [
{
  path: '/docs/contact',
  component: ComponentCreator('/docs/contact','a89'),
  exact: true,
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
  path: '/docs/manufacturers',
  component: ComponentCreator('/docs/manufacturers','78d'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];