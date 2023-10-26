import mongoose, { mongo } from "mongoose";

const commentsSchema = mongoose.Schema({
    content: String,
    createdAt: Date,
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Posts
    }
})

const Comments = mongoose.model("Comments", commentsSchema);
export default Comments;