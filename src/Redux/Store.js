import { createStore, combineReducers, applyMiddleware } from 'redux'
import SportReducer from './Reducers/Sport'

import thunk from 'redux-thunk'

const reducers = combineReducers({
    sport: SportReducer
})

export default createStore(reducers, applyMiddleware(thunk))