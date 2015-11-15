import { EventEmitter } from 'events';
import dispatcher from './Dispatcher';

var assign = require('object-assign');
var _items = [];

export default assign({}, EventEmitter.prototype, {
  /**
   * Get the entire collection of items.
   * @return {array}
   */
  getState: function() {
    return _items;
  },
});

dispatcher.register(function (action) {
  console.log('ItemsStore was called with args', arguments);

   switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.item
            ]
       
    default:
      // no op
    }
});


