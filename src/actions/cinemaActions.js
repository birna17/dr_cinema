const getData = async () => fetch('http://api.kvikmyndir.is/theaters', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZmNmYjRkYjA2YjAxMzZmN2JmMjcwMjMiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IlJpY2hhcmQgRGF3c29uIFdvb2RoZWFkICIsImVtYWlsIjoiUmljaGFyZDE5QHJ1LmlzIiwidXNlcm5hbWUiOiJyaWNoYXJkMTkiLCJwYXNzd29yZCI6IiQyYSQwOCRGZE9RMVdTbmR4a3BkOExkeUVBbnhPVVA5aTcxa3lYWG81SExJTEJKWVlZUWw3OG5RNUFheSIsImRvbWFpbiI6ImxvY2FsaG9zdCIsIm1lc3NhZ2UiOiJzY2hvb2wiLCJpYXQiOjE2MDc2MzgxMDksImV4cCI6MTYwNzcyNDUwOX0.jOeHEjst7E2mGh-GhjZC03hcy1jDl-USl6BKGJZThgU',
  },
}).then((response) => response.json());

const getCinemasSuccess = (currentCinemas) => ({
  type: 'getCinemas',
  payload: currentCinemas,
});

export const getCinemas = () => async (dispatch) => {
  try {
    const currentCinemas = await getData();
    dispatch(getCinemasSuccess(currentCinemas));
  } catch (error) {
    console.log(error);
  }
};

export const setCinema = (id) => ({
  type: 'setCinema',
  payload: id,
});
