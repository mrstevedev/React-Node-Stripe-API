import React, { Component } from "react";
import animate from "animate.css";

class TestCard extends Component {
  handleClick = e => {
    e.target.parentNode.classList.add("bounceIn", "animated");
    const anchor = document.querySelector('.animated');
    const copyText = document.getElementById('cardlink');

    document.execCommand('copy');
    console.log('Copied text to clipboard');
    
    setTimeout(() => {
    anchor.classList.remove('bounceIn', 'animated');
    }, 1000);
  };
  render() {
    return (
      <div className="test-card">
        <p>
          <a id="cardlink" href="#" onClick={this.handleClick}>
            eg. 4242 4242 4242 4242
          </a>
        </p>
      </div>
    );
  }
}
export default TestCard;
