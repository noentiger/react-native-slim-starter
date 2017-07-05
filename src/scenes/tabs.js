import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';

// Scenes
import Placeholder from '@components/general/Placeholder';
import UserProfile from '@containers/UserProfile/UserProfileContainer';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>

    <Scene
      key={'explore'}
      {...navbarPropsTabs}
      title={'Explore'}
      component={Placeholder}
      icon={props => TabIcon({ ...props, icon: 'explore', title: 'Explore' })}
      analyticsDesc={'Explore: Explore causes'}
    />

    <Scene
      key={'profile'}
      {...navbarPropsTabs}
      title={'Profile'}
      component={UserProfile}
      icon={props => TabIcon({ ...props, icon: 'account-circle', title: 'Profile' })}
      analyticsDesc={'User: Profile'}
    />

  </Scene>
);

export default scenes;
