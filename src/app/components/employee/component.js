import React from 'react';
import PropTypes from 'prop-types';
import iconTest from 'icons/Beaviss.png';
import './index.scss';

const baseClassName = 'employee';

class Employee extends React.PureComponent {
    getClassNames = () => {
        return {
            component: baseClassName,
            link: `${baseClassName}__link`,
            icon: `${baseClassName}__icon`,
            name: `${baseClassName}__name`,
            position: `${baseClassName}__position`
        };
    };

    render() {
        const { person } = this.props;
        const classNames = this.getClassNames();

        return (
            <div className={classNames.component}>
                <a className={classNames.link} href="#">
                    <div className={classNames.icon}>
                        <img src={iconTest} alt=""/>
                    </div>
                    <div className={classNames.name}>
                        {person.name}
                    </div>
                    <div className={classNames.position}>
                        {person.position}
                    </div>
                </a>
            </div>
        );
    }
}

Employee.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string,
        position: PropTypes.string
    })
};

export default Employee;
