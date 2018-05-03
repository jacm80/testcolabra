import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { containerButtons, buttonStyle } from '../../styles/buttons'

const CustomButton = ({ label, onPressButton }) => {
    return (
        <View style={containerButtons}>
            <TouchableOpacity style={buttonStyle} onPress={() => onPressButton() }>
                <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold', color: 'white' }}>{ label }</Text>
            </TouchableOpacity>
        </View>
    );
};

export { CustomButton };