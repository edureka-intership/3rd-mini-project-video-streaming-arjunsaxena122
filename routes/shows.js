const express = require('express');
const ctrl = require('../controllers/shows')

const router = express.Router();


router.get('/shows/', ctrl.listAPI)
router.get('/shows/:id/', ctrl.detailAPI)

router.get('/stream/:id/', ctrl.streamAPI)


module.exports = router;
