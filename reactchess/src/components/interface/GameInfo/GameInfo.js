import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GameTime from './GameTime/GameTime';

const GameInfo = ({ currentPlayer, turnCount }) => {
  return (
    <Fragment>
      <div className="turn-counter game-info-dash">{`Turn: ${Math.floor(
        turnCount
      )}`}</div>
      <div className="player-turn game-info-dash">
        {turnCount > 1
          ? `${currentPlayer}'s Turn`
          : `${currentPlayer} moves first`}
      </div>
      <div className="game-timer game-info-dash">
        <GameTime />
      </div>
    </Fragment>
  );
};

GameInfo.propTypes = {
  currentPlayer: PropTypes.string,
  turnCount: PropTypes.number
};

const mapStateToProps = state => ({
  currentPlayer: state.gameReducer.currentPlayer,
  turnCount: state.gameReducer.turnCount
});

export default connect(mapStateToProps, null)(GameInfo);
