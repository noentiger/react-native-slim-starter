import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

import PropTypes from 'prop-types';

import Onboarding from 'react-native-app-onboarding';

// Consts and Libs
import { AppStyles } from '@theme/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
});

/* Component ==================================================================== */
class OnboardingView extends Component {
  static componentName = 'Onboarding';

  static propTypes = {
    updateUserSettings: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    StatusBar.setHidden(true, true);
  }

  handleEnd = () => {
    this.props.updateUserSettings({
      isOnboarded: true,
    });
  }

  render() {
    const pages = [
      {
        backgroundColor: '#e96196',
        title: 'We do not hustle with fees. Every cent goes to charity!',
        subtitle: 'We just make it easier',
      },
      {
        backgroundColor: '#4dded9',
        title: 'Find causes that matters to you',
        subtitle: 'We make sure every donation makes a change',
      },
      {
        backgroundColor: '#6668de',
        title: 'Let you friends know',
        subtitle: 'Let your friends know they can donate 100% to the cause they are passionate about',
      },
    ];

    return (
      <View style={[AppStyles.container, { marginTop: -64 }]}>
        <Onboarding
          pages={pages}
          onEnd={this.handleEnd}
        />
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default OnboardingView;
