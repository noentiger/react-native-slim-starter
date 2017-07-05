import React, { PropTypes } from 'react';
import { Scene, ActionConst, Router } from 'react-native-router-flux';

// Scenes
import Login from '@user/containers/Login/LoginContainer';

const LoginRouter = ({ getSceneStyles }) => (
  <Router getSceneStyles={getSceneStyles}>
    <Scene key={'authenticate'}>
      <Scene
        hideNavBar
        key={'login'}
        component={Login}
        type={ActionConst.RESET}
        analyticsDesc={'Authenticate: Login'}
      />
    </Scene>
  </Router>
);

LoginRouter.propTypes = {
  getSceneStyles: PropTypes.func,
};

export default LoginRouter;
