const routes = require('express').Router();
// const routeController = require("../controllers/routes")

routes.use('/', require('./swagger'));

routes.get('/', (req, res) => {
  // swagger.tags=['Hello World']
  res.send('Hello World');
});
// routes.get('/', routeController.panasheRoute);
// routes.get('/marjorie', routeController.marjorieRoute);
// routes.get('/primrose', routeController.primroseRoute);
// routes.get('/gamu', routeController.gamuRoute);

routes.use('/contacts', require('./contacts'));

module.exports = routes;
