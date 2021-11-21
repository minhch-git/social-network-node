import catchAsync from '../../utils/catchAsync'

/**
 * @GET '//
 * @access public
 */
const homePage = catchAsync(async (req, res) => {
  res.render('home/home')
})

export default { homePage }
