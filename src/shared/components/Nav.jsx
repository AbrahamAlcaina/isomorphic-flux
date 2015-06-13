
import React from 'react';
import { NavLink } from 'fluxible-router';

class Nav extends React.Component {
    render() {
        const selected = this.props.selected;
        const links = this.props.links;

        const linkHTML = Object.keys(links).map(function (name) {
            var className = '';
            var link = links[name];

            if (selected === name) {
                className = 'pure-menu-selected';
            }

            return (
                <li className={className} key={link.path}>
                    <NavLink routeName={link.page} activeStyle={{backgroundColor: '#eee'}}>{link.title}</NavLink>
                </li>
            );
        });

        return (
            <div className="fi-nav">
                <ul className="pure-menu pure-menu-horizontal">
                    {linkHTML}
                </ul>
            </div>
        );
    }
}

Nav.defaultProps = {
    selected: 'home',
    links: {}
};

module.exports = Nav;
