let mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/BlogPostingAssignment").then(()=>{
    
})
.catch((err)=>{
    console.log('Not Connected to database',err);
});

//This Schema is used for the SignUp related activity
let SignUpSchema  = new mongoose.Schema({
    Name:String,
    Email:
    {
        type:String,
        require:true,
        unique:true
    },
    Password: 
    {
         type: String , required: [true,  'Password cannot be blank']
    },
    ConfirmPassword: 
    {
         type: String , required: [true,  'Confirm Password cannot be blank']
    },
    Country:
    {
         type: String , required: [true, 'Country cannot be blank.']
    },
    Gender: 
    {
          type: String , required: [true, 'Gender must be provided']
    },

});

module.exports = mongoose.model('SignUp',SignUpSchema);



