import React from 'react';
import Menu from 'app/components/header/menu';

import './index.scss';

import button from '/icons/menu.png';

class Header extends React.PureComponent {
    render() {
        return (
            <div className="header">
                <button className="header__button">
                    <img src={button} alt=""/>
                </button>
            </div>
        );
    }
}

export default Header;
