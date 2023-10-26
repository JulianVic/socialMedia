import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    }
})

const Posts = mongoose.model("Posts", postsSchema);

export default Posts