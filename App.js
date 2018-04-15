import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Button, Alert, View } from 'react-native';
import { AppLoading } from 'expo';

// Main function
export default class App extends React.Component {
  state = {
    isReady: false,
    text: ''
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
      <View style={styles.mainContainer}>
        <View style={styles.mainTitle}>
          <Text style={{fontSize: 21}}>Welcome to MY RPG GAME!</Text>
        </View>

        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>New Game</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Load Game</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Exit</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={this._onPressButton}>
          <View>
            <Text style={{color: '#4990e2', fontSize: 17, margin: 20}}>Report a bug?</Text>
          </View>
        </TouchableOpacity>

      </View>
    );

  }

  _onPressButton() {
    // Alert.alert('Yo!')
  }

  // Holder function for demonstrating splash
  async _cacheResourcesAsync() {
    var start = new Date().getTime();
    var end = start;
    while(end < start + 0) {
      end = new Date().getTime();
    }
  }
}

// Main screen styles
const styles = StyleSheet.create({
  mainTitle: {
    height: 80,
    justifyContent: 'center',
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',

    /* Primary axis = column = vertical = default */
    flexDirection: 'column',

    /* primary axis */
    justifyContent: 'center',

    /* secondary axis */
    alignItems: 'center',

    paddingTop: 30,
    paddingBottom: 30,
  },

  button: {
    margin: 20,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },

  buttonText: {
    padding: 20,
    color: 'white'
  },

});
