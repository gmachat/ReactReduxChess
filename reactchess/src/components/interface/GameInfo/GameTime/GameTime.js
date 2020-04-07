import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const GameTime = ({ startTime }) => {
  useEffect(() => {
    document.querySelector('.game-timer').innerHTML = 'Move to Start Timer';
  }, [startTime]);

  const timer = () => {
    const date = new Date();
    let time = (date.getTime() - startTime.getTime()) / 1000;
    const hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    const minutes = Math.floor(time / 60);
    time = time - minutes * 60;
    const seconds = Math.floor(time);
    const visualTime = `${hours ? `${hours}:` : ''}${
      minutes
        ? minutes < 10
          ? hours > 0
            ? `0${minutes}:`
            : `${minutes}:`
          : `${minutes}:`
        : ''
    }${seconds < 10 ? (minutes > 0 ? `0${seconds}` : seconds) : seconds}`;
    document.querySelector('.game-timer').innerHTML = `Time: ${visualTime}`;
  };

  return <Fragment>{startTime && setInterval(timer, 1000)}</Fragment>;
};

GameTime.propTypes = {
  startTime: PropTypes.any
};

const mapStateToProps = state => ({
  startTime: state.gameReducer.startTime
});

export default connect(mapStateToProps, null)(GameTime);
