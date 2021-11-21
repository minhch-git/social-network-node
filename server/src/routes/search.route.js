import { Router } from 'express'
import searchController from '../app/controllers/search.controller'

const router = new Router()
router.get('/', searchController.searchPage)

export default router
