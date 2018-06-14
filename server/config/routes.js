
const users = require('../controllers/users.js');

//change mongoose.js server name
module.exports = function(app){
    app.post('/addProduct', function(req,res){
        users.addProduct(req,res)
    })
    app.post('/getProduct', function(req,res){
        users.getProduct(req,res)
    })
    app.post('/updateProduct', function(req,res){
        users.updateProduct(req,res)
    })
    app.post('/deleteProduct', function(req,res){
        users.deleteProduct(req,res)
    })
}