import _ from 'lodash';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';

import { container } from '../../../styles/containers';
import { textInputStyle } from '../../../styles/textinputs';
import { CustomButton } from '../../Commons';

const UserForm = ({ user, setFieldUser, createUser, createdUser, errorUser }) => {

	const _createUser = () => { createUser(user); }

	return (
		<View style={{ ...container, flex: 1 }}>
			<View style={{ flex: 8, alignSelf: 'stretch', justifyContent: 'center' }}>
				<TextInput
					placeholder={'First name'}
					style={textInputStyle}
					onChangeText={(text) => setFieldUser({ first_name: text })}
					value={user.first_name}
				/>
				<TextInput
					placeholder={'Last name'}
					style={textInputStyle}
					onChangeText={(text) => setFieldUser({ last_name: text })}
					value={user.last_name}
				/>
				<TextInput
					placeholder={'Email'}
					style={textInputStyle}
					autoCapitalize={'none'}
					autoCorrect={false}
					onChangeText={(text) => setFieldUser({ email: text })}
					value={user.email}
				/>
				<TextInput
					placeholder={'Phone'}
					style={textInputStyle}
					onChangeText={(text) => setFieldUser({ phone: text })}
					value={user.phone}
				/>
				<TextInput
					placeholder={'Username'}
					style={textInputStyle}
					autoCapitalize={'none'}
					autoCorrect={false}
					onChangeText={(text) => setFieldUser({ username: text })}
					value={user.username}
				/>
				<TextInput style={textInputStyle}
					placeholder={'Password'}
					autoCapitalize={'none'}
					secureTextEntry={true}
					autoCorrect={false}
					onChangeText={(text) => setFieldUser({ password: text })}
					value={user.password}
				/>
				<TextInput style={textInputStyle}
					placeholder={'Confirm Password'}
					autoCapitalize={'none'}
					secureTextEntry={true}
					autoCorrect={false}
					onChangeText={(text) => setFieldUser({ confirm_password: text })}
					value={user.password}
				/>
				{ createdUser && Alert.alert('Success', 'Usuario creado con exito!') }
				{ !_.isEmpty(errorUser) && Alert.alert('Error', errorUser.error) }
			</View>
			<View style={{ flex: 1, alignSelf: 'stretch' }}>
				<CustomButton label={'Save'} onPressButton={() => _createUser()} />
			</View>
		</View>
	);
};

UserForm.propTypes = {
	user: PropTypes.object,
	setFieldUser: PropTypes.func,
	createUser: PropTypes.func,
	createdUser: PropTypes.bool,
	errorUser: PropTypes.object
};

export default UserForm;