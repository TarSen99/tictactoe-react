import React from 'react';
import X from './../img/x-3.png';
import O from './../img/o-3.png';

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
    ${this.props.currentSign === 'X' ? X :
      this.props.currentSign === 'O' ? O :
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
        <div className="header__text-block">
          {this.props.gameOver ?
            this.props.wonSign ?
              <div className="header__moves-text">
                Player
                <img src={signSourceWay} alt=""
                />
                Won!
              </div>
              : <span>It's a draw!</span>
            : <div className="header__moves-text">
              <span>Player</span>
              <img src={signSourceWay} alt="" />
              <span>is moving</span>
            </div>
          }
        </div>
      </div>
    );
  }
}