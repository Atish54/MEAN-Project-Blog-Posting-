let CommentModel = require('../Models/CommentModel');
let express = require('express');
  
let app = express();
let route = express.Router();

// function VerifyRecord(req, res, next) {

//     SignUpModel.findOne({
//         Email:new SignUpModel(req.body.Email),
//         CommentTitle:req.body.CommentTitle
//     })
   
//     .then(doc=>{
//         res.status(201).send(doc);
//         next();
//     })
//     .catch(err=>{
//         res.status(500).json(err);
//     })
    
// }

//This method is used for the insert basic detail into database which is require for Blog create 
route.post('/Comment',(req,res)=>
{
    if(!req.body)
    {
        return res.status(400).send('You should pass some data which is requier for Comment');
    }
    let model = new CommentModel(req.body);
    model.save().then(doc =>{
        if(!doc || doc.length == 0){
            return res.status(500).send(doc);
        }
        res.status(200).send(doc);
    });
})


//This method is used for the get data from the database
route.get('/Comment',(req,res)=>
{   
    CommentModel.findOne({
        CommentTitle:req.query.CommentTitle,
    })
    .then(doc=>{
        res.status(201).send(doc);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
})

//This Method is used for the Update the  Data
route.put('/Comment',(req,res)=>
{   

    if(Object.keys.length == 0)
    {
        return res.status(500).send('Please Pass spome data in Request body');
    }
    CommentModel.findOneAndUpdate(
    {
        CommentTitle:req.query.CommentTitle   
    },
    req.body,
    {
        new:true
    })
    .then(doc=>{
        res.status(201).send(doc);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
})

//This Method is used for the Delete Data
route.delete('/Comment',(req,res)=>
{ 
    CommentModel.deleteOne({
        CommentTitle:req.query.CommentTitle,  
    })
    .then(doc=>{
        res.status(201).send(doc);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
})

module.exports = route;
