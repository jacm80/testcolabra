import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { container } from '../../../styles/containers';
import { textInputStyle } from '../../../styles/textinputs';
import { CustomButton } from '../../Commons';
import UserForm from '../components/UserForm';

import { setFieldUser, createUser } from '../actions/userActions';

class UserScreen extends Component {

	static navigationOptions = { header: false }

	render() {
		const { user, setFieldUser, createUser, createdUser, errorUser } = this.props;
		return (
			<UserForm
				user={user}
				setFieldUser={setFieldUser}
				createUser={createUser}
				createdUser={createdUser}
				errorUser={errorUser}
			/>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setFieldUser: (payload) => dispatch(setFieldUser(payload)),
		createUser: (user) => dispatch(createUser(user))
	}
};

const mapStateToProps = (state, ownProps) => {
	console.log('state', state);
	return {
		user: state.user,
		createdUser: state.createdUser.created,
		errorUser: state.errorUser
	}
};

UserScreen.propTypes = {
	user: PropTypes.object,
	setFieldUser: PropTypes.func,
	createUser: PropTypes.func,
	createdUser: PropTypes.bool,
	errorUser: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);