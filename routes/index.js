const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use('*',(req, res) => {
  res.send("<h1>Use /api routes to see what's going on!</h1>")
});

module.exports = router;