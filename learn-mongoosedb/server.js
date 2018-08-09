//connecting to express
const express = require('express');
const app = express();


const posts = require('./routes/api/posts.js');
const user = require('./routes/api/user.js');
const profile = require('./routes/api/profile.js');

//initialize app
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');


//DB config
const db = require('./config/keys.js').mongoURI;

//connect to mongoDB
mongoose
    .connect(db)
    .then(() => console.log("mongoDB is connected"))
    .catch(err => console.log(err));

// use routes
app.use('/api/user/', user)
app.use('/api/posts/', posts)
app.use('/api/profile/', profile)

app.get('/', (req, res) => res.send("hi"));

app.listen(port, () => console.log('server running on port '+ port));