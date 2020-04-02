import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const HoveredPieceInfo = ({ hoveredPiece, hoveredSquare, selectedSquare }) => {
  if (
    hoveredSquare &&
    selectedSquare &&
    `${hoveredSquare[0]}${hoveredSquare[1]}` ===
      `${selectedSquare[0]}${selectedSquare[1]}`
  ) {
    return (
      <h3 className="secondary-title piece-location">
        Select a Tile to Move to
      </h3>
    );
  } else if (hoveredPiece) {
    return (
      <div className={`piece-location`}>
        <h3 className="secondary-title">
          {' '}
          {selectedSquare[0] !== null && 'To:'} {hoveredPiece.name}
        </h3>
        <div className="secondary-title ">
          ( Square: {letters[hoveredSquare[0]]}
          {parseInt(hoveredSquare[1]) + 1})
        </div>
      </div>
    );
  } else if (hoveredSquare && hoveredSquare[0]) {
    return (
      <div className={`piece-location`}>
        <div className="secondary-title ">
          {selectedSquare[0] !== null && 'To:'} Square:{' '}
          {letters[hoveredSquare[0]]}
          {parseInt(hoveredSquare[1]) + 1}
        </div>
      </div>
    );
  } else {
    return (
      <h3 className="secondary-title piece-location">
        Select a Tile to Move to
      </h3>
    );
  }
};

HoveredPieceInfo.propTypes = {
  selectedSquare: PropTypes.array,
  hoveredPiece: PropTypes.object,
  hoveredSquare: PropTypes.array
};

const mapStateToProps = state => ({
  selectedSquare: state.boardReducer.selectedSquare,
  hoveredPiece: state.boardReducer.hoveredPiece,
  hoveredSquare: state.boardReducer.hoveredSquare
});

export default connect(mapStateToProps, null)(HoveredPieceInfo);
