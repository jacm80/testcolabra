import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { textInputStyle } from '../../../styles/textinputs';
import { CustomButton } from '../../Commons';

const LoginForm = ({ email, password, loginFailed, setField, authenticate }) => {
   
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
               <TextInput style={textInputStyle}
                    placeholder={'email'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    onChangeText={(text) => setField({ email: text })}
                    value={email}
                    autoFocus />
               <TextInput style={textInputStyle}
                    placeholder={'password'}
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                    autoCorrect={false}
                    onChangeText={(text) => setField({ password: text })}
                    value={password}
                />
                {
                loginFailed &&
                <View>
                    <Text style={{textAlign: 'center', color: 'red'}}>El usuario no existe</Text>
                </View>
                }
            </View>
            <CustomButton onPressButton={onLogin} label={'Login'} />
        </View>
    )
} 

LoginForm.propTypes = {
   username: PropTypes.string,
   password: PropTypes.string,
   loginFailed: PropTypes.bool,
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