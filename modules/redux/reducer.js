import { combineReducers } from 'redux';
import { navigationReducer } from '../navigation/reducer';
import { drawerReducer } from '../drawer/reducer';
import { collectionReducer } from '../collection/reducer';
import { loginReducer } from '../auth/login/reducer';

export default combineReducers({
    navigationState: navigationReducer,
    drawerState: drawerReducer,
    collectionState: collectionReducer,
    loginState: loginReducer,
})
