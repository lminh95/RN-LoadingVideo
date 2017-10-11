import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Hamburger = ({ onMenuButtonPress }) => {
    return (
        <TouchableOpacity onPress={(onMenuButtonPress)}>
            <Icon name='navicon' style={{ marginRight: 5 }} color='#fff' size={35} />
        </TouchableOpacity>
    )
}