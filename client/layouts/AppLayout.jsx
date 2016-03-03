import React from 'react';
import Header from '../partials/Header.jsx';
import AppNav from '../partials/AppNav.jsx';

export const AppLayout = ({content}) => (
    <div>
        <Header />
        <AppNav />
        <main className="app-layout">
            {content()}
        </main>
        <footer className="site-footer">
        </footer>
    </div>
)