require('dotenv').config()
import express form 'express'

const app=express()
app.use(express.json())


mongoose.connect(MONGO_URL)
const db=mongoose.connection()

db.on('error',(error: any)=>{
    console.log(error);
    })
db.once('connected',()=>{
    console.log("We are In")
 })
app.listen(PORT,()=>{
    console.log(`server runnning on ${HOST}:${PORT}`)
})