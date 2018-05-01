import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setField, authenticate } from '../actions/loginActions';
import { LoginForm } from '../components/LoginForm';

class LoginScreen extends Component {
    
    static navigationOptions = { header: false }
    
    render() {
      
      const { email, password, loginFailed, setField, authenticate} = this.props;

      return (
            <LoginForm
               email={email}
               password={password}
               setField={setField}
               authenticate={authenticate}
               loginFailed={loginFailed}
            />
      );
    }
}

LoginScreen.propTypes = {
   email: PropTypes.string,
   password: PropTypes.string,
   loginFailed: PropTypes.bool,
   navigator: PropTypes.object,
   setField: PropTypes.func,
   authenticate: PropTypes.func
}

const mapStateToProps = (state) => {
   console.log('mapStateToProps :: state', state);
   return {
      email: state.login.email,
      password: state.login.password,
      loginFailed: state.loginFailed.loginFailed
   }
}

const mapDispatchToProps = dispatch => ({
   setField: (payload) => { 
      dispatch(setField(payload)) 
   },
   authenticate: (payload) => {
      dispatch(authenticate(payload))
   }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
