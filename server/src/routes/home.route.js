import { Router } from 'express'
import homeController from '../app/controllers/home.controller'

const router = new Router()
router.get('/', homeController.homePage)

export default router
