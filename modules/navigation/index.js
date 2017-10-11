import React from 'react';
import { StackNavigator, DrawerNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Login from '../auth/login';
import Collection from '../collection';
import VideoDetail from '../collection/detail'
import OnlineVideo from '../onlineVideo';
import Drawer from '../drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const DrawerStack = DrawerNavigator({
    Collection: { screen:  StackNavigator({ 
                                VideoList: { screen: Collection},
                                VideoDetail: { screen: VideoDetail }                          
                            })},
    OnlineVideo: { screen: StackNavigator({ 
                                scene2: {screen: OnlineVideo}},
                            )}
}, {
    drawerWidth: 250,
    drawerPosition: 'right',
    contentComponent: Drawer
})
  
export const App = StackNavigator({
    Login: {screen: Login},
    DrawerStack: {screen: DrawerStack}
},{
    headerMode: 'none',
    navigationOptions: ({navigation}) => ({
      headerLeft: null,
      gesturesEnabled: false,
    })
})

class AppWithNavigationState extends React.Component{
    render(){
        return(
            <App navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.navigationState
            })} />
        )
    }
    
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        navigationState: state.navigationState
    }
    
    
}
export default connect(mapStateToProps)(AppWithNavigationState);