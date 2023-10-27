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
    }catch(error){
        console.log(error);
        return res.status(500).json({error})
    }
}

const readPosts = async (req, res ) => {
    const { userID } = req.params;

    try{
        const posts = await Posts.find({ user: userID });
        if(posts.length === 0) return res.status(404).json({msg: "No se han encontrado publicaciones"}); 
        return res.status(200).json({ posts })
    }catch(error){
        console.log(error);
        return res.status(500).json({error})
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
    }catch(error){
        console.log(error)
        return res.status(500).json({msg: error})
    }
}

const deletePost = async (req, res) => {
    const { fecha } = req.body; // Obtén la fecha del cuerpo de la solicitud en formato "27/10/2023"
    try {

        if (!fecha) {
            return res.status(400).json({ msg: "Debes proporcionar la fecha para eliminar el post." });
        }

        const post = await Posts.find({createdAt: fecha })
                
        if (!post) return res.status(404).json({ msg: "No se encontró el post." });

        await Posts.deleteOne({createdAt: fecha });

        return res.status(200).json({ msg: "Post eliminado exitosamente" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
}


export default {
    createPost,
    readPosts,
    updatePost,
    deletePost
}