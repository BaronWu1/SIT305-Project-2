import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Button, Alert, View ,AppRegistry} from 'react-native';
import { AppLoading } from 'expo';
import { StackNavigator } from 'react-navigation';
import MapUI from './MapUI';

// Main function
class App extends React.Component {
  // State of loading (for splash screen to load before screen ready)
  state = {
    isReady: false,
  };

  // Navigation bar config
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: {
      borderBottomColor: 'transparent',
      borderBottomWidth: 0
    }
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

        {/* New Game */}
        <TouchableOpacity onPress={() => this._onPressButton(1)
        }>
          <View style={styles.button}>
            <Text style={styles.buttonText}>New Game</Text>
          </View>
        </TouchableOpacity>

        {/* Load Game */}
        <TouchableOpacity onPress={() => this._onPressButton(2)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Load Game</Text>
          </View>
        </TouchableOpacity>

        {/* Exit
        <TouchableOpacity onPress={() => this._onPressButton(3)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Exit</Text>
          </View>
        </TouchableOpacity>
        */}

        {/* Report Bug */}
        <TouchableOpacity onPress={() => this._onPressButton(4)}>
          <View>
            <Text style={{color: '#4990e2', fontSize: 17, margin: 20}}>Report a bug?</Text>
          </View>
        </TouchableOpacity>

      </View>
    );

  }

  _onPressButton(num) {
    switch (num) {
        case 1: //New Game
            this.props.navigation.navigate('Detail');
          break;
        case 2: //Load Game
            console.log('TODO: load game');
          break;
        case 3: //Exit
            console.log('TODO: exittttttt');
            handleBackButtonClick();
          break;
        case 4: //Report a Bug
            console.log('TODO: report bug');
          break;
        default: //Other
            Alert.alert('Unknown operation detected. Please contact developer.');
          break;
    }
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

export default StackNavigator({
    Main: {screen: App},
    Detail: {screen: MapUI }
});

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

// AppRegistry.registerComponent('App',() => RootApp);

// console.disableYellowBox = true;