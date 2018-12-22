//can just use normal require on mocks
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};
