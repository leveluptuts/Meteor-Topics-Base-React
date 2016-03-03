import React, {Component} from 'react';
import MainNav from './MainNav.jsx';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="site-title"><a href="/">
                    <img alt="Level Up Tutorials Logo" src="/logo.svg" width="150" />
                </a></h1>
                <MainNav />
            </header>
        )
    }
}