// Tutorial 7 - dispatch-action.js

// So far we've focused on introduction basci ideas behind Flux and we haven't dispatched any of our own actions.
// We'll handle few actions now:

import UserStore from './UserStore';
import ItemsStore from './ItemsStore';
import dispatcher from './Dispatcher';

console.log('\n', '### It starts here');
// Output:
// UserStore state after initialization: { user: {}, items: [] }

// Let's dispatch our first action... Remember in 'simple-action-creator.js' we said:
//     "To dispatch an action we need... a dispatch function." Captain obvious

// The dispatch function we're looking for is provided by Flux and will propagate our action
// to all of our stores! The dispatch function is accessible through the Flux
// instance property "dispatch"

// To dispatch an action, simply call:

dispatcher.dispatch({
    type: 'AN_ACTION'
});
// Output:
// UserStore was called with args { '0': { type: 'AN_ACTION' } }
// ItemsStore was called with args { '0': { type: 'AN_ACTION' } }

// Each store is effectively called but since none of our stores care about this action type,
// the state is left unchanged:

console.log('UserStore state after action AN_ACTION:', UserStore.getState());
// Output: UserStore state after action AN_ACTION: {}

// But, wait a minute! Aren't we supposed to use an action creator to send an action? We could indeed
// use an actionCreator but since all it does is return an action it would not bring anything more to
// this example. But for the sake of future difficulties let's do it the right way according to
// flux theory. And let's make this action creator send an action we actually care about:

// In traditional Flux implementations, action creators often trigger a dispatch when invoked
// As for **action**, Other than type, the structure of an action object is really up to you. 
// If you’re interested, check out [Flux Standard Action](https://github.com/acdlite/flux-standard-action) for recommendations on how actions could be constructed.
var setNameActionCreator = function (name) {
  const action = {
      type: 'SET_NAME',
      name: name
  };

  dispatcher.dispatch(action);
}

setNameActionCreator('starandtina');

// Output:
// userReducer was called with state {} and action { type: 'SET_NAME', name: 'bob' }
// itemsReducer was called with state [] and action { type: 'SET_NAME', name: 'bob' }

console.log('UserStore state after action SET_NAME:', UserStore.getState())
// Output: UserStore state after action SET_NAME: { name: 'starandtina' }

console.log('ItemsStore state after action SET_NAME:', ItemsStore.getState())
// Output: ItemsStore state after action SET_NAME: []

// We just handled our first action and it changed the state of our application!

// But this seems too simple and not close enough to a real use-case. For example,
// what if we'd like do some async work in our action creator before dispatching
// the action? We'll talk about that in the next tutorial "dispatch-async-action.js"

// So far here is the flow of our application
// ActionCreator -> Action -> dispatcher -> store

// Go to next tutorial: dispatch-async-action-1.js
