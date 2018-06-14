const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/commerce');
mongoose.connection.on('connected', function(){
    console.log("connected to mongoose DB")
})
module.exports = mongoose;