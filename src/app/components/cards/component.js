import React from 'react';
import Card from 'app/components/card';
import persons from 'app/common/data';

import './index.scss';

class Cards extends React.PureComponent {
    render() {
        const cardsOutput = this.renderCards();

        return (
            <div className='cards'>
                <div className='cards__category__top-managers'>
                    {cardsOutput}
                </div>
                <div className='cards__category__line-managers'>
                    {cardsOutput}
                </div>
                <div className='cards__category__department'>
                    {cardsOutput}
                </div>
            </div>
        );
    }

    renderCards = () => {
        return persons.map((person) => {
            let output;

            if (person) {
                output = <Card person={person} key={person.id}/>;
            }

            return output;
        });
    }
}

export default Cards;
