
import React from 'react';
import { NavLink } from 'fluxible-router';

class Nav extends React.Component {
    render() {
        const selected = this.props.selected;
        const links = this.props.links;

        const linkHTML = Object.keys(links).map(function (name) {
            let className = 'center ';
            let link = links[name];

            if (selected === link.path) {
                className += 'active';
            }
            return (
                <li className={className} key={link.path} >
                    <NavLink routeName={link.page} preserveScrollPosition={true}>{link.title}</NavLink>
                </li>
            );
        });

        return (
            <nav className="fi-nav nav-wrapper navbar-fixed teal">
                <ul>
                    {linkHTML}
                </ul>
            </nav>
        );
    }
}

Nav.defaultProps = {
    selected: 'home',
    links: {}
};

export default Nav;
