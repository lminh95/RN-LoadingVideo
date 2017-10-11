

export const keywordChange = (keyword) => {
    return {
        type: 'KEYWORD_CHANGE',
        data: keyword
    }
}

export const fetchNextPage = (keyword, nextPageToken) => {
    return(dispatch) => {
         dispatch({ type: 'LOADING' })
         return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+keyword+'&key=AIzaSyBW7YXZRBhYSQLlKrOsKj0VnGpw8OUOmws&maxResults=10&type=video&pageToken='+ nextPageToken)
         .then(response => {
             if(response.status === 200){
                 response.json().then(data => 
                 dispatch({                   
                     type: 'FETCH_SUCCESS',
                     data: data
                 }))
             }
         })
    }
}

export const fetchData = (keyword) => {
    console.log(keyword);
    return(dispatch) => {
        dispatch({ type: 'LOADING' })
        return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+keyword+'&key=AIzaSyBW7YXZRBhYSQLlKrOsKj0VnGpw8OUOmws&maxResults=10&type=video')
        .then(response => {
            if(response.status === 200){
                response.json().then(data => 
                dispatch({                   
                    type: 'FETCH_SUCCESS',
                    data: data
                }))
            }
        })
    }
}
        
