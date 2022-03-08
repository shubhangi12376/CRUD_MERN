
//calling
const express = require("express")

const cors = require("cors")

const mongoose = require("mongoose");
const { use } = require("express/lib/application");

//configuration
const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


// Database connection
mongoose.connect("mongodb://localhost:27017/crudapp" , {

    useNewUrlParser : true,
    useUnifiedTopology : true
} , () => {
    console.log("DB connected")
})


//schema
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

//Modal
const User = new mongoose.model("User" , userSchema)


//Routes
app.post("/login" , (req,res) => {
    const { email , password} = req.body

    User.findOne({ email : email}, (err , user) => {
        if(user){
            if(password===user.password)
            {
                res.send( {message :"logged in" , user : user} )
            }else{
                res.send({message : "Password not match"})
            }
        }else{
            res.send({ message : "User not registered."})
        }
    })
})

app.post("/register" , (req,res) => {
   const { name , email , password} = req.body

  User.findOne( { email:email } , (err,user) => {
    if(user){
        res.send({message : "User already registered."})
    } else{
        const user = new User({
            name,
            email,
            password
        })
     
     user.save( err => {
            if(err){
                res.send(err)
            } else {
                res.send ( {message: "Successfully Registered " })
            }
        })
        
    }
  })
})

app.listen(3005 , () => {
    console.log("at port 3005")
})