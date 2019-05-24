import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import NextButton from './NextButton';
import SubmitButton from './SubmitButton';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: '',
      email: '',
      complete: false, 
      btnValue: 'Next',
      addedValues: []
    };
    this.onSubmit = this.onSubmit.bind(this);
    console.log(this.state);
  }

  // Proceed to next step 
  nextStep = (e) => {
    console.log('nextStep Ran');
    const  { step } = this.state;
    this.setState({
      step: step + 1
    }, () => {
      console.log(this.state);
    });
  }

  handleChange = (e, input) => {
    // console.log({input: e.target.value});
    this.setState({ input: e.target.value });
  }

  onSubmit = async(event) => {
    console.log('onSubmit Ran');
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    
    console.log("token", token);

    let response = await fetch("http://localhost:5000/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    }).catch(err => console.log(err));
    console.log(response);
    if (response.ok) console.log("Purchase Complete!");
    if (response.ok) this.setState({complete: true});
  }

  handleFocus = (event) => {
    console.log('handleFocus Ran');
  }

  render() {
    const { step, firstName, email, btnValue } = this.state;
    const values = { firstName, email };

    switch(step) {
      case 1:
        return (
          <React.Fragment>
            <NameInput              
              firstName={firstName}
              handleChange={this.handleChange}
              values={values}
          />
            <NextButton
              step={step}
              btnValue={btnValue}
              nextStep={this.nextStep}
              values={values}
            />
          </React.Fragment>
        );
       case 2:
         return (
          <React.Fragment>
            <EmailInput
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              handleFocus={this.handleFocus}
              values={values}
            />
            <NextButton
              step={step}
              btnValue={btnValue}
              nextStep={this.nextStep}
              values={values}
            /> 
          </React.Fragment>
       );
       case 3:
         return (
          <React.Fragment>
           <CardElement />
            <SubmitButton
              step={step}
              btnValue={btnValue}
              onSubmit={this.onSubmit}
          />
        </React.Fragment>
       );
       default:
    }

    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}
export default injectStripe(Form);
