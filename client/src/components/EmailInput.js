import React, { Component } from "react";

class EmailInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: "",
      email: "",
      complete: false,
      btnValue: "Next",
      addedValues: []
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          className="StripeElement"
          placeholder="Enter your email..."
          onFocus={this.handleFocus}
        />
      </div>
    );
  }
}
export default EmailInput;
