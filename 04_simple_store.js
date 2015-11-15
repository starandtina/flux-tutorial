// Tutorial 4 - simple-store.js

// Now that we know how to create a Flux instance that will hold the state of our application
// we will focus on those registered callback functions that will allow us to transform this state.

// A word about store:
// As you may have noticed, in the flux diagram shown in the introduction, we had "Store".

// A Store is used to keeps your data in it. You could think of it as model of Backbone library.
// So in flux, stores hold state in them. This way, Flux's stores became
// "statefull stores".

// Let's import our `UserStore` here
// Notice that the creating dispather is moved into **Dispatcher.js**

import UserStore from './UserStore'

// You could see there is no output, as we haven't start to dispach actions.

// When called, a regisered callback is given those parameters you had passed to `dispatch` method

// But then what is the state of our application after Flux sends its "init" action?

// Go to next tutorial: dispatch-action.js

