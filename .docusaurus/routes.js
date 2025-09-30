import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Demo-Docs-2/blog',
    component: ComponentCreator('/Demo-Docs-2/blog', '9e0'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/blog/archive',
    component: ComponentCreator('/Demo-Docs-2/blog/archive', '6a2'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/blog/authors',
    component: ComponentCreator('/Demo-Docs-2/blog/authors', 'e8a'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Demo-Docs-2/blog/authors/all-sebastien-lorber-articles', '273'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/blog/authors/yangshun',
    component: ComponentCreator('/Demo-Docs-2/blog/authors/yangshun', '30e'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/blog/first-blog-post',
    component: ComponentCreator('/Demo-Docs-2/blog/first-blog-post', 'd8f'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/blog/long-blog-post',
    component: ComponentCreator('/Demo-Docs-2/blog/long-blog-post', '46c'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/blog/mdx-blog-post',
    component: ComponentCreator('/Demo-Docs-2/blog/mdx-blog-post', '53e'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/blog/tags',
    component: ComponentCreator('/Demo-Docs-2/blog/tags', '76b'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/blog/tags/docusaurus',
    component: ComponentCreator('/Demo-Docs-2/blog/tags/docusaurus', '047'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/blog/tags/facebook',
    component: ComponentCreator('/Demo-Docs-2/blog/tags/facebook', 'dc5'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/blog/tags/hello',
    component: ComponentCreator('/Demo-Docs-2/blog/tags/hello', '7d6'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/blog/tags/hola',
    component: ComponentCreator('/Demo-Docs-2/blog/tags/hola', '297'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/blog/welcome',
    component: ComponentCreator('/Demo-Docs-2/blog/welcome', 'fe8'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/markdown-page',
    component: ComponentCreator('/Demo-Docs-2/markdown-page', 'ca1'),
    exact: true
  },
  {
    path: '/Demo-Docs-2/docs',
    component: ComponentCreator('/Demo-Docs-2/docs', 'ec0'),
    routes: [
      {
        path: '/Demo-Docs-2/docs',
        component: ComponentCreator('/Demo-Docs-2/docs', 'd68'),
        routes: [
          {
            path: '/Demo-Docs-2/docs',
            component: ComponentCreator('/Demo-Docs-2/docs', '477'),
            routes: [
              {
                path: '/Demo-Docs-2/docs/category/tutorial---basics',
                component: ComponentCreator('/Demo-Docs-2/docs/category/tutorial---basics', '18e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Demo-Docs-2/docs/category/tutorial---extras',
                component: ComponentCreator('/Demo-Docs-2/docs/category/tutorial---extras', 'f1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Demo-Docs-2/docs/intro',
                component: ComponentCreator('/Demo-Docs-2/docs/intro', 'e3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Demo-Docs-2/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Demo-Docs-2/docs/tutorial-basics/congratulations', '9c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Demo-Docs-2/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Demo-Docs-2/docs/tutorial-basics/create-a-blog-post', 'a27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Demo-Docs-2/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Demo-Docs-2/docs/tutorial-basics/create-a-document', '348'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Demo-Docs-2/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Demo-Docs-2/docs/tutorial-basics/create-a-page', 'ef1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Demo-Docs-2/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Demo-Docs-2/docs/tutorial-basics/deploy-your-site', 'a3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Demo-Docs-2/docs/tutorial-basics/intro',
                component: ComponentCreator('/Demo-Docs-2/docs/tutorial-basics/intro', '9ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Demo-Docs-2/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Demo-Docs-2/docs/tutorial-basics/markdown-features', '1d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Demo-Docs-2/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Demo-Docs-2/docs/tutorial-extras/manage-docs-versions', '578'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Demo-Docs-2/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Demo-Docs-2/docs/tutorial-extras/translate-your-site', 'f65'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Demo-Docs-2/',
    component: ComponentCreator('/Demo-Docs-2/', 'b0e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
