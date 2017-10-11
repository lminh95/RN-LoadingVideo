import React from 'react';
import { NavigationActions, DrawerItems } from 'react-navigation';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import DrawerItem from './drawerItem';
import { selectItem } from './actions';

class Drawer extends React.Component{
    navigate = (routeName, screen) => {
        this.props.selectItem(screen);
        const action = NavigationActions.navigate({
            routeName: routeName
        })
        
        this.props.navigation.dispatch(action) 
    }
    render(){
        return(
            <ImageBackground source={require('../../images/Background.jpg')} style={styles.container}>
                    <View style={styles.UpInnerContainer}>
                        <Image source={{ uri: 'https://cdn-images-1.medium.com/max/1600/1*WcRnU2ERqYHZBKBQ0zXCvg.png' }} style={{ width: 150, height: 150, resizeMode: 'stretch' }}/>
                    </View>
                    <View style={styles.DownInnerContainer}>
                        <DrawerItem name='Collection' screen='collection' onPress={() => this.navigate('Collection', 'collection')} />
                        <DrawerItem name='Online Video' screen='onlineVideo' onPress={() => this.navigate('OnlineVideo', 'onlineVideo')} />
                    </View>
                
            </ImageBackground>           
        )
    }
}



export default connect(null, { selectItem })(Drawer)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column'
    },
    UpInnerContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    DownInnerContainer: {
        flex: 0.7,
        justifyContent: 'flex-start',
    },
    imageStyles: {
        flex: 1
    },

})