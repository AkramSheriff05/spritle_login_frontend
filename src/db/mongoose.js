const mongoose=require('mongoose')



mongoose.connect("mongodb://127.0.0.1:27017/spritle",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true ,
    useFindAndModify:false

})
const UserSchema=new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    dob:{
        type:Date,
        required:true
    },
    phone:{
type:Number,
required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
        
    }
})
UserSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email})


    if (!user) {
        throw new Error('Unable to login')
    }
if(password!=user.password){
      throw new Error('Unable to login')
}
else{
   return user
}
}



const User = mongoose.model('User', UserSchema)

module.exports=User

// const me=new User({
//     name:'akram',
//     age:'20',
//     email:'akrammanandko@gmail.com',
//     password:'akramm'
// })

// me.save().then(()=>{
//     console.log(me)

// }).catch((e)=>{
// console.log(e)
// })

