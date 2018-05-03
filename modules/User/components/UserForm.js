import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { container } from '../../../styles/containers';
import { textInputStyle } from '../../../styles/textinputs';
import { CustomButton } from '../../Commons';

const UserForm = ({ user, setFieldUser, createUser}) => {
   
   const _createUser = () => {
      createUser(user);
   }

   return (
      <View style={{ ...container, flex: 1 }}>
         <View style={{ flex: 8, alignSelf: 'stretch', justifyContent: 'center' }}>
            <TextInput 
               placeholder={'First name'} 
               style={textInputStyle} 
               onChangeText={(text) => setFieldUser({ first_name: text })}
               />
            <TextInput 
               placeholder={'Last name'} 
               style={textInputStyle} 
               onChangeText={(text) => setFieldUser({ last_name: text })}
               />
            <TextInput 
               placeholder={'Email'}
               style={textInputStyle}
               autoCapitalize={'none'}
               autoCorrect={false}
               onChangeText={(text) => setFieldUser({ email: text })}
               />
            <TextInput 
               placeholder={'Phone'} 
               style={textInputStyle} 
               onChangeText={(text) => setFieldUser({ phone: text })}
               />
            <TextInput 
               placeholder={'Username'} 
               style={textInputStyle}
               autoCapitalize={'none'}
               autoCorrect={false}
               onChangeText={(text) => setFieldUser({ username: text })}
               />
         </View>
         <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <CustomButton label={'Save'} onPressButton={() => _createUser() } />
         </View>
      </View>
   );
};

UserForm.propTypes = {
   user: PropTypes.object,
   setFieldUser: PropTypes.func,
   createUser: PropTypes.func
};

export default UserForm;