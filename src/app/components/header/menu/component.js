import React from 'react';

import './index.scss';

class Menu extends React.PureComponent {
    render() {
        return (
            <nav className="menu">
                <a className="menu__link" href="#">Employers</a>
                <a className="menu__link" href="#">Files</a>
                <a className="menu__link" href="#">Recruiting</a>
                <a className="menu__link" href="#">Overview</a>
            </nav>
        );
    }
}

export default Menu;
