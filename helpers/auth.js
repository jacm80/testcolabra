import { AsyncStorage } from 'react-native';
import _ from 'lodash';

import { URL_GET_TOKEN } from '../constants/globals';

const _prefix = '@user';

const setUser = (user) => {
   try {
      const _user = _.map(user, (key, value) => {
         const _key = `${_prefix}:${key}`;
         return { _key: value };
      });
      const userPairs = _.toPairs(user);
      AsyncStorage.multiSet(userPairs, (err) => {
         if (err) { console.log('err', err); }
      });
   } catch (error) {
      console.log('error', error);
   }
}

const getUser = () => {
   try {
      const keys = ['first_name', 'last_name', 'email', 'phone', 'username'];
      let _user = { };
      _.map(keys, key => {
         const obj = { key: AsyncStorage.getItem(`${_prefix}:{key}`) };
         _user = { ..._user,  ...obj };
      });
      return _user;
   } catch (error) {
      console.log('error', error);
   }
}

const getToken = async (user) => {
   const headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
   // console.log('user', user);
   // console.log('headers', headers);
   // console.log('URL_GET_TOKEN', URL_GET_TOKEN);
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
      // console.log('responseJson >>>>>>>', responseJson);
      if (responseJson.success){
         const _userSafe = { ...responseJson.user };
         delete _userSafe.updatedAt;
         delete _userSafe.createdAt;
         _userSafe.first_name = (_userSafe.first_name) ? _userSafe.first_name : '';
         _userSafe.last_name = (_userSafe.last_name) ? _userSafe.last_name : '';
         _userSafe.phone = (_userSafe.phone) ? _userSafe.phone : '';
         _userSafe.id = _userSafe.id ? _userSafe.id.toString() : '';
         // console.log('>>>>>>>>>>>>> _userSafe', _userSafe);
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