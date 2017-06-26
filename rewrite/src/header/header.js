import React, { Component } from 'react';
import logo from '../logo.svg';
import './header.css';
import CTA from '../cta/cta';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <img src={ logo } className="logo" alt="Typos Magazine Logo" aria-label="Typos Magazine Logo" />
                <h2 className="subheading">The magazine for interesting people</h2>
                <CTA link="previews/issue-05-preview.pdf" text="Preview current issue" />
            </header>
        );
    }
}
