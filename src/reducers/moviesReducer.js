const initialState = {
    movies: [],
    loading: true
}
const moviesReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
            ...state,
            loading: true
            }
        case "SET_MOVIES":
            return {
            ...state,
            loading: false,
            movies: action.movies
            }
        case "ADD_MOVIE" :
            return {
                ...state,
                movies: [...state.movies, action.movies]
            }
        default:
            return state;
    }
}

export default moviesReducer;