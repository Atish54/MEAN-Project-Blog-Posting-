
console.log('Welcome to the Blog Posting World');

let express = require('express');
let app = express();
let bodyparser = require('body-parser');
let signUpRoute = require('../Route/SignUp');
app.use(bodyparser.json());

let loginRoute = require('../Route/Login');
let blogRoute  = require('../Route/Blog');
let commentRoute = require('../Route/Comment');
let likeRoute = require('../Route/Like');
let dislikeRoute = require('../Route/Dislike');
app.use(loginRoute);
app.use(signUpRoute);
app.use(blogRoute);
app.use(commentRoute);
app.use(likeRoute);
app.use(dislikeRoute);

app.use(express.static('Public')); 

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => 
console.info(`server starter on port ${PORT}`)
) 