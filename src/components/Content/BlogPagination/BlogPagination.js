import React from 'react';

const BlogPagination = () => {
    return (
        <nav class="blog-pagination">
            <a class="btn btn-outline-primary" href="#">Older</a>
            <a class="btn btn-outline-secondary disabled" href="#">Newer</a>
        </nav>
    )
}

export default BlogPagination;