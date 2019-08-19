import React from 'react';
import MasterPage from 'app/components/master-page';
import EmployeesPage from './pages/employee-overview';
import Employees from './pages/employees';

import { BrowserRouter, Route } from 'react-router-dom';

import './index.scss';

class App extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <MasterPage>
                    <Route path="/"
                        component={Employees}
                        exact
                    />
                    <Route path="/employees" component={Employees} />
                    <Route path="/employee/id/overview" component={EmployeesPage} />
                </MasterPage>
            </BrowserRouter>
        );
    }
}

export default App;
