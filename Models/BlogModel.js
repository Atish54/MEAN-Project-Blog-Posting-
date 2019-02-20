let mongoose = require('mongoose'); 
let Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/BlogPostingAssignment").then(()=>{
     
})
.catch((err)=>{
    console.log('Not Connected to database',err);
});

//This Schema is used for the Blog related activity
let BlogSchema  = new mongoose.Schema({

    ArticleTitle:
    {
        type:String,
        require:true,
        unique:true
    },
    ArticleContent:
    {
        type:String,
        require:true,
    },
    ArticleType: 
    {
         type: String , required: [true,  'ArticleType cannot be blank']
    },
    ArticleMode: 
    {
         type: String , required: [true,  'ArticleMode cannot be blank']
    },
    AuthorName: 
    {
         type: String , required: [true,  'AuthorName cannot be blank']
    },
    AuthorEmail: 
    {
         type: String , required: [true,  'AuthorEmail cannot be blank']
    },
    AuthorDescription: 
    {
          type: String 
    },
    PublishDate:
    {
         type: Date , required: [true, 'PublishDate cannot be blank.']
    },
});

module.exports = mongoose.model('Blog',BlogSchema);