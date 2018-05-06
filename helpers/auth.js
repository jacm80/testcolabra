import { AsyncStorage } from 'react-native';
import _ from 'lodash';

import { URL_GET_TOKEN } from '../constants/globals';

const _prefix = '@user';

const setUser = (user) => {
	try {
		const _user = _.mapKeys(user, (v,k) => `${_prefix}:${k}`);
		const _userPairs = _.toPairs(_user);
		console.log('setUser :: _userPairs', _userPairs);
		AsyncStorage.multiSet(_userPairs, (err) => {
			if (err) { console.log('err', err); }
		});
	} catch (error) {
		console.log('error', error);
	}
}

const getUser = async() => {
	try {
		return {
			id: await AsyncStorage.getItem(`${_prefix}:id`),
			first_name: await AsyncStorage.getItem(`${_prefix}:first_name`),
			last_name: await AsyncStorage.getItem(`${_prefix}:last_name`),
			phone: await AsyncStorage.getItem(`${_prefix}:phone`),
			username: await AsyncStorage.getItem(`${_prefix}:username`),
			email: await AsyncStorage.getItem(`${_prefix}:email`),
			password: await AsyncStorage.getItem(`${_prefix}:password`),
			token: await AsyncStorage.getItem(`${_prefix}:token`),
		}
	} catch (error) {
		console.log('error', error);
	}
}

const getToken = async (user) => {
	const headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
	try {
		let response = await fetch(
			URL_GET_TOKEN,
			{
				method: 'post',
				headers,
				body: JSON.stringify(user),
			}
		);
		let responseJson = await response.json();
		console.log('>>>>>>> responseJson', responseJson);
		if (responseJson.success) {
			const _userSafe = { ...responseJson.user };
			delete _userSafe.updatedAt;
			delete _userSafe.createdAt;
			_userSafe.first_name = (_userSafe.first_name) ? _userSafe.first_name : '';
			_userSafe.last_name = (_userSafe.last_name) ? _userSafe.last_name : '';
			_userSafe.phone = (_userSafe.phone) ? _userSafe.phone : '';
			_userSafe.id = _userSafe.id ? _userSafe.id.toString() : '';
			_userSafe.token = responseJson.token;
			setUser(_userSafe);
			return true;
		}
		return false;
	} catch (error) {
		console.error(error);
		return false;
	}
}

export {
	setUser,
	getUser,
	getToken
};