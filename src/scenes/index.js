import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';

import * as UserActions from '@user/UserActions';

import AppRouter from './AppRouter';
import LoginRouter from './LoginRouter';
import OnboardingRouter from './OnboardingRouter';

const styles = {
  flex: 1,
};

export const Routes = ({ isOnboarded, isLoggedIn, listeningToAuth }) => {

  listeningToAuth();

  if (!isLoggedIn) {
    return (
      <View style={styles}>
        <LoginRouter />
      </View>
    );
  } else if (!isOnboarded) {
    return (
      <View style={styles}>
        <OnboardingRouter />
      </View>
    );
  }
  return (
    <View style={styles}>
      <AppRouter />
    </View>
  );
};

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isOnboarded: PropTypes.bool.isRequired,
  listeningToAuth: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOnboarded: state.user.isOnboarded,
  isLoggedIn: state.user.isLoggedIn,
});

// Any actions to map to the component?
const mapDispatchToProps = dispatch => (bindActionCreators(
  {
    ...UserActions,
  }
  , dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
