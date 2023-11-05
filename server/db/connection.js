const mongoose = require('mongoose');
const url = "mongodb+srv://ankit9319421847:ankit9319421847@cluster0.wml6kdv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url).then(() => {
    console.log('connected to DB');
}).catch((err) => {
    console.log(err);
})