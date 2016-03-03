import React, {component} from 'react';

class MainNav extends React.Component {
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

export default MainNav;