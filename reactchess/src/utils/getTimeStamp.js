export const getTimeStamp = startTime => {
  if (startTime) {
    const date = new Date();
    let time = (date.getTime() - startTime.getTime()) / 1000;
    const hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    const minutes = Math.floor(time / 60);
    time = time - minutes * 60;
    const seconds = Math.floor(time);
    return `${hours ? `${hours}:` : ''}${
      minutes
        ? minutes < 10
          ? hours > 0
            ? `0${minutes}:`
            : `${minutes}:`
          : `${minutes}:`
        : ''
    }${
      seconds < 10
        ? minutes > 0
          ? `0${seconds}`
          : `0:0${seconds}`
        : minutes > 0
        ? `${seconds}`
        : `0:${seconds}`
    }`;
  } else {
    return 'First Move';
  }
};
