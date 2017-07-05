import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { autoRehydrate } from 'redux-persist';
import rootReducer from '@reducers';
import Mixpanel from '@middlewares/mixpanel';

const initialState = {};
const enhancers = [];
let middleware = [
  thunk,
  Mixpanel,
];

const logger = createLogger({
  predicate: () => __DEV__,
  diff: true,
  collapsed: true,
});

if (__DEV__) {
  // Dev-only middleware
  middleware = [
    ...middleware,
    logger, // Logs state changes to the dev console
  ];
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

// Create store with reducers and initial state
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
  autoRehydrate(),
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('@reducers', () => {
    /* eslint-disable global-require */
    const nextRootReducer = require('@reducers').default;
    /* eslint-enable global-require */
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
