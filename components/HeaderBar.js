import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Hamburger } from './Hamburger';

export const HeaderBar = ({ headerTitle, onMenuButtonPress }) => {
    return(
        <View style={styles.container}>
            <View style={styles.leftInnerContainer}>
                <Text style={styles.textStyle}>{headerTitle}</Text>
            </View>
            <View style={styles.rightInnerContainer}>
                <Hamburger onMenuButtonPress={onMenuButtonPress} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: 'rgba(112, 48, 209, 1)',
        flexDirection: 'row',
    },
    leftInnerContainer: {
        flex: 0.8,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginLeft: 5,
        marginBottom: 5,
    },
    rightInnerContainer: {
        flex: 0.2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 5,
        marginBottom: 5,
    },
    textStyle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    }
})