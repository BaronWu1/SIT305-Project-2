import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Button, Alert, View } from 'react-native';
import { AppLoading } from 'expo';

//export default class MapUI extends React.Component {
class MapUI extends React.Component {

  static navigationOptions = {
    headerLeft: null
  };

  componentWillMount() {
    console.log(this.props.navigation.state.params.store.getState().gameState)
  }

  // Main render function
  render() {
    // Main screen
    return (
      <View style={styles.mainContainer}>
        <View style={styles.mainTitle}>
          <Text style={{fontSize: 15}}>Welcome - {this.props.navigation.state.params.store.getState().gameState}</Text>
        </View>

        <View style={styles.mainMap}>

        </View>

        <View style={styles.mainControl}>
          <View style={styles.mainControlArrow}>

            {/* Up key */}
            <TouchableOpacity onPress={() => this._onMove(1)}>
              <View style={styles.up}><Text style={styles.arrowKey}>↑</Text></View>
            </TouchableOpacity>

            <View style={styles.leftRight}>

              {/* marginLeft key */}
              <TouchableOpacity onPress={() => this._onMove(2)}>
                <View style={styles.left}><Text style={styles.arrowKey}>←</Text></View>
              </TouchableOpacity>

              {/* Right key */}
              <TouchableOpacity onPress={() => this._onMove(3)}>
                <View style={styles.right}><Text style={styles.arrowKey}>→</Text></View>
              </TouchableOpacity>

            </View>

            {/* Up key */}
            <TouchableOpacity onPress={() => this._onMove(4)}>
              <View style={styles.down}><Text style={styles.arrowKey}>↓</Text></View>
            </TouchableOpacity>

          </View>

          <View style={styles.mainControlMenu}>

          </View>

        </View>

      </View>
    );
  }

  _onMove(key) {
    switch (key) {
      // Up
      case 1:
        console.log('up')
        break

      // Left
      case 2:
        console.log('left')
        break

      // Right
      case 3:
        console.log('right')
        break

      // Down
      case 4:
        console.log('down')
        break

      // Catch all
      default:
          Alert.alert('Unknown operation detected. Please contact developer.')
        break
    }
  }
}

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

  mainTitle: {
    height: 15,
    // backgroundColor: '#000',
  },

  mainMap: {
    // flex: 1,
    width: 350,  // 7 ?
    height: 500,  // 5 ?
    backgroundColor: 'skyblue',
  },

  mainControl: {
    width: 350,
    backgroundColor: 'steelblue',
    flexDirection: 'row',
  },

  mainControlArrow: {
    height: 200,
    width: 200,
  },

  mainControlMenu: {
    flex: 1,
    backgroundColor: 'blue',
  },

  up: {
    marginLeft: 66,
    height: 66,
    width: 68,
  },

  leftRight: {
    flexDirection: 'row',
    height: 68,
  },

  left: {
    width: 66,
  },

  right: {
    marginLeft: 68,
    width: 66,
  },

  down: {
    marginLeft: 66,
    height: 66,
    width: 68,
  },

  arrowKey: {
    fontSize: 55,
    // backgroundColor: 'black',
    color: 'lightgray',
  },

});

module.exports = MapUI;
