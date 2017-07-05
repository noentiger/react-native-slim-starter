import React, { Component, PropTypes } from 'react';
import { SocialIcon } from 'react-native-elements';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Spacer } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.brand.primary,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.85,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 52,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '200',
  },
});

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';

  render = () => (
    <View
      style={[AppStyles.containerCentered, AppStyles.containerCentered, styles.background]}
    >
      <Text style={[styles.title, AppStyles.paddingVertical]}>Awesome App</Text>

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <SocialIcon
            title="Sign In With Facebook"
            button
            type="facebook"
            onPress={this.props.loginWithFacebook}
          />
        </View>
      </View>

      <Spacer size={40} />
    </View>
  )
}

Authenticate.propTypes = {
  loginWithFacebook: PropTypes.func.isRequired,
};

/* Export Component ==================================================================== */
export default Authenticate;
