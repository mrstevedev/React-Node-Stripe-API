import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Header from './Header';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: '',
      email: '',
      complete: false, 
      value: 'Next'
    };
    this.submit = this.submit.bind(this);
  }
  async submit(event) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    console.log("token", token);

    let response = await fetch("http://localhost:5000/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    }).catch(err => console.log(err));
    console.log(response);
    if (response.ok) console.log("Purchase Complete!");
    // if (response.ok) this.setState({complete: true});
  }
  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <React.Fragment>
        <div className="checkout">
          <Header />          
          <CardElement />
          <button className="btn" onClick={event => this.submit(event)}>
            <span className="btn-text">{this.state.value}</span>{" "}
            <i className="fas fa-long-arrow-alt-right" />
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default injectStripe(Form);
