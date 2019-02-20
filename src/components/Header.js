import React from 'react';

export default class Header extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(event) {
    let { value } = event.target;

    value = parseInt(value);

    if(isNaN(value)) {
      value = '';
    }

    this.setState({
      inputValue: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.handleSubmit(+this.state.inputValue);
  }

  render() {
    const signSourceWay = `
    ${this.props.currentSign === 'X' ? '../img/x-3.png' :
      this.props.currentSign === 'O' ? '../img/o-3.png' :
        ''
      }`;

    return (
      <div className="header">
        <input
          value={this.state.inputValue}
          placeholder="size"
          onChange={this.handleChangeInput}
          className="header__input"
        />

        <button
          onClick={this.handleSubmit}
          className="header__button"
        >
          Generate / Restart game
        </button>
        <div className="header__text">
          Player
          <img src={signSourceWay} alt="" />
          {this.props.gameOver ? 'Won!' : 'is moving'}
        </div>
      </div>
    );
  }
}