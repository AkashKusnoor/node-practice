 const express = require('express');
 const app = express();
 app.get("/",(req,res) =>{
    return res.send("This is your server");
 });
 app.listen(8001,()=>{
    console.log("Server is running or port 8001");
 });