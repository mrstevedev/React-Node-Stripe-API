import React, { Component } from "react";

class NameInput extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="StripeElement"
          placeholder="Enter your name..."
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default NameInput;
