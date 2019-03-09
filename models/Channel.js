const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChannelSchema = new Schema({
  rank:{
    // type:String
  },
  grade:{
    // type:String
  },
  channel_name:{
    // type:String
  },
  video_uploads:{
    // type:Number
  },
  subscribers:{
    // type:Number
  },
  video_views:{
    // type:Number
  }
})

module.exports = Channel = mongoose.model('Channel', ChannelSchema)
