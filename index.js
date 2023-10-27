const store = require("./app/store.js");
const cakeActions = require("./features/cake/cakeSlice.js").cakeActions
const fetchUsers = require("./features/user/userSlice.js").fetchUsers

console.log("initial state",store.getState());

unsubscribe = store.subscribe(() => {
    console.log("updated state",store.getState())
})

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3))

store.dispatch(fetchUsers());

// unsubscribe();