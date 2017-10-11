/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { AppRegistry, View, Text, StyleSheet, Button } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers  from './modules/redux/reducer';
import AppWithNavigationState from './modules/navigation/';
// class Login extends React.Component {
//   render(){
//   return (
//     <View>
//         <Text>This is Login Scene</Text>
//         <Button onPress={() => this.props.navigation.navigate('Drawer')} title='Login' >Login</Button>
//     </View>
//   )
// }
// }

// const App = (props) => {

//     // return (
//     //   <Router>
//     //     <Scene key='root'>
//     //       <Scene key='login' component={Login} title='Login' /> 
//     //       <Scene key='drawer' component={DrawerLayout}>
//     //           <Scene key='home' component={Home} title='Home'/>
//     //       </Scene>
//     //     </Scene>
//     //   </Router>
//     // )
//     return (

//     )
//   }
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
export default class Root extends React.Component{
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyCBujKYrpg62g9mQw55qSA3rk3i8I7b1pg",
      authDomain: "favoritevideos-f35d8.firebaseapp.com",
      databaseURL: "https://favoritevideos-f35d8.firebaseio.com",
      projectId: "favoritevideos-f35d8",
      storageBucket: "favoritevideos-f35d8.appspot.com",
      messagingSenderId: "316161007604"
    };
    firebase.initializeApp(config);
  }

  render(){
    return(
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}





// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

