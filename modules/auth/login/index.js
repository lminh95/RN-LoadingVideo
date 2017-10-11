import React from 'react';
import { View, Text, Input, ImageBackground, Image, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Textbox } from '../../../components/Textbox';
import { Button } from '../../../components/Button';
import { EmailChange, PasswordChange, SignIn } from './actions';

class Login extends React.Component{
    static navigationOptions = {
        header: null
    } 



    _onLoginButtonClick(){
        const { email, password } = this.props.auth
        this.props.SignIn(this.props.auth.email, this.props.auth.password, this.props.navigation)  
        // this.props.navigation.navigate('DrawerStack')
    }

    _renderButton(){
        if(this.props.auth.isLoading)
            return (
                <View style={styles.spinnerStyle}>
                    <ActivityIndicator size='large' />
                </View>
            )
        return <Button title='LOGIN' onPress={this._onLoginButtonClick.bind(this)} />
    }

    render(){
        return(
            <ImageBackground style={styles.mainContainer} source={require('../../../images/Background.jpg')}>               
                <StatusBar barStyle='light-content' />
                <View style={{flex: 1}}>
                    <View style={styles.headerContainer}>
                        <Image source={{ uri: 'https://cdn-images-1.medium.com/max/1600/1*WcRnU2ERqYHZBKBQ0zXCvg.png' }} style={{ width: 150, height: 150, resizeMode: 'stretch' }}/>
                    </View>
                    <View style={styles.infoContainer}>
                        <Textbox iconName='user' iconColor='rgba(96, 58, 161, 1)'
                                 placeholder='Username'
                                 placeholderTextColor='#fff'
                                 autoCorrect = {false}
                                 selectionColor = 'rgba(96, 58, 161, 1)'
                                 onChangeText = {(text) => this.props.EmailChange(text)}
                        />
                        <Textbox iconName='lock' iconColor='rgba(96, 58, 161, 1)'
                                 secureTextEntry
                                 placeholder='Password'
                                 placeholderTextColor='#fff'
                                 autoCorrect = {false}
                                 selectionColor = 'rgba(96, 58, 161, 1)'
                                 onChangeText = {(text) => this.props.PasswordChange(text) }        
                        />
                        <View><Text style={styles.errorTextStyle}>{this.props.auth.error}</Text></View>
                        {this._renderButton()}
                    </View>
                    <View style={styles.footerContainer} />
                </View> 
            </ImageBackground>              
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        flex: 1,
        // resizeMode: 'contain',
        // width: null,
        // height: null
    },
    headerContainer: {
        flex: 0.35,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    infoContainer: {
        flex: 0.35,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    footerContainer: {
        flex: 0.3
    },
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorTextStyle: {
        backgroundColor: 'transparent',
        color: 'rgba(255, 0, 0, 1)',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

const mapStateToProps = (state) => {
    return{
        auth: state.loginState,
    }
}

export default connect(mapStateToProps, { EmailChange, PasswordChange, SignIn })(Login)