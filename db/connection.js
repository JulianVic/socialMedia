import mongoose from "mongoose";

const URL = "localhost:27017"

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