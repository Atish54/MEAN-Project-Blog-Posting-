let mongoose = require('mongoose'); 
let Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/BlogPostingAssignment").then(()=>{
     
})
.catch((err)=>{
    console.log('Not Connected to database',err);
});

//This Schema is used for the Blog related activity
let LikeSchema  = new mongoose.Schema({

    ArticleTitle:
    {
        type:String,
        require:true,
        unique:true
    },
    Email: 
    [
        {
         type: String ,
        },
    ],
    Like:
    {
        type: Number ,
    },
    
    
});

module.exports = mongoose.model('Like',LikeSchema);