const express = require("express");
const app = express();

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const port = 8000;

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

const methodOver = require("method-override");
app.use(methodOver("_method"));

app.use(express.urlencoded({extended : true}));
const mongoose = require("mongoose");

const Task = require("./models/task.js");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Todo");
}
main()
.then((res)=>{
    console.log("DB connect successfully");
}).catch((e)=>{
    console.log("failed connection",e);
})



//post data
app.post("/main", (req,res) =>{
    let {name, description} = req.body;
    

    let newTask = new Task({

        name : name,
        description : description
        
    });
    newTask.save()
    .then((res) =>{
        console.log("data saved");
    }).catch((e)=>{
        console.log("data not saved");
    })

    res.redirect("/main");

})

//display tasks

app.get("/alltasks", async (req,res)=>{
    let tasks = await Task.find();
    res.render("show",{tasks});
})

//delete task
app.delete("/alltasks/:id", async(req,res)=>{
    let {id} = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/alltasks");
})

//update task

app.put("/alltasks/:id", async(req, res)=>{
    let {id} = req.params;
    let completed = req.body.completed === "on";
    await Task.findByIdAndUpdate(id, {completed});
    res.redirect("/alltasks");
})


//main page
app.get("/main", (req, res)=>{
    res.render("main");
})

app.listen(port, (req,res) =>{
    console.log(`app is listening on port ${port}`);
})