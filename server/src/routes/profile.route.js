import { Router } from 'express'
import profileController from '../app/controllers/profile.controller'

const router = new Router()
router.get('/', profileController.profilePage)

export default router
