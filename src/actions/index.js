export const getMovies = () => {
    return dispatch => {
      dispatch({ type: "LOADING" })
      fetch("http://localhost:3001/movies")
        .then(resp => resp.json())
        .then(movies => dispatch({ type: "SET_MOVIES", movies }))
    }
  }