import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import Footer from 'app/components/footer';

import './index.scss';

class MasterPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        /*const outputRender = this.renderFooter();*/

        return (
            <>
                <Header />
                <div className="page">
                    <div className="page-content">
                        {this.props.children}
                    </div>
                    <Footer />
                </div>
            </>
        );
    }

    /*renderFooter() => {
        return (

        );
    }*/

}

export default MasterPage;
