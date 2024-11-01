//Require express
const express = require ("express");

//app object
const app = express();

//main page
app.get("/", function(req,res) {
        res.send ("Welcome to my first Node.js web site.");
});

//contact page
app.get("/contact", function(req,res) {
        res.send ("My name is Yusuf Tunkara, and I can be reached at tunkar04@email.franklin.edu");
});


//bio page
app.get("/bio", function(req,res) {
        res.send ("About me: I currently live in Columbus, OH but I've lived and worked in several different states. However, nothing compares to New York (Columbus does not even come close!). I enjoy traveling and reading.  ");
});

app.listen(8002)

