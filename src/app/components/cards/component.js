import React from 'react';
import Card from 'app/components/card';
import persons from 'app/common/data';

import './index.scss';

const baseClassName = 'cards';

class Cards extends React.PureComponent {
    getClassNames = () => {
        return {
            component: baseClassName,
            topManagers: `${baseClassName}__top-managers`,
            lineManagers: `${baseClassName}__line-managers`,
            department: `${baseClassName}__department`
        };
    };

    render() {
        const classNames = this.getClassNames();
        const cardsOutput = this.renderCards();

        return (
            <div className={classNames.component}>
                <div className={classNames.topManagers}>
                    {cardsOutput}
                </div>
                <div className={classNames.lineManagers}>
                    {cardsOutput}
                </div>
                <div className={classNames.department}>
                    {cardsOutput}
                </div>
            </div>
        );
    }

    renderCards = () => {
        let output;

        if (Array.isArray(persons)) {
            output = persons.map((person, index) => {
                return <Card person={person}
                    key={index}/>;
            });
        }

        return output;
    }
}

export default Cards;
