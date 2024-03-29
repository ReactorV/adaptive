import React from 'react';
import PropTypes from 'prop-types';

import EmployeesOverview from 'app/pages/employee-overview/overview';
import EmployeesSearch from 'app/pages/employee-overview/search';
import EmployeesList from 'app/pages/employee-overview/list';
import Preloader from 'app/components/preloader';
import persons from 'app/common/data';

import './index.scss';

const baseClassName = 'employees-page';

class EmployeeOverviewPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            employees: []
        };
    }

    componentDidMount() {
        this.loadEmployee();
    }

    getClassNames = () => {
        return {
            component: baseClassName
        };
    };

    render() {
        const { loading, employees } = this.state;
        const { itemId } = this.props;

        if (loading) {
            return (
                <Preloader />
            );
        }

        const classNames = this.getClassNames();

        return (
            <div className={classNames.component}>
                <EmployeesOverview />
                <EmployeesSearch />
                <EmployeesList
                    employees={employees}
                    itemId={itemId}
                />
            </div>
        );
    }

    loadEmployee() {
        setTimeout(() => {
            this.setState({
                loading: false,
                employees: persons
            });
        }, 1000);
    }
}

EmployeeOverviewPage.propTypes = {
    itemId: PropTypes.string
};

export default EmployeeOverviewPage;
