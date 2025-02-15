import React, { useEffect, useState } from "react";
import AddComment from "../AddComment/AddComment";
import Comment from "../comment/Comment";
import Button from "../Button/Button";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import Likes from '../Likes/Likes';
// import { createGlobalStyle } from "styled-components";

const Post = ({ post, onPostAdded }) => {
  
  const postPropsForLike = { _id: post._id, type: "post"}

  const [showComments, setShowComments] = useState(false);  

  return (
 
    <div className="postbox postflex">
      
      <Avatar
        className="post-avatar"
        alt="Remy Sharp"
        src={ post.avatar }
        sx={{ width: 56, height: 56 }}
      />

      <article data-cy="post" key={post._id}>
          <p className="post-text">{post.message}</p>
        <div className="author-and-likes">
          <div className="likes">
            <Likes likes={ post.likes } parent={postPropsForLike} />
          </div>
          { <p className="time-text">
            Posted at {post.createdAt.slice(11, 16)} on{" "}
            {post.createdAt.slice(0, 10)} by {post.author}
          </p>}
          
        </div>
        
        
        <div className="break-line"></div>
        <Button
          margin={showComments ? "15px" : "0"}
          color={showComments ? "#f99e92" : "#a8eb71"}
          text={showComments ? "Hide Comments" : "Show Comments"}
          onClick={() => setShowComments(!showComments)}
          id="show-comments-button"
        />
        {showComments && (
          <>
            {post.comments.map((comment, index) => (
            <Comment comment={comment} key={index} />
            ))}
          </>
        )}  
        <div className="add-comment">
          <AddComment post={post} onPostAdded={onPostAdded}/>
        </div>  
      </article> 
    </div>
  );
};

export default Post;
