const express= require('express')
const body_parser=require('body-parser')
const app= express();
const date=require(__dirname+"/date.js")
const mongoose=require('mongoose');
const Db  = require('mongodb');
const title  = require('process');
const _loadash = require('lodash')
mongoose.connect("mongodb://localhost:27017/todoDB",{useNewUrlParser: true})
let date_module=date.getDate()
let text1= ""
let work_items=[]
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set("view engine",'ejs')

const itemsSchema={
    name:String,
    
}

const itemsSchema1={
    name:String,
    items:[itemsSchema]
}


const Item= mongoose.model("Item",itemsSchema);
const List= mongoose.model("List",itemsSchema1)

const item1= new Item({
    name:"WELCOME TO YOUR TO DO LIST"
})

const item2= new Item({
    name:"HIT + BUTTON TO ADD A NEW ITEM"
})

const item3= new Item({
    name:"HIT -- BUTTON TO DELETE AN ITEM"
})

const defaultItems=[item1,item2,item3];

/*Item.insertMany(defaultItems,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("docs added")
    }
});*/


let currentDay="Today"
app.get("/",(req,res)=>{
    let currentDay="Today";
    Item.find({},(err,findItems)=>{
        if(findItems.length==0){
            Item.insertMany(defaultItems,(err)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log("docs added")
                }
            });
        res.redirect("/")
        }
        else{
        res.render("list",{Title:currentDay,items_list:findItems})}
    
    
});
    

})


app.post("/",(req,res)=>{
    const itemss=req.body.todo_text;
    const listTitle=req.body.btn_name;
    console.log(listTitle)
    
    const item= new Item({
        name: itemss
        
    })
    if(listTitle=="Today"){
        item.save();
        res.redirect("/") 
    }
    else{
        List.findOne({name:listTitle},function(err,foundList){
            foundList.items.push(item)
            foundList.save()
            res.redirect("/"+ listTitle);
        })}
        
    })
app.post("/delete",(req,res)=>{

const checkedId= req.body.checkbox
const titleName=req.body.listTitle;
console.log(titleName)
if(titleName=="Today"){
console.log(checkedId)
Item.findByIdAndRemove(checkedId,()=>{console.log("deleted")});//require a callback
res.redirect("/")}

else{
    List.findOneAndUpdate({name:titleName},{$pull:{items:{_id:checkedId}}},(err,foundItem)=>{
        if(err){
            console.log(err)
        }
        else{
            res.redirect("/"+titleName)
        }
    })
}
})




 //Express ROUTING PARAMETERS....

 app.get("/:customListName",function(req,res){
     const customlist=_loadash.capitalize(req.params.customListName);
     List.findOne({name:customlist},function(err,foundList){
         if(!err){
             if(!foundList){

                const list1= new List({
                    name:customlist,
                    items:defaultItems
                })

            list1.save()
            res.redirect("/"+customlist)}
            

            else{res.render("list",{items_list:foundList.items,Title:foundList.name})
        }}
         
    })
     
 })


console.log(process.env.PORT);
app.listen(3001,()=>{console.log("the port is running on server 3001")}
)

