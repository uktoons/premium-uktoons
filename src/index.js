const express=require("express")
const app=express()
const path=require('path')
const hbs=require("hbs")
const collection=require("./mongodb")

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));
const templatePath = path.join(__dirname, '../templates');
app.set('views', templatePath);
app.set('view engine', 'hbs');
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.render("login")
})

app.get('/login', (req, res) => {
    res.render('login');
});
app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async (req,res)=>{
const data={
    name:req.body.name,
    password:req.body.password,
    email:req.body.email
}
await collection1.insertMany([data])
res.render("home")
})

app.post("/login",async (req,res)=>{
    
   try{
    const check=await collection.findOne({name:req.body.name})

    if(check.password===req.body.password){
        res.render("home")
    }
  else{
    res.send("wrong password")
  }
   }
   catch (error) {
   res.send("sorry this user credential doesn't exist")
   }
    })

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    