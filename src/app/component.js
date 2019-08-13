import React from 'react';
import Header from 'app/components/header';
import Overview from 'app/components/overview';
import Search from 'app/components/search';
import CardBlock from 'app/components/card-block';

import './index.scss';

class App extends React.PureComponent {
    render() {
        return (
            <div className='app'>
                <Header />
                <Overview />
                <Search />
                <CardBlock />
            </div>
        );
    }
}

export default App;
