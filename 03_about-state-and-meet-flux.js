// Tutorial 3 - about-state-and-meet-flux.js

// Sometimes the actions that we'll handle in our application will not only inform us
// that something happened but also tell us that data needs to be updated.

// This is actually quite a big challenge in any app.
// Where do I keep all the data regarding my application along its lifetime?
// How do I handle modification of such data?
// How do I propagate modifications to all parts of my application?

// Here comes Fulx.

// Flux (https://github.com/facebook/flux) is a "An application architecture for React utilizing a unidirectional data flow."

// Let's review the above questions and reply to them with
// Flux vocabulary:

// Where do I keep all the data regarding my application along its lifetime?
//     To put it simply, application state is maintained only in the stores,
//     allowing the different parts of the application to remain highly decoupled.
//     You keep it the way you want (JS object, array, Backbone Model, Immutable structure, ...).
//     Data of your application will be called state. This makes sense since we're talking about
//     all the application's data that will evolve over time, it's really the application's state.
//     But you hand it over to Flux.
// How do I handle data modifications?
//     Using Stores.
//     A store is a subscriber to actions.
//     A store is just a function that receives the current state of your application, the action,
//     and returns a new state modified (or reduced as they call it)
// How do I propagate modifications to all parts of my application?
//     Using subscribers to state's modifications. 
//     It means propagating an action through a central dispatcher, to the various stores that hold the application's data and business logic.

// Flux ties all this together for you.
// To sum up, Fulx will provide you:
//     1) a unidirectional data flow: Action Creators -> Action -> Dispatcher -> Store -> View (React Views) -> ... -> Action Creators
//     2) a mechanism to subscribe to state updates
//     3) a mechanism to dispatch actions to modifiers of your application state

// The Flux instance is called a dispatcher and can be created like this:
/*
  import { Dispatcher } from 'flux';

  var dispatcher = new Dispatcher();
*/

import { Dispatcher } from 'flux';

var dispatcher = new Dispatcher();

// Seems good for now...

// Go to next tutorial: dispatch-action.js
