import { App } from './index'; 

const initialState = App.router.getStateForAction(App.router.getActionForPathAndParams('Login'));

export const navigationReducer = (state = initialState, action) => {
    const nextState = App.router.getStateForAction(action, state);
    return nextState || state;
} 

