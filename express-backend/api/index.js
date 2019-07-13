var express = require('express');
var router = express.Router();

const authorRoutes = require('./authorRoutes');
const comicRoutes = require('./comicRoutes')

router.get('/', function(req, res){
    res.send('Welcome to Alexandira API!')
});

router.use('/authors', authorRoutes);
router.use('/comics', comicRoutes);

module.exports = router;

