import Posts from "../models/postsSchema.js";

const createPost = async(req, res) => {
    const { userID } = req.params;
    try{
        const posteo = {
            title: "Linux quiebra",
            content: "Hace no mucho linux quebró",
            user: userID
        }
        
        const post = await Posts.create(posteo);
        
        await post.save();
        return res.status(200).json({post})
    }catch(e){
        console.log(e);
        return res.status(500).json({e})
    }
}

const readPosts = async (req, res ) => {
    const { userID } = req.params;

    try{
        const posts = await Posts.find({ user: userID });
        if(posts.length === 0) return res.status(404).json({msg: "No se han encontrado publicaciones"}); 
        return res.status(200).json({ posts })
    }catch(e){
        console.log(e);
        return res.status(500).json({e})
    }
}

const updatePost = async (req, res) => {
    const { postID } = req.params;

    try{
        const newPost = {
            title: "Linux ha recuperado el mercado!",
            content: "Hace no mucho linux recuperó el mercado",
        }

        const post = await Posts.findById(postID);
        if(!post) return res.status(404).json({msg: "Publicación no encontrada"})
        post.title = newPost.title;
        post.content = newPost.content;
        await post.save();
        return res.status(200).json({msg: "Editado correctamente"})
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}

const deletePost = async (req, res) => {
    const { postID } = req.params;

    try{

        const post = await Posts.findById(postID);
        if(!post) return res.status(404).json({msg: "Publicación no encontrada"})
        await Posts.findByIdAndDelete(postID);
        return res.status(200).json({msg: "Eliminado correctamente"})
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}

export default {
    createPost,
    readPosts,
    updatePost,
    deletePost
}