import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Field from './components/Field';

class App extends Component {
  constructor(props) {
    super(props);

    const InitialFieldSize = 3;
    const minFieldSize = 3;
    const maxFieldSize = 12;

    this.state = {
      fieldSize: InitialFieldSize,
      minFieldSize: minFieldSize,
      maxFieldSize: maxFieldSize,
      cells: this.getCells(InitialFieldSize),
      cellSizes:  this.getCellSizes(),
      currentSign: 'X',
      wonSign: null,
      pointsToWin: this.getPointsToWin(InitialFieldSize),
      gameOver: false,
      freeCells: InitialFieldSize * InitialFieldSize,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCellClick = this.handleCellClick.bind(this);
  }

  getCells(size) {
    return Array(size * size).fill(null)
      .map((cell, index) => {
        return {
          id: index,
          sign: '',
          x: index % size,
          y: Math.floor(index / size),
        }
      });
  }

  getCellSizes() {
    return {
      3: {
        size: 100,
        between: 10,
      },

      5: {
        size: 80,
        between: 8,
      },

      7: {
        size: 70,
        between: 6,
      },

      10: {
        size: 60,
        between: 4,
      },

      12: {
        size: 45,
        between: 4,
      },
    };
  }

  getPointsToWin(fieldSize) {
    if(fieldSize === 3) {
      return 3;
    } else if(fieldSize === 4) {
      return 4;
    } else {
      return 5;
    }
  }

  //startX, startY - pos where user clicked
  //key - direction of checking
  //key = -1 --- move front, 1 -- move back
  //currentPoints -- summ of current points on checking line
  //if moveOnX = 1 we move on X axis
  //if moveOnY = 1 we move on Y axis
  //if both not equal to 0, we move on some diagonal (main/opposite)
  checkLine(startX, startY, key, moveOnX, moveOnY, currentSign, currentPoints = 0) {
    for(let i = 0; i < this.state.fieldSize; i++) {
      const currentPos = {
        x: startX - (i * moveOnX) * key,
        y: startY - (i * moveOnY) * key,
      };

      let currCell = this.state.cells.find(cell => {
        return cell.x === currentPos.x && cell.y === currentPos.y;
      });

      if(!currCell) {
        break;
      }

      if(currCell.sign === currentSign) {
        currentPoints++;
      } else {
        break;
      }

      if(currentPoints === this.state.pointsToWin) {
        return true;
      }
    }

    //if we haven't found win combination on front direction
    //move back and try to find there
    //currentPoints - 1 cause we start from (startX, startY) two times
    if(key === -1) {
      let backResult = this.checkLine(
        startX, startY, 1, moveOnX, moveOnY, currentSign, currentPoints - 1
      );

      if(backResult) {
        return true;
      }
    }
    return false;
  }

  processMatches({ x, y }, currentSign) {
    let key = -1;
    let moves = [[1, 0], [0, 1], [1,1], [-1, 1]];

    for(let move of moves) {
      const result = this.checkLine(x, y, key, move[0], move[1], currentSign);

      if(result) {
        return true;
      }
    }

    return false;
  }

  endGame(freeCells, currentSign) {
    this.setState({
      gameOver: true,
      freeCells: freeCells,
      wonSign: currentSign ? currentSign : null
    });
  }

  handleCellClick(id) {
    if(this.state.gameOver) {
      return;
    }

    let clickedCell = this.state.cells.find(cell => cell.id === id);

    if(clickedCell.sign !== '') {
      return;
    }

    const currentSign = this.state.currentSign;
    const freeCells = this.state.freeCells - 1;
    clickedCell.sign = currentSign;

    let result = this.processMatches({
      x: clickedCell.x,
      y: clickedCell.y,
    }, currentSign);

    if(result) {
      this.endGame(freeCells, currentSign);
    } else if(freeCells === 0) {
      this.endGame(freeCells);
    }

    this.setState(oldState => {
      if(!result) {
        return {
          currentSign: oldState.currentSign === 'X' ? 'O' : 'X',
          freeCells: freeCells,
        }
      }

      return {
        currentSign: oldState.currentSign,
      }
    });
  }

  handleSubmit(value) {
    let fieldSize = Math.max(value, this.state.minFieldSize);
    fieldSize = Math.min(fieldSize, this.state.maxFieldSize);

    this.setState({
      fieldSize: fieldSize,
      cells: this.getCells(fieldSize),
      pointsToWin: this.getPointsToWin(fieldSize),
      currentSign: 'X',
      wonSign: null,
      gameOver: false,
      freeCells: fieldSize * fieldSize,
    });
  }

  render() {
    return (
      <div className="app">
        <Header
          currentSign={this.state.currentSign}
          handleSubmit={this.handleSubmit}
          gameOver={this.state.gameOver}
          freeCells={this.state.freeCells}
          wonSign={this.state.wonSign}
        />

        <Field
          size={this.state.fieldSize}
          cellSizes={this.state.cellSizes}
          cells={this.state.cells}
          handleCellClick={this.handleCellClick}
        />
      </div>
    );
  }
}

export default App;
