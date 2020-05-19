import React from 'react';
import './_thing.scss';

class Thing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stuff: true }
  }
  
  handleClick = e => {
    this.setState({ stuff: !this.state.stuff });
    console.log(this.state.stuff);
  }

  render() {
    return (
      <section className="thing">
        <p>Current Val: {this.state.stuff.toString()}</p>
        <button onClick={this.handleClick}>Click to Change</button>
      </section>
    )
  }
}

export default Thing;
