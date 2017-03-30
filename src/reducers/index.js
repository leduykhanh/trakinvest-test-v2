import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { handleActions } from 'redux-actions';
import Type from '../actions/actionTypes'

const dataLoad = (state = [], action) => {
  switch (action.type) {
    case Type.GET_ALL_DATA_SUCCESS:
      console.log("reducers called");
    default:
      return state
  }
}
const rootReducer = combineReducers({
  state: (state = {}) => state,
  routing: routerReducer,
  dataLoad
});

export default rootReducer;
