let mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/BlogPostingAssignment").then(()=>{
    
})
.catch((err)=>{
    console.log('Not Connected to database',err);
});

//This Schema is used for the SignUp related activity
let CommentSchema  = new mongoose.Schema({
    CommentTitle:
    {
        type:String,
        require:true, 
    },
    CommentDescription:
    {
        type:String,
    },
    CommentDate: 
    {
         type: Date , required: [true,  'CommentDate cannot be blank']
    },
    ArticleTitle: 
    {
        type:String,
        require:true,
    },
    CommentBy:
    {
        
        type: String , required: [true, 'CommentBy cannot be blank.'],    
    },
    Email:
    {
        type:String
    },
    like:
    {
        type:String
    },
    dislike:
    {
        type:String
    },

});


module.exports = mongoose.model('Comment',CommentSchema);



