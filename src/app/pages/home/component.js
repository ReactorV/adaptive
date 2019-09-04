import React from 'react';

import { Link } from 'react-router-dom';

import './index.scss';

class HomePage extends React.PureComponent {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <Link to="/employees">
        <h2>
          Home page
        </h2>
      </Link> 
    );
  }
}

export default HomePage;
