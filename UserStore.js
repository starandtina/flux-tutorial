import { EventEmitter } from 'events';
import dispatcher from './Dispatcher';

const assign = require('object-assign');
const _user = {};

const UserStore =  assign({}, EventEmitter.prototype, {
  /**
   * Get user.
   * @return {object}
   */
  getState: function() {
    return _user;
  },
});

dispatcher.register(function (action) {
  console.log('UserStore was called with args', arguments);

  switch (action.type) {
  case 'SET_NAME':
    _user.name = action.name;

    default:
      // no op
  }
});

export default UserStore;
