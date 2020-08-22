const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/shop';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Connected to db...');
    }
})