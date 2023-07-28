const router = require('express').Router();

// import 
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');


// home requests
router.use('/', homeRoutes);
// dashboard requests
router.use('/dashboard', dashboardRoutes);

// 404 response
router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;