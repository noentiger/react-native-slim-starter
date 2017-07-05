import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
} from 'react-native';

import PropsTypes from 'prop-types';

import { List, ListItem } from 'react-native-elements';

import { AppConfig } from '@constants';

// Consts and Libs
import { AppStyles, AppColors } from '@theme/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
  },
  sections: {
    paddingTop: 40,
  },
  list: {
    marginTop: 10,
    marginBottom: 20,
  },
  listTitle: {
    paddingHorizontal: 15,
    color: AppColors.textSecondary,
  },
});

/* Component ==================================================================== */
class SettingsView extends Component {
  static componentName = 'Onboarding';

  static propTypes = {
    logOut: PropsTypes.func.isRequired,
  }

  render() {
    const sections = [
      {
        title: 'Never miss an update',
        items: [
          {
            title: 'Push notifications',
            icon: 'notifications',
          },
        ],
      },
      {
        title: 'Payment details',
        items: [
          {
            title: 'Credit card',
            icon: 'credit-card',
          },
          {
            title: 'Klarna',
            icon: 'attach-money',
          },
        ],
      },
      {
        title: 'Contact us',
        items: [
          {
            title: AppConfig.info.email,
            icon: 'email',
            action: () => {
              const email = `mailto: ${AppConfig.info.email}`;
              Linking
                .openURL(email)
                .catch(err => console.error('An error occurred', err));
            },
          },
          {
            title: 'Facebook',
            icon: 'link',
            action: () => {
              const url = AppConfig.social.facebook;
              Linking
                .canOpenURL(url)
                .then(supported => supported && Linking.openURL(url))
                .catch(err => console.error('An error occurred', err));
            },
          },
        ],
      },
      {
        items: [
          {
            title: 'Log out',
            icon: 'exit-to-app',
            action: () => this.props.logOut(),
          },
        ],
      },
    ];

    return (
      <View style={[AppStyles.container, styles.container]}>
        <View style={styles.sections}>
          {
            sections.map((section, i) => (
              <View key={i}>
                <Text style={styles.listTitle}>{section.title}</Text>
                <List containerStyle={styles.list}>
                  {
                    section.items.map((item, ii) => (
                      <ListItem
                        key={ii}
                        title={item.title}
                        leftIcon={{ name: item.icon }}
                        switchButton
                        onSwitch={() => console.log('switched')}
                        switched={false}
                        onPress={item.action}
                      />
                    ))
                  }
                </List>
              </View>
            ))
          }
        </View>
      </View>
    );
  }
}
/* Export Component ==================================================================== */
export default SettingsView;
