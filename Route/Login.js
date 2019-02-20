let SignUpModel = require('../Models/SignUpModel');
let express = require('express');

let app = express();
let route = express.Router();

//This Method is used for the Get Data for the Login
route.get('/Login',(req,res)=>
{   
    SignUpModel.find({
        Email:req.query.Email,
        Password:req.query.Password
    })
    .then(doc=>{
        res.status(201).send(doc);
    })
    .catch(err=>{
        console.log('Please Enter Correct Email / Password');
        res.status(500).json(err);
    })
})

module.exports = route;