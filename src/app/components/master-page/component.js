import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

import iconMenu from 'icons/menu.png';

const baseClassName = 'page';
const baseClassNameHeader = 'header';

class MasterPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    getClassNames = () => {
        return {
            component: baseClassName,
            content: `${baseClassName}__content`,
            footer: `${baseClassName}__footer`,
            header: `${baseClassNameHeader}`,
            headerButton: `${baseClassNameHeader}__button`
        };
    };

    render() {
        const classNames = this.getClassNames();

        const headerOutput = this.renderHeader();
        const footerOutput = this.renderFooter();

        return (
            <>
                {headerOutput}
                <div className={classNames.component}>
                    <div className={classNames.content}>
                        {this.props.children}
                    </div>
                    {footerOutput}
                </div>
            </>
        );
    }

    renderFooter = () => {
        const classNames = this.getClassNames();

        return (
            <div className={classNames.footer}>
                Hi! Here will be a footer...
            </div>
        );
    };

    renderHeader = () => {
        const classNames = this.getClassNames();

        return (
            <div className={classNames.header}>
                <button className={classNames.headerButton}>
                    <img src={iconMenu} alt=""/>
                </button>
            </div>
        );
    }
}

export default MasterPage;
