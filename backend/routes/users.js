const express = require('express');
const router = express.Router();
const {getAllUsers} = require('../controllers/users.js');

router.get('/get', getAllUsers)

module.exports = router;