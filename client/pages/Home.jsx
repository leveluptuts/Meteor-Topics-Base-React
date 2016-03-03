import React, {Component} from 'react';
import Header from '../partials/Header.jsx';

export default class Home extends Component {
    render() {
        return (
            <div className="billboard">
                <h2>Topics In Meteor</h2>
                <h3>By Level Up Tutorials</h3>
                <div className="btn-group">
                    <a href="#" className="btn">Example Button</a>
                    <a href="#" className="btn-text">Example Button</a>
                </div>
            </div>
        )
    }
}