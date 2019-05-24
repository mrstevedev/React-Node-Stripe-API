import React, { Component } from "react";
import { Spring, config } from 'react-spring/renderprops';

class LeftDescription extends Component {
 constructor(props) {
   super(props);
   this.state = {
     leftItemsText: [
       'Puchase a <span className="reactjs-txt">Reactjs</span> course for $19.99',
       'Please enter your name',
       'Please enter your email'
      ]
   }
 }
  render() {
    return (
      <React.Fragment>
        <Spring
          items={this.state.leftItemsText}
          from={{ right: -225, position: 'absolute', zIndex: '-1', opacity: 0 }}
          to={{ right: 0, position: 'absolute', zIndex: '-1', opacity: 1 }}
          config={ config.molasses }
          onRest={() => {
            
          }}
          >
          {props => <div style={props}>
            <p>Puchase a <span className="reactjs-txt">Reactjs</span> course for $19.99</p>
          </div>}
        </Spring>
      </React.Fragment>
    );
  }
}
export default LeftDescription;
