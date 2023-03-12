import "./Post.css"
import { Users } from "../../userData";
import { useState } from "react";

export default function Post({post}) {

    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    {/* "Users.filter(u=>u.id === post.userId)[0].profilePicture" This filters data from Users.id positioned at [0] (first property id:) of the Users array in userdata.js and extracts profilePicture img data associated with the id key. */}
                    <img className="postProfileImg"src={Users.filter(u=>u.id === post.userId)[0].profilePicture } alt="" />
                    {/* "Users.filter(u=>u.id === post.userId)[0].username"  
                    This filter extracts username data associated with the id key */}
                    <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight"></div>
            </div>
            <div className="postCenter">
                {/* posts?.desc is used incase there is no post description*/}
                <span className="postText">{post?.desc}</span>
                {/* post?.desc is used incase there is no img in the post data. */}
                <img className="postImg" src={post?.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{Math.floor(Math.random() * (100 - 1 + 1)) + 1} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
