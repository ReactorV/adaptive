import React from 'react';
import CardList from 'src/app/components/card-list';

import './index.scss';

class CardBlock extends React.PureComponent {
    render() {
        return (
            <div className='card-block'>
                <CardList />
                <CardList />
                <CardList />
            </div>
        );
    }
}

export default CardBlock;
