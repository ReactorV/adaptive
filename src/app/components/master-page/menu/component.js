import React from 'react';

import './index.scss';

const baseClassName = 'menu';

class Menu extends React.PureComponent {
    getClassNames = () => {
        return {
            component: baseClassName,
            link: `${baseClassName}__link`
        };
    };

    render() {
        const classNames = this.getClassNames();

        return (
            <nav className={classNames.component}>
                <a className={classNames.link} href="#">Employers</a>
                <a className={classNames.link} href="#">Files</a>
                <a className={classNames.link} href="#">Recruiting</a>
                <a className={classNames.link} href="#">Overview</a>
            </nav>
        );
    }
}

export default Menu;
