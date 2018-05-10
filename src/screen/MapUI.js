import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Button, Alert, View } from 'react-native';
import { AppLoading } from 'expo';


export default class MapUI extends React.Component {

    static navigationOptions = {
        // headerLeft: null
    };

    // Main render function
    render() {
        // Main screen
        return (
            <View style={styles.mainContainer}>
                <View style={styles.mainTitle}>
                    <Text style={{fontSize: 21}}>Welcome</Text>
                </View>
            </View>
        );
    }
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

});

module.exports = MapUI;
