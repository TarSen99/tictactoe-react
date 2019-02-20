import React from 'react';
import Cell from './Cell';

export default function Field(props) {
  const getCellSize = () => {
    const cellSizes = props.cellSizes;
    const currFieldSize = props.size;

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
  };

  const {cellSize, cellSpacing} = getCellSize();
  const fieldWidth = props.size * (cellSize + cellSpacing);

  return (
    <div
      className="field"
      style={{
        width: fieldWidth,
      }}
    >
      {props.cells.map((cell) => {
        return (
          <Cell
            size={cellSize}
            spacing={cellSpacing}
            sign={cell.sign}
            key={cell.id}
            id={cell.id}
            handleCellClick={props.handleCellClick}
          />
        );
      })}
    </div>
  );
}