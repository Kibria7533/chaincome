const express =require('express');
const app=express();
const bp=require('body-parser');
const cor=require('cors');
const path = require("path");
const mongoose=require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true});

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{
    console.log('database connected');
})


app.use(bp.json());
app.use(cor());
app.use(require('./routes/users'));

if (process.env.NODE_ENV === "production") {

    // Set static folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
  

app.listen(5000,()=>{
console.log('server is running at 5000')
});