import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'

const Options = () => {
    return (
        <View style={{ backgroundColor: "skyblue", flex: 1 }}>
            <View style={styles.header}>
                <Text>Hello</Text>
            </View>
        </View>
    )
}

export default Options

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        width: 250,
        height: 650,
        marginTop: 78,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderLeftColor:""

    }
})