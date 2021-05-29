const express=require("express");
const bodyparser=require("body-parser");

const app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/public/html/home.html");
})

app.get("/vaccine_info",function(req,res){
  res.sendFile(__dirname+"/public/html/vaccine_info.html");
})

app.get("/notify",function(req,res){
  res.sendFile(__dirname+"/public/html/vaccinenotify.html");
})

app.get("/contactus",function(req,res){
  res.sendFile(__dirname+"/public/html/contact.html");
})

app.get("/subscribe",function(req,res){
  res.sendFile(__dirname+"/public/html/subscribe.html");
})

app.get("/unsubscribe",function(req,res){
  res.sendFile(__dirname+"/public/html/unsubscribe.html");
})

app.get("/unsubscribe_success",function(req,res){
  res.sendFile(__dirname+"/public/html/successfully_unsubs.html");
})


app.listen(3000,function(req,res){
  console.log("server is working on port 3000");
})
