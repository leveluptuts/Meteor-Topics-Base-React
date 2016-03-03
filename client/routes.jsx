import React from 'react';
import {mount} from 'react-mounter';
import {HomeLayout} from './layouts/HomeLayout.jsx';
import {AppLayout} from './layouts/AppLayout.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';

// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        mount(HomeLayout, {
            content: () => (<Home />)
        });
    }
});

// Dashboard Page
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        mount(AppLayout, {
            content: () => (<Dashboard />)
        });
    }
});
