import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const GameInfo = ({ currentPlayer, turnCount }) => {
  return (
    <div>
      {`Turn: ${Math.floor(turnCount)}`}
      <div>
        {turnCount > 1
          ? `${currentPlayer}'s Turn`
          : `${currentPlayer} moves first`}
      </div>
    </div>
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
