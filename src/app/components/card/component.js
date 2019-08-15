import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class Card extends React.PureComponent {
    render() {
        const { person } = this.props;

        return (
            <div className='card'>
                <div className='card__icon'>
                    <a href="">
                        <img src="" alt=""/>
                    </a>
                </div>
                <div className='card__name'>
                    {person.name}
                </div>
                <div className='card__position'>
                    {person.position}
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    person: PropTypes.object
};

export default Card;
