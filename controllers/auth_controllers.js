const express = require('express');
const User = require('../../Social-Time/models/user');


// --------- Register user in database --------- //
module.exports.create = function(req, res) {

    if (req.body.password != req.body.repassword) {
        console.log("Password not match");
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(error,user){
        if(error){
            console.log("User not found");
            return ;
        }
        if(!user){
            User.findOne(req.body, function(error,user){
                if(error){
                    console.log("Error in creating User");
                }
                return res.redirect("/signin");
            })
            return res.redirect("back");
        }

    })    
}