let BlogModel = require('../Models/BlogModel');
let express = require('express');

let app = express();
let route = express.Router();

//This method is used for the insert basic detail into database which is require for Blog create 
route.post('/Blog',(req,res)=>
{
    if(!req.body)
    {
        return res.status(400).send('You should pass some data which is requier for Blog');
    }
    let model = new BlogModel(req.body);
    model.save().then(doc =>{
        if(!doc || doc.length == 0){
            return res.status(500).send(doc);
        }
        res.status(200).send(doc);
    });
})

//This method is used for the get data from the database
route.get('/Blog',(req,res)=>
{   
    BlogModel.findOne({
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
route.put('/Blog',(req,res)=>
{   

    if(Object.keys.length == 0)
    {
        return res.status(500).send('Please Pass spome data in Request body');
    }
    BlogModel.findOneAndUpdate(
    {
        ArticleTitle:req.query.ArticleTitle   
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
route.delete('/Blog',(req,res)=>
{ 
    BlogModel.deleteOne({
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