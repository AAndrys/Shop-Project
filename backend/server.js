const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const cors = require('cors');

//REQUIRE
require('./db/mongoose');
require('dotenv/config');
////

//USE
app.use(cors());
app.use(bodyParser.json());
////

//router
const userRouter = require('./routes/userRouter');
app.use('/user', userRouter);
////
app.get('/', (req, res) => {
    res.send('Hello in /');
});

//SERVER LISTEN
app.listen(port, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Server running on port: ' + port)
    }
});
////