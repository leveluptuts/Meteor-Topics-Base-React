import React, {component} from 'react';

export default class AppNav extends React.Component {
    render() {
        return (
            <div className="app-nav">
                <ul>
                    <li><a href="/"><i className="fa fa-dashboard"></i> <span>Dashboard</span></a></li>
                    <li><a href="/"><i className="fa fa-users"></i> <span>Users Management</span></a></li>
                </ul>
            </div>
        )
    }
}