import React, {Component} from 'react';
import HeaderNav from './HeaderNav/HeaderNav'

class Header extends Component {
    render() {
        return (
            <header>
                <HeaderNav/>

                <div class="blog-header">
                    <div class="container">
                        <h1 class="blog-title">The Bootstrap Blog</h1>
                        <p class="lead blog-description">An example blog template built with Bootstrap.</p>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;