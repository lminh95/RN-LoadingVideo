import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class DrawerItem extends React.Component{
    render(){
        var { props } = this
        if(this.props.screen === this.props.selectedScreen)
            return (
                <TouchableOpacity style={styles.containerActiveStyle} onPress={this.props.onPress}>
                    <Text style={styles.textActiveStyles}>{this.props.name}</Text>
                </TouchableOpacity>
            )
        return(
                <TouchableOpacity style={styles.containerStyle} onPress={this.props.onPress}>
                    <Text style={styles.textStyles}>{this.props.name}</Text>
                </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedScreen: state.drawerState.selectedScreen
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'transparent',
        height: 40,
        marginBottom: 5,
        justifyContent: 'center',
        marginRight: 15,
        marginLeft: 15,
        borderRadius: 4,
    },
    textStyles: {
        // color: 'rgba(112, 48, 209, 1)',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    containerActiveStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        height: 40,
        marginBottom: 5,
        justifyContent: 'center',
        marginRight: 15,
        marginLeft: 15,
        borderRadius: 4,
    },
    textActiveStyles: {
        color: 'rgba(112, 48, 209, 1)',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
    }
})

export default connect(mapStateToProps)(DrawerItem)

