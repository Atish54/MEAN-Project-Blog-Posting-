let SignUpModel = require('../Models/SignUpModel');
let express = require('express');

let app = express();
let route = express.Router();

//This method is used for the insert basic detail into database which is require for signup 
route.post('/SignUp',(req,res)=>
{
    if(!req.body)
    {
        return res.status(400).send('You should pass some data which is requier for SignUp');
    }
    let model = new SignUpModel(req.body);
    model.save().then(doc =>{
        if(!doc || doc.length == 0){
            return res.status(500).send(doc);
        }
        res.status(200).send(doc);
    });
})

//This method is used for the get data from the database
route.get('/SignUp',(req,res)=>
{   
    SignUpModel.findOne({
        Email:req.query.Email,
    })
    .then(doc=>{
        res.status(201).send(doc);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
})

//This Method is used for the Update the  Data
route.put('/SignUp',(req,res)=>
{   

    if(Object.keys.length == 0)
    {
        return res.status(500).send('Please Pass spome data in Request body');
    }
    SignUpModel.findOneAndUpdate(
    {
        Email:req.query.Email   
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
route.delete('/SignUp',(req,res)=>
{ 
    SignUpModel.deleteOne({
        email:req.query.email,  
    })
    .then(doc=>{
        res.status(201).send(doc);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
})

module.exports = route;
