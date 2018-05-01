import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {

   static navigationOptions = { header: false }

   render() {
      const { container, welcomeStyle } = styles;
      return (
         <View style={container}>
            <Text style={welcomeStyle}>Bienvenido !!</Text>
         </View>
      );
   }
}


const styles = {
   container: {
      flex: 1, 
      paddingTop: 60, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#b3d9ff'
   },
   welcomeStyle: {
      fontSize: 24, 
      fontWeight: 'bold' 
   }
}

export default HomeScreen;