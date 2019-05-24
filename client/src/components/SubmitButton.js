import React, { Component } from "react";

class SubmitButton extends Component{
  constructor(props) {
    super(props);
    this.state = {
      step: this.props.step,
      btnValue: this.props.btnValue
    }
    console.log('state in Button', this.state);
  }

  render() {
    const { step, btnValue } = this.state;
    return (
      <React.Fragment>
        <button className="btn" onClick={event => this.props.onSubmit(event)}>
          <span className="btn-text">Submit</span>{" "}
          <i className="fas fa-long-arrow-alt-right" />
        </button>
      </React.Fragment>
    );
  }
}
export default SubmitButton;