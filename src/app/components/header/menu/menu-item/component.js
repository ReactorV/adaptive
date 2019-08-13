import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class MenuItem extends React.PureComponent {
    render() {
        const { text } = this.props;

        return (
            <div className='menu-item'>
                {text}
            </div>
        );
    }
}

MenuItem.propTypes = {
    text: PropTypes.string
};

export default MenuItem;
