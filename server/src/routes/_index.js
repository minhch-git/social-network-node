import { Router } from 'express'
import authRoutes from './auth.route'
import userRoutes from './user.route'
import homeRoutes from './home.route'
import searchRoutes from './search.route'
import profileRoutes from './profile.route'
import messageRoutes from './message.route'

// import uploadRoutes from './upload'
const router = new Router()

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/search',
    route: searchRoutes,
  },
  {
    path: '/profile',
    route: profileRoutes,
  },
  {
    path: '/message',
    route: messageRoutes,
  },
  {
    path: '/',
    route: homeRoutes,
  },
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
