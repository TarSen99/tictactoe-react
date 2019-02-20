import React from 'react';
import X from './../img/x-3.png';
import O from './../img/o-3.png';

export default class Cell extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    const signSourceWay = `${this.props.sign === 'X' ? X
      : this.props.sign === 'O' ? O
        : ''
    }`;

    return (
      <div
        className="cell"
        style={{
          width: this.props.size,
          height: this.props.size,
          margin: this.props.spacing / 2,
        }}
        onClick={() => this.props.handleCellClick(this.props.id)}
      >
        <img
          className="cell__img"
          src={signSourceWay}
          alt=""
        />
      </div>
    );
  }
}