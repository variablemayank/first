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

var count = 0
jsoncontent.map(content=>{
var channel = new Channel(content)
channel.save().then(channel_res=>{
  count++
  console.log(count)
}).catch(err=>console.log(err))
},()=>{
  console.log(count)
})

const app = express()

app.get('/get_channel',(req,res)=>{
  Channel.find({})
        .then(channel=>{
          res.status(200).send(channel)
        }).catch(err=>console.log(err))
})

app.listen(5000,()=>console.log('server started'))
