import React, { Component } from "react";
import "./App.css";
import { Elements, StripeProvider } from "react-stripe-elements";
import Form from "./components/Form";
import Header from "./components/Header";
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
              <div className="checkout">
                <Header />
                <Elements>
                  <Form />
                </Elements>
              </div>
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
