import React, { PropTypes } from 'react';
import { Scene, Router } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import Placeholder from '@components/general/Placeholder';

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
      />
    </Scene>
  </Router>
);

OnboardingRouter.propTypes = {
  getSceneStyles: PropTypes.func.isRequired,
};

export default OnboardingRouter;
