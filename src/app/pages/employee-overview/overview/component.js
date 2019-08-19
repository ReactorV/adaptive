import React from 'react';

import './index.scss';

const baseClassName = 'employees-overview';

class EmployeesOverview extends React.PureComponent {
    getClassNames = () => {
        return {
            component: baseClassName
        };
    };

    render() {
        const classNames = this.getClassNames();

        return (
            <div className={classNames.component}>
                Company Overview
            </div>
        );
    }
}

export default EmployeesOverview;
