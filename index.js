var fs = require('fs');
const express = require('express')
const mongoose = require('mongoose')

var Channel = require('./models/Channel')
console.log("start");
var content = fs.readFileSync("csvjson.json");

var jsoncontent = JSON.parse(content);


mongoose.connect('mongodb://localhost:27017/channeldata',({useNewUrlParser:true}))
.then(()=>console.log('connected to mongodb'))
.catch((err)=>console.log(err))

jsoncontent.map(content=>{
var channel = new Channel(content)
channel.save().then(channel_res=>{
  console.log('saved')
}).catch(err=>console.log(err))
})
