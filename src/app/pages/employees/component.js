import React from 'react';
import PropTypes from 'prop-types';
import EmployeesOverview from 'app/pages/employees/overview';
import EmployeesSearch from 'app/pages/employees/search';
import EmployeesList from 'app/pages/employees/list';

class EmployeesPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="employees-page">
                <EmployeesOverview />
                <EmployeesSearch />
                <EmployeesList />
            </div>
        );
    }
}

export default EmployeesPage;
