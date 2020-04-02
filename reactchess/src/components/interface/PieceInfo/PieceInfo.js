import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const PieceInfo = ({ selectedPiece, selectedSquare, defaultMessage }) => {
  if (selectedPiece) {
    return (
      <div className={`piece-location`}>
        <h3 className="secondary-title">Move {selectedPiece.name}</h3>
        <div className="secondary-title ">
          (Square: {letters[selectedSquare[0]]}
          {parseInt(selectedSquare[1]) + 1})
        </div>
      </div>
    );
  } else {
    return (
      <h3 className="secondary-title piece-location">Select a Piece to Move</h3>
    );
  }
};

PieceInfo.propTypes = {
  selectedPiece: PropTypes.object,
  selectedSquare: PropTypes.array
};

const mapStateToProps = state => ({
  selectedPiece: state.boardReducer.selectedPiece,
  selectedSquare: state.boardReducer.selectedSquare
});

export default connect(mapStateToProps, null)(PieceInfo);
