var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  username: {type:String, default:''},
  body: {type:String, default:''},
  timestamp: {type:Date, default:Date.now}
})

module.export = mongoose.model('CommentSchema', CommentSchema)
