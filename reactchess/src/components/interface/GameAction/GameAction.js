import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const GameAction = ({ gameAlert }) => {
  console.log('gamealert', gameAlert);
  if (gameAlert) {
    console.log(gameAlert.gameAlert);
    return (
      <div className={`game-message ${gameAlert.color}`}>
        {gameAlert.message}
      </div>
    );
  }
};

GameAction.propTypes = {
  gameAlert: PropTypes.object
};

const mapStateToProps = state => ({
  gameAlert: state.alertReducer.gameAlert
});

export default connect(mapStateToProps, null)(GameAction);
