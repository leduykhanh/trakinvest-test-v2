import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { handleActions } from 'redux-actions';
import Type from '../actions/actionTypes'

const dataLoad = (state = [], action) => {
	console.log("action",action);
  switch (action.type) {
    case "data.jsonGET_ALL_DATA":
      console.log("reducers called");
    case "data.jsonGET_ALL_DATA":
      console.log("reducers failed");
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
