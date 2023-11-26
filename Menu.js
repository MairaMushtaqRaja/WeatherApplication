import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
const Menu = ({navigation}) => {
  const handleBackPress = async () => {
    navigation.navigate('Options');
  };
  return (
    <View style={{ backgroundColor: "skyblue", flex: 1 }}>
      <TouchableOpacity  activeOpacity={0.7} style={styles.menu} onPress={handleBackPress}>
        <Icon name="menu-outline" size={30} color="white"></Icon>
      </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  menu:{
    marginTop:20,
    marginLeft:30,
    
  }
})