import React from 'react';
import X from './../img/x-3.png';
import O from './../img/o-3.png';

export default function Cell(props) {
  const signSourceWay = `${props.sign === 'X' ? X
    : props.sign === 'O' ? O : ''
    }`;

  return (
    <div
      className="cell"
      style={{
        width: props.size,
        height: props.size,
        margin: props.spacing / 2,
      }}
      onClick={() => props.handleCellClick(props.id)}
    >
      <img
        className="cell__img"
        src={signSourceWay}
        alt=""
      />
    </div>
  );
}