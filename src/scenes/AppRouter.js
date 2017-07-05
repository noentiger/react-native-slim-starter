import React from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import AppLaunch from '@containers/Launch/LaunchContainer';
import Settings from '@containers/Settings/SettingsContainer';
import Placeholder from '@components/general/Placeholder';
import TabsScenes from './tabs';

const RouterWithRedux = connect()(Router);

const styles = {
  flex: 1,
};

const AppRouter = () => (
  <RouterWithRedux getSceneStyles={styles}>
    <Scene key={'root'} {...AppConfig.navbarProps}>
      <Scene
        hideNavBar
        key={'splash'}
        component={AppLaunch}
        analyticsDesc={'AppLaunch: Launching App'}
      />

      {/* Main App */}
      <Scene key={'app'} {...AppConfig.navbarProps} title={AppConfig.appName} hideNavBar={false} type={ActionConst.RESET}>
        {TabsScenes}
        {/* General */}
        <Scene
          clone
          key={'comingSoon'}
          title={'Coming Soon'}
          component={Placeholder}
          analyticsDesc={'Placeholder: Coming Soon'}
        />
      </Scene>
      <Scene
        key={'settings'}
        title={'Settings'}
        component={Settings}
        analyticsDesc={'Settings: User Settings'}
      />
    </Scene>
  </RouterWithRedux>
);

export default AppRouter;
