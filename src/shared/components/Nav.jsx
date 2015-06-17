
import React from 'react';
import { NavLink } from 'fluxible-router';

class Nav extends React.Component {
    render() {
        const selected = this.props.selected;
        const links = this.props.links;

        const linkHTML = Object.keys(links).map(function (name) {
            var className = 'center ';
            var link = links[name];

            if (selected === link.path) {
                className += 'active';
            }
            console.log(links,  selected, name, className);
            return (
                <li className={className} key={link.path} >
                    <NavLink routeName={link.page}>{link.title}</NavLink>
                </li>
            );
        });

        return (
            <nav className="fi-nav nav-wrapper navbar-fixed teal">
                <ul className="" >
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
