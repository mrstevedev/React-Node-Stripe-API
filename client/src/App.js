import React, { Component } from "react";
import "./App.css";
import { Elements, StripeProvider } from "react-stripe-elements";
import Form from "./components/Form";
import About from "./components/About";
import Footer from "./components/Footer";
import LeftDescription from "./components/LeftDescription";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <StripeProvider apiKey="pk_test_Z7E8xalw4kfYFt3aEPFcxNVJ">
            <div className="example">
              <div className="left">
                <LeftDescription />
              </div>
              <Elements>
                <Form />
              </Elements>
              <About />
            </div>
          </StripeProvider>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
