import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    name: String,
    email: String
});

const Users = mongoose.model( "Users", usersSchema );

export default Users;