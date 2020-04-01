import React from 'react';
import Board from '../board/Board';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PieceInfo from './PieceInfo/PieceInfo';
import HoveredPieceInfo from './HoveredPieceInfo/HoveredPieceInfo';
import GameAction from './GameAction/GameAction';
import ScoreCard from '../ScoreCard/ScoreCard';

const Interface = ({ selectedSquare, selectedPiece, hoveredPiece }) => {
  return (
    <div className="main">
      <div className="white-score score-card">
        <ScoreCard team="white" />
      </div>
      <div className="black-score score-card">
        <ScoreCard team="black" />
      </div>
      <div className="main-board-area">
        <Board />
      </div>
      <div
        className={`piece-info-box ${selectedPiece &&
          selectedPiece.color}-info`}
      >
        <PieceInfo />
      </div>
      <div
        className={`place-piece-info-box ${hoveredPiece &&
          hoveredPiece.color}-info`}
      >
        <HoveredPieceInfo />
      </div>

      <div className="game-action-box">
        <GameAction />
      </div>
    </div>
  );
};

Interface.propTypes = {
  board: PropTypes.array,
  selectedSquare: PropTypes.array,
  selectedPiece: PropTypes.object,
  hoveredPiece: PropTypes.object
};

const mapStateToProps = state => ({
  board: state.board,
  selectedSquare: state.selectedSquare,
  selectedPiece: state.boardReducer.selectedPiece,
  hoveredPiece: state.boardReducer.hoveredPiece
});

export default connect(mapStateToProps, null)(Interface);
