const express = require("express");

const bodyParser = require("body-parser");
const app = express()
app.use('/images' ,express.static("images"));

app.get("/", function(req, res){
   res. render("index.ejs");
});
app. listen(3000, function (){
  console. log("Server started on port 3000");
});
