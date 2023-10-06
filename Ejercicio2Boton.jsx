import React from 'react';

class ButtonAndTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Presioname</button>
        <p>Se ha presionado el botón {this.state.count} veces.</p>
      </div>
    );
  }
}

export default ButtonAndTextField;