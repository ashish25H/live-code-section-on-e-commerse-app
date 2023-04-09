import mongoose from "mongoose";
import app from './app.js';
import config from "./config/index.js";

(async()=>{
    try{
       await mongoose.connect(config.MONGODB_URL);
       console.log(`DB connected`);

       app.on('error', (err)=>{
        console.error("ERROR: ", err);
        throw err;
       })

       const onListening = ()=>{
        console.log(`Listening on PORT ${config.PORT}`)
       }

       app.listen(config.PORT, onListening);
       
    }catch(err){
        console.log("Error: ",err);
        throw err;
    }
})();