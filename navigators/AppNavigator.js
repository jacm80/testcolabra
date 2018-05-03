import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../modules/Login/screens/LoginScreen';
import HomeScreen from '../modules/Home/screens/HomeScreen';
import UserScreen from '../modules/User/screens/UserScreen';
// import BackToLogin from '../modules/login/screens/BackToLogin';
// import ForgotPassword from '../modules/login/screens/ForgotPassword';

// import HowWorkScreen from '../modules/account/screens/HowWork';
// import MuverProfileScreen from '../modules/account/screens/MuverProfile';
// import BankAccount from '../modules/account/screens/BankAccount';
// import UploadProfilePicture from '../modules/account/screens/UploadProfilePicture'

// import HomeDrawer from '../modules/home/screens/HomeDrawer';
// import CalendarMuver from '../modules/calendar/screens/CalendarMuver';
// import JobsMuver from '../modules/calendar/screens/JobsMuver';

// import MuverMapDirectionView from '../modules/map/screens/MuverMapDirectionView';
// import MuverMapView from '../modules/map/screens/MuverMapView';
// import CaptureSignatureScreen from '../modules/captureSignature/screens/VisorCaptureSignatureView';

export const AppNavigator = StackNavigator({
    //--- login -------------------------------------
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    User: { screen: UserScreen }
    // BackToLogin: { screen: BackToLogin },
    // ForgotPassword: { screen: ForgotPassword },
    // //--- account -----------------------------------
    // Profile: { screen: MuverProfileScreen },
    // Vehicle: { screen: HowWorkScreen },
    // ProfilePicture: { screen: UploadProfilePicture },
    // BankAccount: { screen: BankAccount },
    // //--- Home --------------------------------------
    // Calendar: { screen: CalendarMuver },
    // JobMuver: { screen: JobsMuver },
    // Routes: { screen: MuverMapDirectionView },
    // Map: { screen: MuverMapView },
    // Signature: { screen: CaptureSignatureScreen },
});

// export const DrawerStack = DrawerNavigator( AppNavigator, { } );

class AppWithNavigationState extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    _actionEventSubscribers = new Set();

    _addListener = (eventName, handler) => {
        eventName === 'action' && this._actionEventSubscribers.add(handler);
        return {
            remove: () => {
                this._actionEventSubscribers.delete(handler);
            },
        };
    };

    componentDidUpdate(lastProps) {
        const lastState = lastProps.nav;
        this._actionEventSubscribers.forEach(subscriber => {
            subscriber({
                lastState: lastProps.nav,
                state: this.props.nav,
                action: this.props.lastAction,
            });
        });
    }

    render() {
        const { dispatch, nav } = this.props;
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch,
                    state: nav,
                    addListener: this._addListener,
                })}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    lastAction: state.lastAction,
});

export default connect(mapStateToProps)(AppWithNavigationState);