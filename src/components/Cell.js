import React from 'react';

export default class Cell extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    const signSourceWay = `${this.props.sign === 'X' ? '../img/x-3.png'
      : this.props.sign === 'O' ? '../img/o-3.png'
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