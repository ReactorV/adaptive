import React from 'react';
import MasterPage from 'app/components/master-page';
import EmployeeOverviewPage from './pages/employee-overview';
import EmployeesPage from './pages/employees';
import HomePage from './pages/home';

import { BrowserRouter, Route } from 'react-router-dom';

import './index.scss';

class App extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <MasterPage>
                    <Route exact
                           path="/"
                           component={HomePage}
                    />
                    <Route path="/employees" component={EmployeesPage} />
                    <Route path="/employee/:id/overview" 
                            render={({ match }) => {
                                const { id } = match.params;
                                return <EmployeeOverviewPage itemId={id}/>
                            }}/>
                </MasterPage>
            </BrowserRouter>
        );
    }
}

export default App;
