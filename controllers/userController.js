import Users from "../models/usersSchema.js";

const createUser = async(req, res) => {
    const { name, email } = req.body;
    try{
        
        const user = await Users.create({name: name, email: email})
        return res.status(200).json({user})
    }catch(e){
        console.log(e);
        return res.status(500).json({e})
    }
}

const readUsers = async (req, res ) => {
    try{
        const users = await Users.find();
        if(users.length === 0) return res.status(404).json({msg: "No se han encontrado usuarios"}); 
        return res.status(200).json({ users })
    }catch(e){
        console.log(e);
        return res.status(500).json({e})
    }
}

const searchUser = async (req, res) => {
    const { email } = req.body;

    try{

        const user = await Users.findOne({ email: email })
        if(!user) return res.status(404).json({
            msg: "User not found"
        })
        return res.status(200).json(user);

    }catch(e){
        console.log(e);
        return res.status(500).json({
            msg: e
        })
    }
}


export default {
    createUser,
    readUsers,
    searchUser
}