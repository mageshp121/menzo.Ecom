const mongoose=require("mongoose");
const category = require('../models/categorySchema')
const dotenv = require('dotenv')
dotenv.config()
console.log(process.env.MONGO_URL,"ghg");
const connectDB=mongoose.connect(process.env.MONGO_URL)
connectDB.then(()=>{
  console.log("db connected");
  category.createIndexes();
})
.catch((err)=>{
  console.log(err.message,"message");
})
//  const dbConnect = async () => {
//   try{
//       await mongoose.connect(`mongodb+srv://mageshp121:GOr3405iW6iEvGKl@cluster0.9oqio66.mongodb.net/Lapitout`)
//       .then(()=>console.log("DB connected"))
//       .catch((err)=>console.log("db connection error",err))
//   }
//   catch(err){
//       throw new Error('mongodb connection error')
//     }
// }
// module.exports = dbConnect