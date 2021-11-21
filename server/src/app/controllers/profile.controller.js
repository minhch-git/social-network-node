import catchAsync from '../../utils/catchAsync'

/**
 * @GET '/profile'
 * @access public
 */
const profilePage = catchAsync(async (req, res) => {
  res.render('profile/profile')
})

export default { profilePage }
