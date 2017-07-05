import firestack from '@middlewares/firestack';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import {
  ATTEMPTING_LOGIN,
  LOGOUT,
  LOGIN_USER,
} from './ActionTypes';

export const listeningToAuth = () =>
  (dispatch, getState) => {
    firestack.auth.listenForAuth((event) => {
      if (!event.authenticated) {
        dispatch({ type: LOGOUT });
      } else {
        const user = event.user;
        console.log('user', user);
        dispatch({
          type: LOGIN_USER,
          data: {
            user,
            profile: {
              displayName: user.displayName,
              avatarUrl: user.photoURL,
              email: user.email,
            },
            providerData: user.providerData,
          },
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

export const logOut = () =>
    (dispatch, getState) => {
      firestack.auth.signOut()
      .then((res) => {
        dispatch({
          type: LOGOUT,
        });
      })
      .catch(err => console.error('Uh oh... something weird happened'));
    };

export const loginWithFacebook = () =>
    (dispatch, getState) => {
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
