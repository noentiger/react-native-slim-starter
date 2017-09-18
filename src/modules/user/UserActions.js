import firestack from '@middlewares/firestack';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import {
  ATTEMPTING_LOGIN,
  LOGOUT,
  LOGIN_USER,
  UPDATE_USER_SETTINGS,
} from './ActionTypes';

export const listeningToAuth = () =>
  (dispatch) => {
    firestack.auth.listenForAuth((event) => {
      if (!event.authenticated) {
        dispatch({ type: LOGOUT });
      } else {
        const user = event.user;
        firestack.database
          .ref(`users/${user.uid}/settings`)
          .once('value', (snapshot) => {
            const settings = snapshot.val();
            dispatch({
              type: LOGIN_USER,
              data: {
                user,
                settings,
                profile: {
                  displayName: user.displayName,
                  avatarUrl: user.photoURL,
                  email: user.email,
                },
                providerData: user.providerData,
              },
            });
          });
      }
    });
  };

export const attemptLogin = () =>
  (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    dispatch({ type: ATTEMPTING_LOGIN });
    firebase.login({
      provider: 'google',
      type: 'popup',
    }).then((user) => {
      dispatch({
        type: LOGIN_USER,
        data: user,
      });
    })
    .catch(() => {
      dispatch({ type: LOGOUT });
    });
  };

export const updateSettings = obj =>
    (dispatch, getState) => {
      const user = getState().user;
      const settings = user.settings;
      firestack.database
        .ref(`users/${user.uid}/settings`)
        .set(obj);
      dispatch({
        type: UPDATE_USER_SETTINGS,
        data: {
          ...settings,
          ...obj,
        },
      });
    };

export const logOut = () =>
    (dispatch) => {
      firestack.auth.signOut()
      .then(() => {
        dispatch({
          type: LOGOUT,
        });
      })
      .catch(() => console.error('Uh oh... something weird happened'));
    };

export const loginWithFacebook = () =>
    (dispatch) => {
      dispatch({ type: ATTEMPTING_LOGIN });
      LoginManager.logInWithReadPermissions(['public_profile']).then(
        (result) => {
          if (result.isCancelled) {
            console.log('Login cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then(
              (data) => {
                const token = data.accessToken.toString();
                firestack.auth.signInWithProvider('facebook', token, '')
                  .then((user) => {
                    dispatch({
                      type: LOGIN_USER,
                      data: user,
                    });
                  })
                  .catch((error) => {
                    console.log('error', error);
                    dispatch({ type: LOGOUT });
                  });
              },
            );
          }
        },
        (error) => {
          console.log(`Login fail with error: ${error}`);
        },
      );
    };
