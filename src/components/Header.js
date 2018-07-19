import React from 'react';

import '../../assets/styles/style.scss';


const Header = props => (
  <navbar className="header">
    <h1>
      {props.title}
    </h1>
  </navbar>
);

export default Header;
