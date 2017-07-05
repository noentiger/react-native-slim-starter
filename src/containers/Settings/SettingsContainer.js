import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as UserActions from '@user/UserActions';

// The component we're mapping to
import SettingsRender from './SettingsView';

// What data from the store shall we send to the component?
const mapStateToProps = () => ({
});

// Any actions to map to the component?
const mapDispatchToProps = dispatch => (bindActionCreators(
  {
    logOut: UserActions.logOut,
  }
  , dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(SettingsRender);
