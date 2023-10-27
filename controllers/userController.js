import Users from "../models/usersSchema.js";

const createUser = async(req, res) => {
    const { name, email } = req.body;
    try{
        const user = new Users({ name, email });
        await user.save();
        return res.status(201).json({msg: "User created"})
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

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try{
        const user = await Users.findById(id);
        if(!user) return res.status(404).json({msg: "User not found"});
        await Users.findByIdAndDelete(id);
        return res.status(200).json({msg: "User deleted"});
    }catch(e){
        console.log(e);
        return res.status(500).json({e})
    }
}


export default {
    createUser,
    readUsers,
    searchUser,
    deleteUser
}