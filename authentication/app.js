const express = require("express")
const mongoose = require("mongoose")
const _ = require("lodash");
const atlas_uri = require("./atlas_uri");
const bcrypt = require("bcrypt") //for hashing
const saltRounds = 10; // for bycrypt 
require('dotenv').config(); //for storing api keys, other sensitive information 
// create a file called ".env" to store those keys 
// configuring app 
const app = express();
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static("public"))
appPort = process.env.PORT || 3000 


//database configuration 
mongoose.set("strictQuery", false)
mongoose.connect(atlas_uri)

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})
const User = new mongoose.model("User", userSchema)
app.get("/",function(req,res){
    res.render("home")
})

app.get("/login",function(req,res){
    res.render("login")
})

app.get("/register",function(req,res){
    res.render("register")
})


//capturing user POST data from register form 
app.post("/register",function(req,res){
    bcrypt.hash(req.body.password,saltRounds,function(error,hash){
        const newUser = new User({
        email: req.body.username, // name tag in html 
        password: hash 
        })
        newUser.save(function(err){
            if (err){
                console.log(`Error in the save function: ${err} `)
            }else{
                res.render("secrets")
            }
        })   
    })
    

})

// Capturing user login 
app.post("/login",function(req,res){
    const username = req.body.username 
    const password = req.body.password
    User.findOne({email:username},function(err,foundUser){
        if (err){
            console.log(err)
        }else{
            if (foundUser){
                bcrypt.compare(password,foundUser.password,function(error,result){
                    if (result== true){
                        res.render("secrets")
                    }
                })
            }
        }
    })
})

app.listen(appPort,function (){
    console.log(`Application started on port: ${appPort}`)
})