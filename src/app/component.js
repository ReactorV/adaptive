import React from 'react';
import MasterPage from 'app/components/master-page';
import CardsPage from './pages/employees';

import './index.scss';

class App extends React.PureComponent {
    render() {
        return (
            <MasterPage>
                <CardsPage />
            </MasterPage>
        );
    }
}

export default App;
