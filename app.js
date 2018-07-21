const express     = require("express"),
      app         = express(),
      bodyParser  = require("body-parser")
      mongoose    = require("mongoose")



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");

var conn = mongoose.createConnection('mongodb://pabloshampoo:whatthea1@ds147451.mlab.com:47451/alpacadamia_blog');


var Blog = conn.model('Blog', new mongoose.Schema({
    title : String, 
    image : String,
    body: String,
    created:{type: Date, default: Date.now}
    }
 ));



app.get( "/",function(req,res){
    res.render("products")

})

app.get( "/blog",function(req,res){
    Blog.find({}, function(err,blogs){
        if(err){
            console.log("error")
        }else{
            res.render("blog",{blogs:blogs})
        }
    })
    

})

app.get( "/notes",function(req,res){
    res.render("notes")

})

app.get( "/lessons",function(req,res){
    res.render("lessons")

})

app.get( "/contact",function(req,res){
    res.render("contact")

})

app.get( "/about",function(req,res){
    res.render("about")

})



app.listen(process.env.PORT || 5000, () => console.log("server is spining"))

    


