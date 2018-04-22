import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Button, Alert, View } from 'react-native';
import { AppLoading } from 'expo';


export default class DetailCtr extends React.Component {
    // state = {
    //     isReady: false,
    //     text: ''
    // };

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
        // if (!this.state.isReady) {
        //     return (
        //         <AppLoading
        //             startAsync={this._cacheResourcesAsync}
        //             onFinish={() => this.setState({ isReady: true })}
        //             onError={console.warn}
        //         />
        //     );
        // }

        // Main screen
        return (
            <View style={styles.mainContainer}>
                <View style={styles.mainTitle}>
                    <Text style={{fontSize: 21}}>Welcome</Text>
                </View>

            </View>
        );

    }

    _onPressButton() {
        // Alert.alert('Yo!')
    }

    // Holder function for demonstrating splash
    // async _cacheResourcesAsync() {
    //     var start = new Date().getTime();
    //     var end = start;
    //     while(end < start + 0) {
    //         end = new Date().getTime();
    //     }
    // }
}

const styles = StyleSheet.create({
    mainTitle: {
        height: 80,
        justifyContent: 'center',
    },

    mainContainer: {
        flex: 1,
        backgroundColor: '#3f4',

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

module.exports = DetailCtr;
