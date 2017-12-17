import React, {Component} from 'react';

class BlogPagination extends Component {
    render() {
        return (
            <nav class="blog-pagination">
                <a class="btn btn-outline-primary" href="#">Older</a>
                <a class="btn btn-outline-secondary disabled" href="#">Newer</a>
            </nav>
        )
    }
}

export default BlogPagination;