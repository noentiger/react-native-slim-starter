// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from '@scenes';
import Store from '@store/create';
import codePush from 'react-native-code-push';

const CODE_PUSH_OPTIONS = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
};

@codePush
class StarterApp extends Component {

  state = {
    codePushUpToDate: false,
    percentage: 0,
    reInitedSync: false,
  }

  componentWillMount() {
    this.codePushStatusDidChange = this.codePushStatusDidChange.bind(this);
    this.codePushDownloadDidProgress = this.codePushDownloadDidProgress.bind(this);
    codePush.sync(
      CODE_PUSH_OPTIONS,
      this.codePushStatusDidChange,
      this.codePushDownloadDidProgress,
    );
  }

  codePushStatusDidChange(status) {
    switch (status) {
      case codePush.SyncStatus.UP_TO_DATE:
        this.setState({ codePushUpToDate: true });
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({ codePushUpToDate: true });
        break;
      case codePush.SyncStatus.UNKNOWN_ERROR: {
        const { reInitedSync } = this.state;
        if (!reInitedSync) {
          setTimeout(() => {
            this.setState({ reInitedSync: true });
            codePush.sync(
              CODE_PUSH_OPTIONS,
              this.codePushStatusDidChange,
              this.codePushDownloadDidProgress,
            );
          }, 50);
        } else {
          this.setState({ codePushUpToDate: true });
        }
      }
        break;
      default:
    }
  }

  codePushDownloadDidProgress(progress) {
    const percentage = Math.floor((progress.receivedBytes / progress.totalBytes) * 100);
    this.setState({ percentage });
  }

  render() {
    const { codePushUpToDate, percentage } = this.state;

    console.log('percentage', percentage);
    console.log('codePushUpToDate', codePushUpToDate);

    return (
      <Provider store={Store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default StarterApp;
