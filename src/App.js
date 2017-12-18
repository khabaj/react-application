import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Header from './components/Header/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default App;
