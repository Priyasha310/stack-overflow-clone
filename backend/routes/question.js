const express = require('express');
const router = express.Router()
const {AskQuestion, getAllQuestions, deleteQuestion, voteQuestion} =  require('../controllers/question.js')
const auth = require('../middleware/auth.js');

router
    .post('/ask', AskQuestion)
    .get('/get', getAllQuestions)
    .delete('/delete/:id', auth, deleteQuestion)
    .patch('/vote/:id', voteQuestion)

module.exports = router;