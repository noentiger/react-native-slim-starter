import React, { PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { AppColors } from '@theme/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
});

/* Component ==================================================================== */
const TabIcon = ({ icon, selected, title }) => (
  <View>
    <Icon
      name={icon}
      size={26}
      color={selected ? AppColors.tabbar.iconSelected : AppColors.tabbar.iconDefault}
    />
    <Text style={styles.text}>{title}</Text>
  </View>
);

TabIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  title: PropTypes.string,
};
TabIcon.defaultProps = { icon: 'search', selected: false, title: '' };

/* Export Component ==================================================================== */
export default TabIcon;
