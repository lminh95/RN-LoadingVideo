

const initialState = {videos: [], keyword: '', isLoading: false}
export const collectionReducer = (state = initialState, action) =>
{
    console.log(action);
    switch(action.type)
    { 
        case 'LOADING':{
            return {...state, isLoading: !state.isLoading}
        }
        case 'FETCH_SUCCESS': {
            return {...state, videos: action.data, isLoading: false}
        }
        case 'KEYWORD_CHANGE': {
            return {...state, keyword: action.data}
        }     
        default: return {...state}
    }
}