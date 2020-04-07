import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const GameLog = ({ log }) => {
  const reversed = [...log].reverse();
  let renderedLog =
    reversed &&
    reversed.map(el => {
      return (
        <li
          className={`${el.split(' ')[0].toLowerCase()}-li log-li`}
          key={`move-${el}`}
        >
          {el}
        </li>
      );
    });

  console.log(log);
  return (
    <Fragment>
      <h2 className="secondary-title">Game Log</h2>
      <ul className="game-log-list">{renderedLog}</ul>
    </Fragment>
  );
};

GameLog.propTypes = {
  log: PropTypes.array
};

const mapStateToProps = state => ({
  log: state.boardReducer.log
});

export default connect(mapStateToProps, null)(GameLog);
