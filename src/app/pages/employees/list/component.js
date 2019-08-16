import React from 'react';
import Employee from 'app/components/employee';
import persons from 'app/common/data';
import Preloader from 'app/components/preloader';

import './index.scss';

const baseClassName = 'employees-list';

class EmployeesList extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            employees: []
        };
    }

    componentDidMount() {
        this.loadEmployee();
    }

    getClassNames = () => {
        return {
            component: baseClassName,
            category: `${baseClassName}__category`
        };
    };

    render() {
        const { loading } = this.state;

        const classNames = this.getClassNames();

        this.loadEmployee(persons);
        let cardsOutput;

        if (loading) {
            cardsOutput = this.renderCards();
        } else {
            cardsOutput = this.renderPreloader();
        }

        return (
            <div className={classNames.component}>
                <div className={classNames.category}>
                    {cardsOutput}
                </div>
                <div className={classNames.category}>
                    {cardsOutput}
                </div>
                <div className={classNames.category}>
                    {cardsOutput}
                </div>
            </div>
        );
    }

    renderCards = () => {
        const { employees } = this.state;
        let output;

        if (Array.isArray(employees)) {
            output = employees.map((employee, index) => {
                return (
                    <Employee person={employee} key={index}/>
                );
            });
        }

        return output;
    };

    renderPreloader = () => {
        return (
            <Preloader />
        );
    };

    loadEmployee(data) {
        setTimeout(() => {
            this.setState({
                loading: true,
                employees: data
            });
        }, 1000);
    }
}

export default EmployeesList;
