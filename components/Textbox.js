import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width * 0.9;
export const Textbox = ({iconName, iconColor, style, autoCorrect, onChangeText, placeholder, placeholderTextColor, secureTextEntry, selectionColor}) => {
        return(
            <View style={styles.container}>
                <Icon name={iconName} color={iconColor} size={30} />
                <TextInput  style={[styles.inputStyle, style]}
                            autoCorrect = {autoCorrect}
                            onChangeText = {onChangeText} 
                            placeholder = {placeholder}
                            placeholderTextColor = {placeholderTextColor}
                            secureTextEntry = {secureTextEntry}
                            selectionColor = {selectionColor}
                />
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        width: width,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderColor: 'rgba(125, 66, 244, 1)',
        borderWidth: 1,
        borderRadius: 40,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        flex: 0.9,
        // backgroundColor: 'red',
        color: '#fff',
        fontSize: 18,
        marginLeft: 10
    }
})