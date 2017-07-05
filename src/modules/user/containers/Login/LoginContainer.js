import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as UserActions from '@user/UserActions';

// The component we're mapping to
import LoginRender from './LoginView';

// What data from the store shall we send to the component?
const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => (bindActionCreators(
  {
    ...UserActions,
  }
  , dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(LoginRender);
