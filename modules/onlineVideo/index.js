import React from 'react';
import { View, Text } from 'react-native';
import { HeaderBar } from '../../components/HeaderBar'; 

export default class OnlineVideo extends React.Component{
    static navigationOptions = (navigation) => ({
        header: <HeaderBar headerTitle='Online Video' onMenuButtonPress={() => navigation.navigation.navigate('DrawerOpen')} />
    })
    render(){
        return(
            <View>
                <Text>This is Online Video Sceen</Text>
            </View>
        )
    }
}