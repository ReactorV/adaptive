import React from 'react';
import MenuItem from 'app/components/header/menu/menu-item';

import './index.scss';

class Menu extends React.PureComponent {
    render() {
        const employers = 'Employers';
        const files = 'Files';
        const recruiting = 'Recruiting';
        const overview = 'Overview';

        return (
            <div className='menu'>
                <MenuItem text={employers}/>
                <MenuItem text={files}/>
                <MenuItem text={recruiting}/>
                <MenuItem text={overview}/>
            </div>
        );
    }
}

export default Menu;
