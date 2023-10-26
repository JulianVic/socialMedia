import Posts from "../models/postsSchema";

const createPost = async(req, res) => {
    const { userID } = req.params;
    try{
        const post = {
            title: "Linux quiebra",
            content: "Hace no mucho linux quebró",
            user: userID
        }
        const Post = await Posts.create({post})
        return res.status(200).json({Post})
    }catch(e){
        console.log(e);
        return res.status(500).json({e})
    }
}

const getPosts = async (req, res ) => {

}

export default {
    createPost
}