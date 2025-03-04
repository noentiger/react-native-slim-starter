import React, { PropTypes } from 'react';
import { View } from 'react-native';

/* Component ==================================================================== */
const Spacer = ({ size }) => (
  <View
    style={{
      left: 0,
      right: 0,
      height: 1,
      marginTop: size - 1,
    }}
  />
);

Spacer.propTypes = { size: PropTypes.number };
Spacer.defaultProps = { size: 10 };
Spacer.componentName = 'Spacer';

/* Export Component ==================================================================== */
export default Spacer;
