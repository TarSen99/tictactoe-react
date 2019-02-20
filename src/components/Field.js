import React from 'react';
import Cell from './Cell';

export default class Field extends React.Component {
  constructor(props) {
    super(props);

  }

  getCellSize() {
    const cellSizes = this.props.cellSizes;
    const currFieldSize = this.props.size;

    for(let key in cellSizes) {
      if(!cellSizes.hasOwnProperty(key)) {
        return;
      }

      if(+key >= currFieldSize) {
        return {
          cellSize: cellSizes[key]['size'],
          cellSpacing: cellSizes[key]['between'],
        };
      }
    }
  }

  render() {
    const {cellSize, cellSpacing} = this.getCellSize();
    const fieldWidth = this.props.size * (cellSize + cellSpacing);

    return (
      <div
        className="field"
        style={{
          width: fieldWidth,
        }}
      >
        {this.props.cells.map((cell) => {
          return (
            <Cell
              size={cellSize}
              spacing={cellSpacing}
              sign={cell.sign}
              key={cell.id}
              id={cell.id}
              handleCellClick={this.props.handleCellClick}
            />
          );
        })}

      </div>
    );
  }
}