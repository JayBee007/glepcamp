var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("landing");     
});

app.get("/campgrounds", function(req,res){
   var campgrounds =[
    {name:"Salmon Creek", image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
    {name:"Sparrow Hills", image:"https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg"},
    {name:"Rock Mountain", image:"https://farm9.staticflickr.com/8161/7360193870_cc7945dfea.jpg"}
   ];
   
   res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("The GelpCamp server has started...."); 
});