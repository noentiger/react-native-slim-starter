import Firestack from 'react-native-firestack';

const configurationOptions = {
  debug: __DEV__,
};
const firestack = new Firestack(configurationOptions);

export default firestack;
