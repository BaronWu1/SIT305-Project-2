import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Button, Alert, View ,AppRegistry} from 'react-native';
import { AppLoading } from 'expo';
import { StackNavigator } from 'react-navigation';
import MapUI from './MapUI';

// Main function
class AppMenu extends React.Component {
  // State of loading (for splash screen to load before screen ready)
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

        {/* Report Bug */}
        <TouchableOpacity onPress={() => this._onPressButton(3)}>
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
            this.props.navigation.navigate('Map')
          break
        case 2: //Load Game
            Alert.alert('load game')
            console.log('TODO: load game')
          break
        case 3: //Report a Bug
            Alert.alert('report bug')
            console.log('TODO: report bug')
          break
        default: //Other
            Alert.alert('Unknown operation detected. Please contact developer.')
          break
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

export default StackNavigator(
  {
    Menu: {screen: AppMenu},
    Map: {screen: MapUI },
  },
  {
    navigationOptions: {
      headerTransparent: true,
      headerStyle: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 0
      }
    },
  }
);

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
