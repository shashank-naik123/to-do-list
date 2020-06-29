const express = require("express")
const bodyParser = require("body-parser")

const app = express();
var tasks=["Start Online lecture","Have food","Create wireframe for the project"];

app.use(express.static("public"))
app.set('view engine', "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", function(req, res) {

  var today = new Date()

  var options ={weekday:"long",
 month: 'long',
 day: 'numeric'}

 var day = today.toLocaleDateString("en-US",options)


  res.render("list", {
    dayName: day,
    task:tasks
  })
})

app.post("/",function(req,res){
  var taskToDo=req.body.task
  tasks.push(taskToDo);
  res.redirect("/")
})

app.listen(3000, function() {
  console.log("server is running on port 3000")
})
