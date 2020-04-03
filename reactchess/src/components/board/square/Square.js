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
  clearHover
} from '../../../store/actions';
import { conditionals } from './conditionals';

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
  takePiece
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
      column
    );
    //clears selection if the newly clicked square is already highlighted
    if (conditional.clickedOnEmptySelf) {
      clearSelection(event.target);
      clearHover();
    }
    //if thre is already a highlighted square and a new square is clicked
    else if (conditional.squareIsSelected) {
      //if the new square is empty, move the piece there
      if (conditional.squareAndTargetEmpty) {
        //if both are empty switch squares
        clearSelection(event.target);
        selectMove(event.target);
        clearHover();
        //if the next target is empty clear the target
      } else if (conditional.targetEmpty) {
        selectMove(event.target);
        clearSelection(event.target);
        clearHover();
        //if a square is selected, but empty, select a new square
      } else if (conditional.selectNewPiece) {
        selectPiece(event.target);
        // Present an error if a piece trys to land on the same space of another piece of that color
      } else if (conditional.sameSquareAsAlly) {
        gameAlert({
          message: 'You can not place your piece here!',
          color: 'red'
        });
        setTimeout(clearAlert, 4000);
        clearSelection(event.target);
        clearHover();
        //Present if a piece of an opposite color "Takes" a space from that color
      } else if (conditional.clickedOnEnemySquare) {
        const defender = targetSquare;
        console.log(defender);
        setTimeout(clearAlert, 5000);
        takePiece(event.target, selectedPiece);
        defender !==
        board[event.target.dataset.row][event.target.dataset.column]
          ? gameAlert({
              message: `${selectedPiece.name} takes ${defender.name}`,
              color: 'green'
            })
          : gameAlert({
              message: `You cannot attack in that way`,
              color: 'red'
            });
        clearSelection(event.target);
        hoveredPiece(event.target);
      }
      //Use to get the first square selected
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
  clearSelection: PropTypes.func.isRequired,
  selectedSquare: PropTypes.array,
  selectedPiece: PropTypes.object,
  hoveredPiece: PropTypes.func,
  board: PropTypes.array,
  selectMove: PropTypes.func,
  gameAlert: PropTypes.func,
  clearAlert: PropTypes.func,
  takePiece: PropTypes.func,
  clearHover: PropTypes.func
};

const mapStateToProps = state => {
  return {
    selectedSquare: state.boardReducer.selectedSquare,
    selectedPiece: state.boardReducer.selectedPiece,
    board: state.boardReducer.board
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
  clearHover
})(Square);
