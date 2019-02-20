let LikeModel = require('../Models/LikeModel');
let express = require('express');
  
let app = express();
let route = express.Router();

//This method is used for the insert basic detail into database which is require for Like 
route.post('/Like',(req,res)=>
{
    if(!req.body)
    {
        return res.status(400).send();
    }
    let model = new LikeModel(req.body);
    model.save().then(doc =>{
        if(!doc || doc.length == 0){
            return res.status(500).send(doc);
        }
        res.status(200).send(doc);
    });
})


//This method is used for the get data from the database
route.get('/Like',(req,res)=>
{   
    LikeModel.findOne({
        ArticleTitle:req.query.ArticleTitle, 
    })
    .then(doc=>{
        res.status(201).send(doc);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
})

//This Method is used for the Update the  Data
route.put('/Like',(req,res)=>
{   

    if(Object.keys.length == 0)
    {
        return res.status(500).send('Please Pass spome data in Request body');
    }
    LikeModel.findOneAndUpdate(
    {
        ArticleTitle:req.query.ArticleTitle,   
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
route.delete('/Like',(req,res)=>
{ 
    LikeModel.deleteOne({
        ArticleTitle:req.query.ArticleTitle, 
    })
    .then(doc=>{
        res.status(201).send(doc);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
})

module.exports = route;
