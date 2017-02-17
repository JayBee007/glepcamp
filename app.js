var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/gelp_camp");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");

// var campgrounds =[
//     {name:"Salmon Creek", image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
//     {name:"Sparrow Hills", image:"https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg"},
//     {name:"Rock Mountain", image:"https://farm9.staticflickr.com/8161/7360193870_cc7945dfea.jpg"},
//     {name:"Salmon Creek", image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
//     {name:"Sparrow Hills", image:"https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg"},
//     {name:"Rock Mountain", image:"https://farm9.staticflickr.com/8161/7360193870_cc7945dfea.jpg"},
//     {name:"Salmon Creek", image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
//     {name:"Sparrow Hills", image:"https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg"},
//     {name:"Rock Mountain", image:"https://farm9.staticflickr.com/8161/7360193870_cc7945dfea.jpg"},
//     {name:"Salmon Creek", image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
//     {name:"Sparrow Hills", image:"https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg"},
//     {name:"Rock Mountain", image:"https://farm9.staticflickr.com/8161/7360193870_cc7945dfea.jpg"}

//   ];

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);



app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, result) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("campgrounds", {
                campgrounds: result
            });
        }
    });


});

app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {
        name: name,
        image: image
    };
    Campground.create(newCampground, function(err, item) {
        if (err) {
            console.log(err);
        }
        else {
            // redirect back to campground page
            res.redirect("/campgrounds");
        }
    });


});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The GelpCamp server has started....");
});