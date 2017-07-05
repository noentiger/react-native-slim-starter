import { connect } from 'react-redux';

// The component we're mapping to
import UserProfileRender from './UserProfileView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  profile: state.user.profile,
});

// Any actions to map to the component?
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileRender);
