const getData = async () => fetch('http://api.kvikmyndir.is/movies', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZmNmYjRkYjA2YjAxMzZmN2JmMjcwMjMiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IlJpY2hhcmQgRGF3c29uIFdvb2RoZWFkICIsImVtYWlsIjoiUmljaGFyZDE5QHJ1LmlzIiwidXNlcm5hbWUiOiJyaWNoYXJkMTkiLCJwYXNzd29yZCI6IiQyYSQwOCRGZE9RMVdTbmR4a3BkOExkeUVBbnhPVVA5aTcxa3lYWG81SExJTEJKWVlZUWw3OG5RNUFheSIsImRvbWFpbiI6ImxvY2FsaG9zdCIsIm1lc3NhZ2UiOiJzY2hvb2wiLCJpYXQiOjE2MDc2MzgxMDksImV4cCI6MTYwNzcyNDUwOX0.jOeHEjst7E2mGh-GhjZC03hcy1jDl-USl6BKGJZThgU',
  },
}).then((response) => response.json());

const getMoviesSuccess = (currentMovies, cinemaId) => ({
  type: 'getMovies',
  payload: currentMovies.filter(
    (movie) => (movie.showtimes.filter((times) => times.cinema.id === cinemaId)[0] !== undefined),
  ),
});

export const getMovies = (cinemaId) => async (dispatch) => {
  try {
    const currentMovies = await getData();
    dispatch(getMoviesSuccess(currentMovies, cinemaId));
  } catch (error) {
    console.log(error);
  }
};

export const setMovie = (movie) => ({
  type: 'setMovie',
  payload: movie,
});
