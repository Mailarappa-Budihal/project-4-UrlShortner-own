const express = require('express');
const route = require('./routes/route')
const app = express();
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://manaskumar:iFVJhjYrsH7iars8@cluster0.s4pqkzd.mongodb.net/group51Database?retryWrites=true&w=majority", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/', route);


app.use(function(req, res) {
    return res.status(404).send({ status: false, message: "Path not Found." })
})


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});