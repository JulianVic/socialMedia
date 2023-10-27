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

const deleteCommentByDate = async (req,res) => {
    const { fecha } = req.body; // Obtén la fecha del cuerpo de la solicitud en formato "27/10/2023"
    try {

        if (!fecha) {
            return res.status(400).json({ msg: "Debes proporcionar la fecha para eliminar el post." });
        }

        const comment = await Comments.find({createdAt: fecha })

                
        if (!comment) return res.status(404).json({ msg: "No se encontró el comentario." });


        await Comments.deleteOne({createdAt: fecha });
        
        return res.status(200).json({ msg: "Comment eliminado exitosamente" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
}

const deleteCommentByPost = async (req, res) => {
    const { postID } = req.params;
    try {
        if (!postID) {
            return res.status(400).json({ msg: "Debes proporcionar el ID del post para eliminar los comentarios." });
        }

        const comments = await Comments.find({post: postID })

        if (!comments) return res.status(404).json({ msg: "No se encontraron comentarios." });

        await Comments.deleteMany({post: postID });

        return res.status(200).json({ msg: "Comentarios eliminados exitosamente" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
}

export default {
    createComment,
    readComments,
    updateComment,
    deleteCommentByDate,
    deleteCommentByPost
}