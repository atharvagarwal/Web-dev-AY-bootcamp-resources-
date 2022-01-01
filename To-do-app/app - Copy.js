const express= require('express')
const body_parser=require('body-parser')
const app= express();
const date=require(__dirname+"/date.js")
let date_module=date.getDate()
let text1= ""
let work_items=[]
let items=[]
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set("view engine",'ejs')



app.get("/",(req,res)=>{
    let currentDay=date_module;
    res.render("list",{Title:currentDay,items_list:items});
    

})


app.post("/",(req,res)=>{
    let text1= req.body.todo_text
    let btn_text=req.body.btn_text
    if (btn_text==="WORK"){
    work_items.push(text1)
res.redirect("/work")
}


else{
        items.push(text1)
        res.redirect("/")
    }

})

app.get("/about", (req,res)=>{
    res.render("about")
})

app.get("/work",(req,res)=>{
    const work_list="WORK"
     res.render("list",{Title:work_list,items_list:work_items});
     
 })



console.log(process.env.PORT);
app.listen(3001,()=>{console.log("the port is running on server 3001")}
)

