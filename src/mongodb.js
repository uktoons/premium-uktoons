const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://uktoonspro:Iamuktoons,081976@uktoons.9ru0ng2.mongodb.net/?retryWrites=true&w=majority&appName=uktoons/ukweb")

.then(()=>{
    console.log("uk data base connected");
})
.catch(()=>{
    console.log("failed");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
       
    }
})

const collection=new mongoose.model("collection1",LogInSchema)

module.exports=collection