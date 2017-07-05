import { connect } from 'react-redux';

// The component we're mapping to
import AppLaunchRender from './LaunchView';

// What data from the store shall we send to the component?
const mapStateToProps = () => ({
});

// Any actions to map to the component?
const mapDispatchToProps = {
  login: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLaunchRender);
