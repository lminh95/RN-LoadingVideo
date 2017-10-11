import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const FlatListItem = ({item, onItemPress}) => {
    return(
        <TouchableOpacity style={styles.containerStyle} onPress = {onItemPress} >
            <View style={styles.leftInnerContainerStyle}>
                <Image source={{ uri: item.snippet.thumbnails.high.url }} style={{ width: 100, height: 50 }}/>
            </View>
            <View style={styles.rightInnerContainerStyle}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.textStyles}>{item.snippet.title}</Text>
            </View>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(230, 230, 230)',
        height: 70,
        padding: 5,
    },
    leftInnerContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.3
    },
    rightInnerContainerStyle: {
        marginRight: 5,
        marginLeft: 5,
        flexDirection: 'row',
        flex: 0.7,
    },
    textStyles: {
    }
})
