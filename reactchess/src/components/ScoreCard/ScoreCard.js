import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const ScoreCard = ({ team, takenBlackPieces, takenWhitePieces }) => {
  let pieces;
  if (team === 'white') {
    if (takenBlackPieces.length > 0) {
      pieces = takenBlackPieces.map((piece, i) => {
        return (
          <li key={`piece-${i}`} className={`piece-item ${piece.avatar}`}></li>
        );
      });
    }
  } else if (team === 'black') {
    if (takenWhitePieces.length > 0) {
      pieces = takenWhitePieces.map((piece, i) => {
        return (
          <li key={`piece-${i}`} className={`piece-item ${piece.avatar}`}></li>
        );
      });
    }
  }

  return (
    <Fragment>
      <h4 className="score-header">{`${team}'s Captured Pieces`}</h4>
      <ul className="piece-list">{pieces && pieces}</ul>
    </Fragment>
  );
};
ScoreCard.propTypes = {
  takenBlackPieces: PropTypes.array,
  takenWhitePieces: PropTypes.array
};

const mapStateToProps = state => ({
  takenBlackPieces: state.boardReducer.takenBlackPieces,
  takenWhitePieces: state.boardReducer.takenWhitePieces
});

export default connect(mapStateToProps, null)(ScoreCard);
