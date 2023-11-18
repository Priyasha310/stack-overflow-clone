const  mongoose = require('mongoose');
const Questions = require('../models/question');

const postAnswer = async (req, res)=>{
    const {id: _id} = req.params;
    const {noOfAnswers, answerBody, userAnswered, userId} = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json({msg:'Question invalid..', status:false})
    }
    updateNoOfAnswers(_id, noOfAnswers);
    try {
        if(!answerBody) res.status(400).json({msg:'Enter answer to post', status:false});
        const updatedQuestion = await Questions.findByIdAndUpdate(_id, 
            {$addToSet: {'answer': [{answerBody, userAnswered, userId}]}});
        res
            .status(200)
            .json({msg:"answer posted", status:true, updatedQuestion});
    } catch (error) {
        res.status(400).json("Error in updating question's answer")
        console.log(error);
    }
}

const updateNoOfAnswers = async(_id, noOfAnswers) => {
  try{
      await Questions.findByIdAndUpdate(_id, {
          $set: {noOfAnswers: noOfAnswers},
      })
  }catch(error){
      console.log(error);
  }
}

const deleteAnswer = async(req, res) => {}

module.exports = {postAnswer, deleteAnswer}