const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/HomePage.vue'),
        children: [
          {
            path: '',
            components: {
              default: () => import('src/pages/ClinicMapPage.vue'), // Default view
              bookAppointment: () => import('src/components/AddAppointment.vue'),
              services: () => import('src/components/ServicesComponent.vue'),
              about: () => import('src/components/AboutComponents.vue') // Named view
            }
          }
        ]
       }
    ]
  },
  {path: '/signin', component: () => import('src/layouts/SignInLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/SignInPage.vue'),
      }
  ]
  },
  {
    path: '/admin',
    component: () => import('src/layouts/AdminPage.vue'),
    children: [
      {path: '', component: () => import('src/components/UsersTablePage.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
