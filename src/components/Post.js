import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-top">
        <h3 className="post_title">{post.title}</h3>
        <p className="post_body">{post.body}</p>
      </div>
      <div className="post-bottom">
        <div className="author-name">By John Doe</div>
        <button>Read more...</button>
      </div>
    </div>
  );
};

export default Post;
