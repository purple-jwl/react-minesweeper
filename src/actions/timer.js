let interval;

export const startTimer = () => {
  return dispatch => {
    clearInterval(interval);
    interval = setInterval(() => dispatch(tick()), 1000);
  };
};

export const stopTimer = () => {
  clearInterval(interval);
};

export const clearTimer = () => {
  clearInterval(interval);
  return {
    type: 'CLEAR_TIMER',
  };
};

const tick = () => ({
  type: 'TICK_TIMER',
});
