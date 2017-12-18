import React from 'react';

const Post = (props) => {
    return (
        <div class="blog-post">
            <h2 class="blog-post-title">{props.title}</h2>
            <p class="blog-post-meta">{props.date} by <a href="#">{props.author}</a></p>

            {props.content}
        </div>
    )
}

export default Post;