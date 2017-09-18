import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '@user/UserActions';

// The component we're mapping to
import OnboardingRender from './OnboardingView';

// What data from the store shall we send to the component?
const mapStateToProps = () => ({
});

// Any actions to map to the component?
const mapDispatchToProps = dispatch => (bindActionCreators(
  {
    updateUserSettings: UserActions.updateSettings,
  }
  , dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingRender);
