import React, { Component } from 'react';
import PropTypes from 'prop-types';

const items = [
  {project: 'ReactJS', stars: 10},
  {project: 'VueJS', stars: 9},
  {project: 'Angular', stars: 8},
];

class Suggest extends Component {
  state = {
    value: '',
  }
  static defaultProps = {
    items,
  }
  static propTypes = {
    items: PropTypes.array.isRequired,
  }
  onChange = ({ target: { value } }) => {
    this.setState(() => ({
      value,
    }));
  }

  onSubmit = (event) => event.preventDefault();

  render() {
    const { value } = this.state;
    const { items } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={value}
        />
        <p>{value}</p>
        <p>{items.map((item) => (
          <p key={item.name}>{item.name}</p>
        ))}</p>
      </form>
    );
  }
}
export default Suggest;