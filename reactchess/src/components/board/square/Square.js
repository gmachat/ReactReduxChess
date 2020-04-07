import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  selectPiece,
  clearSelection,
  selectMove,
  gameAlert,
  clearAlert,
  takePiece,
  hoveredPiece,
  clearHover,
  changePlayer,
  updateScore,
  startTime,
  castle
} from '../../../store/actions';
import { conditionals } from './conditionals';
import { addScore } from '../../../utils/addScore/addScore';

const Square = ({
  initialColor,
  selected,
  row,
  column,
  board,
  selectPiece,
  clearSelection,
  selectedSquare,
  selectedPiece,
  hoveredPiece,
  clearHover,
  selectMove,
  gameAlert,
  clearAlert,
  takePiece,
  currentPlayer,
  changePlayer,
  takenWhitePieces,
  takenBlackPieces,
  updateScore,
  turnCount,
  startTime,
  startingTime,
  castle
}) => {
  const piece = board[row][column] ? board[row][column] : null;
  const onClick = event => {
    clearAlert();
    const targetSquare =
      board[event.target.dataset.row][event.target.dataset.column];
    const conditional = conditionals(
      selectedSquare,
      targetSquare,
      selectedPiece,
      row,
      column,
      board,
      currentPlayer
    );

    if (conditional.clickedOnEmptySelf) {
      clearSelection(event.target);
      clearHover();
    } else if (conditional.squareIsSelected) {
      if (conditional.squareAndTargetEmpty) {
        clearSelection(event.target);
        selectMove(event.target, startingTime);
        clearHover();
      } else if (conditional.castling) {
        castle(
          [event.target.dataset.row, event.target.dataset.column],
          startingTime,
          currentPlayer
        );
        clearSelection(event.target);
        clearHover();
        gameAlert({
          message: `${currentPlayer} castles his king!`,
          color: 'green'
        });
        changePlayer(currentPlayer);
      } else if (conditional.targetEmpty) {
        if (conditional.canBeMoved) {
          selectMove(event.target, startingTime);
          turnCount === 1 && startTime(Date.now());
          changePlayer(currentPlayer);
        } else {
          gameAlert({
            message: 'You can not place your piece here!',
            color: 'red'
          });
        }
        clearSelection(event.target);
        clearHover();
      } else if (conditional.selectNewPiece) {
        selectPiece(event.target);
      } else if (conditional.sameSquareAsAlly) {
        gameAlert({
          message: `You can not place your piece here! The ${targetSquare.name} is an ally!`,
          color: 'red'
        });
        setTimeout(clearAlert, 4000);
        clearSelection(event.target);
        clearHover();
      } else if (conditional.clickedOnEnemySquare) {
        const defender = targetSquare;
        if (conditional.canBeTaken) {
          updateScore(
            addScore(
              {
                selectedSquare,
                selectedPiece,
                board,
                takenWhitePieces,
                takenBlackPieces
              },
              { row, column }
            )
          );
          takePiece(event.target, selectedPiece, startingTime);
          changePlayer(currentPlayer);
          gameAlert({
            message: `${selectedPiece.name} takes ${defender.name}`,
            color: 'green'
          });
          setTimeout(clearAlert, 4000);
        } else {
          gameAlert({
            message: `You cannot attack the ${defender.name} from here!`,
            color: 'red'
          });
        }
        setTimeout(clearAlert, 4000);
        clearSelection(event.target);
        hoveredPiece(event.target);
      }
    } else if (selectedSquare && conditional.selectFirstSquare) {
      selectPiece(event.target);
      clearHover();
    }
  };

  const onMouseOver = event => {
    hoveredPiece(event.target);
  };

  const onMouseOut = event => {
    clearHover();
  };

  if (selectedSquare) {
    const selectedSquareCoords = `${selectedSquare[0]}${selectedSquare[1]}`;
    selected = selectedSquareCoords === `${row}${column}` && !selected;
  }
  let squareClass = `board-square ${initialColor}`;
  squareClass = selected ? `${squareClass} selected` : squareClass;
  return (
    <td
      className={`${squareClass} ${piece && piece.avatar}`}
      onClick={e => onClick(e)}
      onMouseOver={e => onMouseOver(e)}
      onMouseOut={e => onMouseOut(e)}
      data-row={row}
      data-column={column}
      id={`sq-${row}${column}`}
    ></td>
  );
};

Square.propTypes = {
  selectPiece: PropTypes.func.isRequired,
  changePlayer: PropTypes.func.isRequired,
  clearSelection: PropTypes.func.isRequired,
  selectedSquare: PropTypes.array,
  selectedPiece: PropTypes.object,
  hoveredPiece: PropTypes.func,
  board: PropTypes.array,
  selectMove: PropTypes.func,
  gameAlert: PropTypes.func,
  clearAlert: PropTypes.func,
  takePiece: PropTypes.func,
  clearHover: PropTypes.func,
  currentPlayer: PropTypes.string,
  updateScore: PropTypes.func,
  takenWhitePieces: PropTypes.array,
  takenBlackPieces: PropTypes.array,
  turnCount: PropTypes.number,
  startTime: PropTypes.func,
  castle: PropTypes.func,
  startingTime: PropTypes.any
};

const mapStateToProps = state => {
  return {
    selectedSquare: state.boardReducer.selectedSquare,
    selectedPiece: state.boardReducer.selectedPiece,
    board: state.boardReducer.board,
    currentPlayer: state.gameReducer.currentPlayer,
    takenWhitePieces: state.boardReducer.takenWhitePieces,
    takenBlackPieces: state.boardReducer.takenBlackPieces,
    turnCount: state.gameReducer.turnCount,
    startingTime: state.gameReducer.startTime
  };
};
export default connect(mapStateToProps, {
  selectPiece,
  clearSelection,
  selectMove,
  gameAlert,
  clearAlert,
  takePiece,
  hoveredPiece,
  clearHover,
  changePlayer,
  updateScore,
  startTime,
  castle
})(Square);
