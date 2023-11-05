const express = require('express');
const router = express.Router();
const {postAnswer} = require('../controllers/answer');

router.patch('/post/:id', postAnswer)

module.exports = router;