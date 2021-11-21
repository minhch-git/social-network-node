import catchAsync from '../../utils/catchAsync'

/**
 * @GET '/profile'
 * @access public
 */
const messagePage = catchAsync(async (req, res) => {
  res.render('message/message')
})

export default { messagePage }
