import React, { PropTypes } from 'react';
import { Scene, Router } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import Placeholder from '@containers/Onboarding/OnboardingContainer';

const OnboardingRouter = ({ getSceneStyles }) => (
  <Router getSceneStyles={getSceneStyles}>
    <Scene key={'onboarding'}>
      <Scene
        {...AppConfig.navbarProps}
        key={'onboard'}
        title={'Onboarding'}
        clone
        component={Placeholder}
        analyticsDesc={'Onboarding: Onboard'}
        hideNavBar
      />
    </Scene>
  </Router>
);

OnboardingRouter.propTypes = {
  getSceneStyles: PropTypes.func,
};

export default OnboardingRouter;
