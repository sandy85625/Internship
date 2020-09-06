const express = require('express');
const User = require('../models/User');


// --------- Register user in database --------- //
module.exports.create = function(req, res) {

    // Checking if passwords matcher
    if (req.body.password != req.body.repassword) {
        console.log("Password not match");
        return res.redirect('back');
    }

    //finding user if already exist or not
    User.findOne({email : req.body.email}, function(error,user){

        // If any error occurred
        if(error){
            console.log("Error : CREATE 1");
            return ;
        }
        // If user does not exist
        if(!user){
            User.create(req.body, function(error,user){
                if(error){
                    console.log("Error in creating User");
                }
                console.log(user);
                return res.redirect("/signin");
            })
        }else{
            console.log("User Already Exists");
            return res.redirect("back");
        }

    })    
}

//---------- Login Handel --------//

module.exports.login = function(req, res){
    return res.redirect('/user')
}