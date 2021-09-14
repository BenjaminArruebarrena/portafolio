const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
   titulo:{
        type:String,
        required:true 
   },
   
   url:{
       type: String,
       required:true
   },
   descricao:{
       type: String,
       required: true
   } 
})

modules.exports = mongoose.model('PostModel', postSchema)