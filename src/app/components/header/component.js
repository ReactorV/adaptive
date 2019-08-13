import React from 'react';
import Menu from 'app/components/header/menu';

import './index.scss';

class Header extends React.PureComponent {
    render() {
        return (
            <div className='header'>
                <Menu />
            </div>
        );
    }
}

export default Header;
