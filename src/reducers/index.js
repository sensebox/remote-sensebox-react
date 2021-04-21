import { combineReducers } from 'redux';
import workspaceReducer from './workspaceReducer';
import generalReducer from './generalReducer';
import messageReducer from './messageReducer';
import sketchDetailReducer from './sketchDetailsReducer';

export default combineReducers({
  workspace: workspaceReducer,
  general: generalReducer,
  message: messageReducer,
  sketchDetail: sketchDetailReducer
});
