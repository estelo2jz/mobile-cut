import React, { Component } from 'react';
import Showcase from './props/showcase';
import Boxes from './props/boxes';
import Portfolio from './props/portfolio';
import Info from './props/info';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div>
          <Showcase />
        </div>
         <div>
          <Boxes />
        </div>
        <div>
          <Info />
        </div>
        <div>
          {/* <Portfolio /> */}
        </div>
      </div>
    )
  }
}

export default Layout;