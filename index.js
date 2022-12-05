const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    // res.cookie('test', 'oktoken');
    res.send("You are connected to Contact page")
})

// app.listen(5000,()=>{
//     console.log("server running");
// })

app.listen(process.env.PORT||8080,()=>{
    console.log("server running");
})