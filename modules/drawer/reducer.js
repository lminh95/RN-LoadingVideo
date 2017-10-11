
const initialState = { selectedScreen: 'collection' }
export const drawerReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case 'SELECT_ITEM': 
            return {
                ...state, 
                selectedScreen: action.screen
            }
        default: return {...state};
    }
}