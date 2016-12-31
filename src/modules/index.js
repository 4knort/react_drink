import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import water from "../reducers/waterReducer";

export default combineReducers({ routing, water});
