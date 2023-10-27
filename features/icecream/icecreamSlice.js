const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
    numOfIcecream : 10
}

const IcecreamSlice = createSlice({
    name: "Icecream",
    initialState,
    reducers:{
        ordered: (state) => {
            state.numOfIcecream --
        },
        restocked: (state, action) => {
            state.numOfIcecream = state.numOfIcecream + action.payload 
        }
    }
})

module.exports = IcecreamSlice.reducer;
module.exports.icecreamActions = IcecreamSlice.actions;