const express = require("express");
require("./db/config");
const User= require('./db/User');
const emailValidator = require('email-validator');
const {Validator} = require('node-input-validator');

const app = express();

app.use(express.json());


app.post("/register",async (req,resp)=>{
    /*let user = new User(req.body);

    if (emailValidator.validate(user.email)){
        console.log("Success");
        let result = await user.save();
        resp.send(result);
    }
    else{
        console.log("Error");
        resp.send("Invalid Email");
    }*/

    const v = new Validator(req.body, {
        name: 'required|minLength:2',
        email: 'required|email',
        password: 'required'
      });
    
    const matched= await v.check();

    if (!matched){
        resp.status(422).send(v.errors);
    }

    try {
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
    
        let userData=await user.save();
        resp.status(200).send({
            message:'Registration successfully',
            data:userData
        });
    } catch (err) {
        resp.status(400).send({
            message:err.message,
            data:err
        })
    }
})

app.listen(5000);