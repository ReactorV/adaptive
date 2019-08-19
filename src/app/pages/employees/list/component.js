import React from 'react';
import PropTypes from 'prop-types';

import Employee from 'app/components/employee';

import './index.scss';

const baseClassName = 'employees-list';

class EmployeesList extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    getClassNames = () => {
        return {
            component: baseClassName,
            category: `${baseClassName}__category`
        };
    };

    render() {
        const classNames = this.getClassNames();

        let cardsOutput = this.renderCards();

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
        const { employees } = this.props;

        return employees.map((employee, index) => {
            return (
                <Employee person={employee} key={index}/>
            );
        });
    };
}

EmployeesList.propTypes = {
    employees: PropTypes.array
};

export default EmployeesList;
