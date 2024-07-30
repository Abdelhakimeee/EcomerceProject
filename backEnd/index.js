const express = require("express");
const cors = require('cors');

const app = express();
require('./db/config');   //connect to db
const User = require('./db/User.js')

app.use(express.json());
app.use(cors());


app.post('/register',async (req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    resp.send(result);
});

app.post('/login',async (req,resp)=>{    // you have to instoll this info in users in bd like data
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
        if(user){
             resp.send(user)
        }else{
            resp.send({result:"No User found"})
    }}else{
        resp.send({result:"No User found"})
    }
})



app.listen(5000);