import firebase from 'firebase';

export const EmailChange = (email) => {
    return {
        type: 'EMAIL_CHANGE',
        data: email
    }
}

export const PasswordChange = (password) => {
    return {
        type: 'PASSWORD_CHANGE',
        data: password
    }
}



export const SignIn = (email, password, navigation) => {
    console.log(email)
    return (dispatch) => {
        dispatch({ type: 'LOADING' })
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            navigation.navigate('DrawerStack')
            dispatch({ 
            type: 'LOGIN_SUCCESS',
            data: user 
        })})
        .catch(error => dispatch({ type: 'LOGIN_FAIL' }))
    }
}  