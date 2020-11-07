
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children:[
      {
        path:'/home',
        redirect:'/home/main'
      },
      {
        path: '/home/main',
        component: () => import('pages/Home.vue')
      },
    ]
  },
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
