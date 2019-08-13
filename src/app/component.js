import React from 'react';
import Header from 'src/app/components/header';
import Overview from 'src/app/components/overview';
import Search from 'src/app/components/search';
import CardBlock from 'src/app/components/card-block';

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
