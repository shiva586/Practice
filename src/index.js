// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DB_NAME } from './constant.js';
import express from 'express';
import connectDB from './db/index.js';
import { app } from './app.js';


dotenv.config({
    path:'./env'
});

connectDB()
.then(()=>app.listen(process.env.PORT || 8000))
.catch((error)=>console.log("ERR DB",error))



// (async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`);
//        app.on("error",(error)=>{
//         console.log("error in express",error)
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log("the port running on 8000...")
//        })
//     } catch(error){
//      console.log("error", error);
//      throw error
//     }
   
// })()