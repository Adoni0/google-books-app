// import { Router } from 'express';
var router = require('express').Router();
const googleController = require('../../controllers/googleController');

// var router = Router();

// routes to /api/google
router.route('/').get(googleController.findAll);


module.exports = router;