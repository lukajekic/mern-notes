import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
await mongoose.connect(process.env.MONGO_URI)
console.log('Mongodb OK')
    } 
    catch(error){
console.error('MongoDB error')
process.exit(1)
    }
}