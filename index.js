const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();
const router = express.Router();
//const mongoose = require("mongoose");

//add the password to an env file
//mongoose.connect('mongodb+srv://admin:pword@carwash-igyrc.mongodb.net/test?retryWrites=true&w=majority');


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});


app.use('/', router);

app.use(express.static(path.join(__dirname, 'public')));
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs')
//app.get('/', (req, res) => res.render('pages/index'));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));