
const initialState = { email: '', password: '', isLoading: false, user: {}, error: '' }
export const loginReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type)
    {
        case 'EMAIL_CHANGE': {
            return {...state, email: action.data};
        }
        case 'PASSWORD_CHANGE': {
            return {...state, password: action.data};
        }
        case 'LOADING': {
            return {...state, isLoading: !state.isLoading, error: ''}   
        }
        case 'LOGIN_SUCCESS': {
            return {...state, user: action.data, email: '', password: '', isLoading: !state.isLoading, error: ''}
        }
        case 'LOGIN_FAIL': {
            return {...state, password: '', error: 'Login Fail!', isLoading: !state.isLoading}
        }
        default: {
            return state;
        }
    }
}