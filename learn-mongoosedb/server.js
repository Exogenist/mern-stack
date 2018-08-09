//connecting to express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', () => res.send("hi"));

app.listen(port, () => console.log('server running on port '+ port));