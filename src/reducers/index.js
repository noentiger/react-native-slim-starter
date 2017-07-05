import { combineReducers } from 'redux';

import router from '@reducers/router';
import user from '@user/UserReducer';

const appReducer = combineReducers({
  router,
  user,
});

const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
