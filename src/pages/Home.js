import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native'; // mobile

export function Home() {
    return (
        <Fragment>
            <View style={slyles.container}>
                <Text>React Native</Text>
            </View>
            <Text>Ignite</Text>
        </Fragment>
    );
}

const slyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});