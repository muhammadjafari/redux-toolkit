const configureStore = require("@reduxjs/toolkit").configureStore
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice")
const reducLogger = require('redux-logger')

const logger = reducLogger.createLogger()

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        icecream: icecreamReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store ;