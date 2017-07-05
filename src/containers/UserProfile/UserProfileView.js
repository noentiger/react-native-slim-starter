import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles } from '@theme/';

import { Icon, Avatar } from 'react-native-elements';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
});

/* Component ==================================================================== */
class UserProfile extends Component {
  static componentName = 'UserProfile';

  static propTypes = {
    profile: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }

  static renderRightButton = () => (
    <TouchableOpacity onPress={Actions.settings}>
      <Icon name="settings" color={AppStyles.navbarButton.tintColor} />
    </TouchableOpacity>
  )

  componentDidMount = () => {
  }

  render() {
    const { profile } = this.props;

    return (
      <View style={[AppStyles.container]}>
        <Text>User Profile</Text>
        <Avatar
          medium
          rounded
          source={{ uri: profile.avatarUrl }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default UserProfile;
