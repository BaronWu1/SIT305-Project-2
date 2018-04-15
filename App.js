import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

// Main function
export default class App extends React.Component {
  state = {
    isReady: false,
  };

  // Main render function
  render() {
    // Splash screen
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    // Main screen
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );

  }

  // Holder function for demonstrating splash
  async _cacheResourcesAsync() {
    var start = new Date().getTime();
    var end = start;
    while(end < start + 2000) {
      end = new Date().getTime();
    }
  }
}

// Main screen styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
