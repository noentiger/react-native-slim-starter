import Mixpanel from 'react-native-mixpanel';
import { AppConfig } from '@constants/';

Mixpanel.sharedInstanceWithToken(AppConfig.mixpanel.tokens.production);

const track = store => next => (action) => {
  switch (action.type) {
    // Track each screen view to Redux
    // - Requires that each Scene in RNRF have a 'analyticsDesc' prop
    case 'REACT_NATIVE_ROUTER_FLUX_FOCUS' :
      if (action && action.scene && action.scene.analyticsDesc) {
        try {
          const screenName = (action.scene.title)
            ? `${action.scene.analyticsDesc} - ${action.scene.title}`
            : action.scene.analyticsDesc;

          Mixpanel.track(screenName);
        } catch (err) {
          console.log(store);
          console.log(err);
        }
      }
      break;

    default :
  }
  return next(action);
};

export default track;
