import ejsExtend from 'express-ejs-extend'
/**
 * Config view engine for app
 * @param app from exactly express module
 * @param folder path express static
 */

const configViewEngine = (app, folder) => {
  // set the view engine to ejs
  app.engine('ejs', ejsExtend)
  app.set('view engine', 'ejs')
  app.set('views', folder)
}

export default configViewEngine
