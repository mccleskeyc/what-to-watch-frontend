export const getMovies = () => {
    return dispatch => {
      dispatch({ type: "LOADING" })
      fetch("http://localhost:3001/movies")
        .then(resp => resp.json())
        .then(movies => dispatch({ type: "SET_MOVIES", movies }))
    }
  }

  export const addMovie = (movie, history) => {
    return dispatch => {
      fetch('http://localhost:3001/movies', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ movie })
      })
        .then(resp => resp.json())
        .then(movie => {
          dispatch({ type: "ADD_MOVIE", movie })
          history.push("/movieindex")
        })
    }
  }