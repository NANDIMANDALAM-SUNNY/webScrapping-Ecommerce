var express = require('express');
const { getProductDetails } = require('../controllers/Product');
const { validate } = require('../middleware/middleware');
var router = express.Router();


router.get('/product-details', getProductDetails)

module.exports = router;
