import mongoose from "mongoose";

const URL = "mongodb://127.0.0.1:27017/"

const cxn = async () => {
    try{
        await mongoose.connect(URL);
        console.log("Conectando a DB");
    } catch(e){
        console.log(e)
    }
}

export{
    cxn
}