export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5c04746d2bad9c16eb0d8a',
                  title: 'Sanity Studio',
                  name: 'developr---designr-studio',
                  apiId: 'bf831829-2d01-4ca2-b49a-19dcdbe115cf'
                },
                {
                  buildHookId: '5e5c0474147b02005344e1e5',
                  title: 'Portfolio Website',
                  name: 'developr---designr',
                  apiId: '2cbb852f-cd00-4cce-85e0-40165c72eb6f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamNGVJ/developr---designr',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://developr---designr.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
