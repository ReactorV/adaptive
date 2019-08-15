import React from 'react';
import Header from 'app/components/header';
import Overview from 'app/components/overview';
import Search from 'app/components/search';
import Cards from 'app/components/cards';

import './index.scss';

class App extends React.PureComponent {
    render() {
        return (
            <div className="app">
                <Header />
                <main>
                    <Overview />
                    <Search />
                    <Cards />
                </main>
            </div>
        );
    }
}

export default App;
