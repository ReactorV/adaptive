import React from 'react';
import PropTypes from 'prop-types';
import Overview from 'app/components/overview';
import Search from 'app/components/search';
import Cards from 'app/components/cards';

class CardsPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cards-page">
                <Overview />
                <Search />
                <Cards />
            </div>
        );
    }
}

export default CardsPage;
