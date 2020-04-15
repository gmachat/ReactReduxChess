import { getTimeStamp } from '../getTimeStamp';

const setCheck = (state, payload) => {
  const newPieces = { ...state.pieces };
  const updatedLog = [...state.log];

  if (payload.inCheck) {
    newPieces[
      `${payload.currentPlayer === 'Black' ? 'white' : 'black'}King`
    ].inCheck = true;
    updatedLog[updatedLog.length - 1] = updatedLog[updatedLog.length - 1]
      .split('(')[0]
      .concat(
        ` putting ${
          payload.currentPlayer === 'White' ? 'Black' : 'White'
        } in Check! (${getTimeStamp(payload.startTime)})`
      );
  } else {
    newPieces[
      `${payload.currentPlayer === 'Black' ? 'white' : 'black'}King`
    ].inCheck = false;
  }
  return {
    ...state,
    pieces: newPieces,
    log: updatedLog,
  };
};

export default setCheck;
