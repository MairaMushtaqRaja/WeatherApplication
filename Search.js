import { StyleSheet, Text, View, TextInput,TouchableOpacity,Alert } from 'react-native'
import React, { useState,useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Search = ({fetchWeatherData}) => {
    const [cityName, setCityName] = useState('');
    return (
        <View style={{ backgroundColor: "skyblue", flex: 1 }}>

            <View style={styles.searchbar}>
                <Icon name="search" size={23} color="#191970" style={{marginLeft:20 }} onPress={()=>fetchWeatherData(cityName)}></Icon>
                <TextInput placeholder='Search for CityName' value={cityName} onChangeText={(text) => setCityName(text)} style={{ marginLeft: 50 }}></TextInput>

            </View>
            
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchbar: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 35,
        marginLeft: 25,
        borderWidth: 1,
        borderRadius: 45,
        width: 350,
        height: 50,
        borderColor: "lightgray",
        paddingHorizontal: 6,
        backgroundColor: "lightgray"
    },
    
})