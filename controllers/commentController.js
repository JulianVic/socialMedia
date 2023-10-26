import Comments from '../models/commentsSchema.js';

const createComment = async (req, res) => {
    const { userID } = req.params;
    const { postID } = req.body;

    try{
        const comment = {
            content: "Es cierto, yo pude experimentarlo",
            post: postID,
            user: userID
        }

        const comments = await Comments.create(comment)
        return res.status(200).json({comments})

    }catch(e){
        console.log(e);
        return res.status(500).json({e})
    }
}

const readComments = async (req, res ) => {
    const { postID } = req.params;

    try{
        const comments = await Comments.find({post:postID});
        if(comments.length === 0) return res.status(404).json({msg: "Se el primero en comentar!"}); 
        return res.status(200).json({ comments })
    }catch(e){
        console.log(e);
        return res.status(500).json({e})
    }
}

const updateComment = async (req, res) => {
    const {commentID} = req.params;

    try{

        const newComment = {
            content: "Mate, eso nunca pasó"
        }

        const comment = await Comments.findById(commentID);
        if(!comment) return res.status(500).json({
            msg: "Comment not found"
        });
        
        comment.content = newComment.content;

        await comment.save();

        return res.status(200).json({
            msg: "Successful",
            comment
        })

    }catch(e) {
        console.log(e);
        return res.status(500).json({
            msg: e
        });
    }
}

const deleteComment = async (req,res) => {
    const { commentID } = req.params;

    try{

        const comment = await Comments.findById(commentID);
        if(!comment) return res.status(404).json({
            msg: "Comment not found"
        });

        await Comments.findByIdAndDelete(commentID);

        return res.status(200).json({
            msg: "Successful"
        })

    }catch(e) {
        console.log(e);
        return res.status(500).json({
            msg: "There's an Error",
            e
        })
    }
}

export default {
    createComment,
    readComments,
    updateComment,
    deleteComment
}