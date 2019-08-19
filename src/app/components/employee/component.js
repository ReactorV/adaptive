import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import utils from 'app/common/utils';
import iconTest from 'icons/Beaviss.png';

import './index.scss';

const baseClassName = 'employee';

class Employee extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            active: false
        };
    }

    getClassNames = () => {
        /* const componentClassName = utils.getClassName(
             baseClassName,
             [`${baseClassName}--active`, this.active]
         );*/

        return {
            component: baseClassName,
            link: `${baseClassName}__link`,
            linkActive: `${baseClassName}__link-active`,
            icon: `${baseClassName}__icon`,
            name: `${baseClassName}__name`,
            position: `${baseClassName}__position`
        };
    };

    render() {
        const { active } = this.state;
        const { person } = this.props;

        const classNames = this.getClassNames();

        let linkClassName = classNames.link;

        if (active) {
            linkClassName = classNames.linkActive;
        }

        return (
            <div className={classNames.component}>
                <Link className={linkClassName} to="/employee/id/overview"
                    onClick={this.handleClick}>
                    <div className={classNames.icon}>
                        <img src={iconTest} alt=""/>
                    </div>
                    <div className={classNames.name}>
                        {person.name}
                    </div>
                    <div className={classNames.position}>
                        {person.position}
                    </div>
                </Link>
            </div>
        );
    }

    handleClick = () => {
        const { active } = this.state;

        this.setState({
            active: !active
        });
    }
}

Employee.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string,
        position: PropTypes.string
    })
};

export default Employee;
