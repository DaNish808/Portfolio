import React, { PureComponent } from 'react';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className="Header">
        <h1>
          <span className="main-header">BANYAN TREE</span>
          <span className="sub-header">WEB DEVELOPMENT SERVICES</span>
        </h1>
      </header>
    );
  }
}

export { Header };

