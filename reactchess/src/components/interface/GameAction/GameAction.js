import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const GameAction = ({ gameAlert, pieces, currentPlayer }) => {
  if (gameAlert) {
    return (
      <Fragment>
        <div className={`game-message red`}>
          {pieces[`${currentPlayer.toLowerCase()}King`].inCheck &&
            `${currentPlayer} is in Check!`}
        </div>
        <div className={`game-message ${gameAlert.color}`}>
          {gameAlert.message}
        </div>
      </Fragment>
    );
  }
};

GameAction.propTypes = {
  gameAlert: PropTypes.object,
  pieces: PropTypes.object,
  currentPlayer: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  gameAlert: state.alertReducer.gameAlert,
  pieces: state.boardReducer.pieces,
  currentPlayer: state.gameReducer.currentPlayer,
});

export default connect(mapStateToProps, null)(GameAction);
