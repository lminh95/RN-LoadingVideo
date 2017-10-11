import React from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width * 0.9;
export const Button = ({ onPress, title, style }) => {
    return(
        <View style={styles.container}>
            <TouchableHighlight 
                onPress = {onPress}
                style = {[styles.defaultStyle, style]}
                underlayColor = 'rgba(30, 27, 70, 1)'
            >
                <Text style={styles.textStyle}>{title}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: width,
        height: 50,
    },
    defaultStyle: {
        borderColor: 'rgba(30, 27, 70, 1)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'rgba(30, 27, 70, 0.7)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
    }
})