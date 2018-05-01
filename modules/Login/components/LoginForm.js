import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const LoginForm = ({ email, password, loginFailed, setField, authenticate, navigator }) => {
   
   const { inputStyle, containerMain, containerHeader, containerButtons, containerInput, buttonStyle } = styles;
   const onLogin = () => {
       console.log('LoginForm ::: onLogin >>>>> ',{ email, password });
       authenticate({ email, password });
    }
   
   return(
        <View style={containerMain}>
            <View style={containerHeader}>
                <Text>Header</Text>
            </View>
            <View style={containerInput}>
                <TextInput style={inputStyle}
                    placeholder={'email'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    onChangeText={(text) => setField({ email: text })}
                    autoFocus />
                <TextInput style={inputStyle}
                    placeholder={'password'}
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                    autoCorrect={false}
                    onChangeText={(text) => setField({ password: text })}
                />
                {
                loginFailed &&
                <View>
                    <Text style={{textAlign: 'center', color: 'red'}}>El usuario no existe</Text>
                </View>
                }
            </View>
            <View style={containerButtons}>
                <TouchableOpacity style={buttonStyle} onPress={() => onLogin()}>
                    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold', color: 'white' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
} 

LoginForm.propTypes = {
   username: PropTypes.string,
   password: PropTypes.string,
   loginFailed: PropTypes.bool,
   navigator: PropTypes.object,
   setField: PropTypes.func,
   authenticate: PropTypes.func
}

const styles = {
   containerMain: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40,
      paddingTop: 60,
      backgroundColor: '#b3d9ff'
      //   borderColor: 'yellow',
      //   borderWidth: 1,
   },
   containerHeader: {
      flex: 1,
      //  height: 200, 
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      //  backgroundColor: 'yellow', 
      //  borderColor: 'red',
      //  borderWidth: 1
   },
   containerButtons: {
      flex: 1,
      // height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      // backgroundColor: 'yellow',
      // borderColor: 'red',
      // borderWidth: 1
   },
   containerInput: {
      flex: 6,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      //  backgroundColor: 'yellow',
      //  borderColor: 'red',
      //  borderWidth: 1
   },
   inputStyle: {
      alignSelf: 'stretch',
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
      backgroundColor: 'white',
      borderColor: '#e3e3e3',
      borderWidth: 1,
   },
   buttonStyle: {
      flex: 1,
      backgroundColor: 'blue',
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 15,
      marginBottom: 20
   }
}

export { LoginForm }