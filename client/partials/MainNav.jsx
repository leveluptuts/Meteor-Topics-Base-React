import React, {Component} from 'react';

export default class MainNav extends Component {
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                </ul>
            </nav>
        )
    }
}

