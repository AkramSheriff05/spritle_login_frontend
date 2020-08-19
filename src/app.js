const bodyparser=require('body-parser')
const path=require('path')
const express=require('express')
const {welcomeMail}=require('./mail/credentials')
const USER=require('./db/mongoose')
const app=express()
const host=process.env.PORT||7000

const pathway=path.join(__dirname,'../public')


app.set('view engine','hbs')
 app.use(express.static(pathway))
app.use(bodyparser.urlencoded({extended:false}))
 app.use(express.json())

app.post('/signup_in',async(req,res)=>{
    const user= new USER(req.body)
    
    try{
        console.log(user)
   await user.save()
   welcomeMail(user.email,user.firstname)
   return res.redirect('/login')
    }catch(e){
return res.status(400).render('signup')
    }

})
app.post('/login_in',async(req,res)=>{
    try {
        const user = await USER.findByCredentials(req.body.email, req.body.password)
        console.log(req.body.email,req.body.password)
       
        res.render('scroll')
    } catch (e) {
        res.status(400).render('login')
       
    }
})



 app.get('',(req,res)=>{
     res.render('index')
 })

 app.get('/signup',(req,res)=>{
res.render('signup')

})


app.get('/login',(req,res)=>{
    res.render('login')
})


app.listen(host,()=>{
    console.log("server is up 7000")
})