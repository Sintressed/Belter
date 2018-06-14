const User = require('../models/product.js')

module.exports = {
    addProduct: function(req,res){
        User.create(req.body)
        .then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
    },
    getProduct: function(req,res){
        if(req.body == 'all'){
            User.find({})
            .then(data =>{
                res.json(data)
            })
            .catch(err =>{
                res.json(err)
            })
        }
        else{
            User.findOne({_id: req.body})
            .then(data =>{
                res.json([data])
            })
            .catch(err =>{
                res.json(err)
            })
        }

    },
    updateProduct: function(req,res){
        console.log("body: ",req.body)
        User.update({_id: req.body[0]},{$set: req.body[1]})
        .then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
    },
    deleteProduct: function(req,res){
        User.deleteOne({_id: req.body})
        .then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
 }
}