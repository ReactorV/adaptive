import React from 'react';

import './index.scss';

const baseClassName = 'employees-search';

class EmployeesSearch extends React.PureComponent {
    getClassNames = () => {
        return {
            component: baseClassName
        };
    };

    render() {
        const classNames = this.getClassNames();

        return (
            <div className={classNames.component}>
                Search employee
            </div>
        );
    }
}

export default EmployeesSearch;
