import React, { Component } from 'react';

class Suggest extends Component {
  state = {
    value: '',
  }
  onChange = ({ target: { value } }) => {
    this.setState(() => ({
      value,
    }));
  }
  onSubmit = (event) => event.preventDefault();
  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={value}
        />
        <p>{value}</p>
      </form>
    );
  }
}
export default Suggest;