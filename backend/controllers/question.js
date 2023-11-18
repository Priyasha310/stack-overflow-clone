const Question =  require('../models/question')

const AskQuestion = async (req, res, next) => {
    const {questionTitle, questionBody,  questionTags, currentUserName, currentUserId, upVotes, downVotes} = req.body;
        
    try {

        if(!questionTitle || !questionBody || !questionTags ){
            return res.status(400).json({msg:'Please provide required information',  status: false })
        }
        if(questionTags.length > 5){
            return res.status(400).json({msg:'Must provide upto 5 tags',  status: false })
        }
        if(questionBody.length < 20){
            return res.status(400).json({msg:'Details must be of 20 characters',  status: false })
        }
        
        const question = await Question.create({...req.body, userPosted:currentUserName, userId: currentUserId});
        await question.save();
        res.status(200).json({msg:"posted a question successfully", status: true, question })
    } 
    catch (error) {
        console.log(error);
        res
            .status(409)
            .json({msg: "Couldn't post new question", status: false })
    }
}

const getAllQuestions = async (req, res, next) => {
    try{
        const questionsList = await Question.find();
        res.status(200).json(questionsList);
    }catch(error){
        console.log(error);
        res.status(404).json({msg:res.msg})
    }
}

const deleteQuestion = async (req, res, next) => {
    const {id: qId} = req.params;
    const question = await Question.findOneAndDelete({_id: qId});
    try{
        if(!question){
            return res.status(404).json({msg:`no question with id: ${qId}`, status:false})
        }
        res.status(200).json({msg:`question with id: ${qId} deleted`, status:true, question})
    }catch(error){
        console.log(error);
    }
    
}

const voteQuestion = async (req, res, next) => {
    const { id:_id } = req.params;
    const { upVotes, downVotes } = req.body;
    console.log(req.body);
    
  
    try{
        const upVote = await Question.findByIdAndUpdate(_id, {
            $set: {upVotes: upVotes},
        })
        const downVote = await Question.findByIdAndUpdate(_id, {
            $set: {downVotes: downVotes},
        })
        res.status(200).json({msg:`question with id: ${_id} voted`, upVotes:upVotes, downVotes:downVotes, status:true});
    }catch(error){
        console.log(error);
        res.status(400).json({status:false, error})
    }
}

module.exports =  {AskQuestion, getAllQuestions, deleteQuestion, voteQuestion};