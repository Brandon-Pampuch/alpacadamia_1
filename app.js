const express     = require("express"),
      app         = express(),
      bodyParser  = require("body-parser")


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.set("view engine","ejs");

app.get( "/",function(req,res){
    res.render("products")

})

app.get( "/blog",function(req,res){
    res.render("blog")

})

app.get( "/notes",function(req,res){
    res.render("notes")

})

app.get( "/contact",function(req,res){
    res.render("contact")

})

app.get( "/about",function(req,res){
    res.render("about")

})



app.listen(process.env.PORT || 5000, () => console.log("server is spining"))

    


