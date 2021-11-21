import catchAsync from '../../utils/catchAsync'

/**
 * @GET '/search'
 * @access public
 */
const searchPage = catchAsync(async (req, res) => {
  res.render('search/search')
})

export default { searchPage }
