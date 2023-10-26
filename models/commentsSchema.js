import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
    content: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
})

const Comments = mongoose.model("Comments", commentsSchema);
export default Comments;