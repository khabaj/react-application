import React, {Component} from 'react';

class Post extends Component {
    render() {
        return (
            <div class="blog-post">
                <h2 class="blog-post-title">{this.props.title}</h2>
                <p class="blog-post-meta">{this.props.date} by <a href="#">{this.props.author}</a></p>

                {this.props.content}
            </div>
        )
    }
}

export default Post;