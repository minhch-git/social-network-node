import createError from 'http-errors'
import pick from '../../utils/pick'
import catchAsync from '../../utils/catchAsync'
import { userService } from '../services'

/**
 * @POST api/v1/users/
 * @access private
 */
const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body)
  res.status(201).send(user)
})

/**
 * @GET api/v1/users
 * @access public
 */
const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['firstName', 'lastName', 'role', 'email'])
  let options = pick(req.query, ['sort', 'select', 'sortBy', 'limit', 'page'])
  const customLabels = {
    docs: 'users',
    page: 'page',
    totalPages: 'totalPages',
    limit: 'limit',
    totalDocs: 'totalUsers',
  }
  options = { ...options, customLabels }
  const result = await userService.queryUsers(filter, options)
  res.send(result)
})

/**
 * @GET api/v1/users/:userId
 * @access public
 */
const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId)
  if (!user) {
    throw createError.NotFound()
  }
  res.send(user)
})

/**
 * @PATCH api/v1/users/:userId
 * @access private
 */
const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body)
  res.send(user)
})

/**
 * @DELETE api/v1/users/:userId
 * @access private
 */
const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId)
  res.status(200).json({
    success: true,
    message: 'Deleted user successfully!!!',
  })
})
export default { createUser, getUsers, getUser, updateUser, deleteUser }
