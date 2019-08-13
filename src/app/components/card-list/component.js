import React from 'react';

import './index.scss';
import Card from '../card';

class CardList extends React.PureComponent {
    render() {
        return (
            <div className='card-list'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        );
    }
}

export default CardList;
