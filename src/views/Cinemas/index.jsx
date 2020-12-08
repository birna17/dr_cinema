import React from 'react';
import { View, Text } from 'react-native';

class Cinemas extends React.Component {
  async getData () {
    return fetch('http://api.kvikmyndir.is/movies?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZmNmYjRkYjA2YjAxMzZmN2JmMjcwMjMiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IlJpY2hhcmQgRGF3c29uIFdvb2RoZWFkICIsImVtYWlsIjoiUmljaGFyZDE5QHJ1LmlzIiwidXNlcm5hbWUiOiJyaWNoYXJkMTkiLCJwYXNzd29yZCI6IiQyYSQwOCRGZE9RMVdTbmR4a3BkOExkeUVBbnhPVVA5aTcxa3lYWG81SExJTEJKWVlZUWw3OG5RNUFheSIsImRvbWFpbiI6ImxvY2FsaG9zdCIsIm1lc3NhZ2UiOiJzY2hvb2wiLCJpYXQiOjE2MDc0NDg4NzYsImV4cCI6MTYwNzUzNTI3Nn0.a-KKyVv3kTR_8cqXhJmAkOPvN28IGsd5inVWXMFkyL8', {
      method: 'POST',
    }).then((response) => response.json());
  }

  render() {
    return (
      <View>
        <Text>
          Cinemas
        </Text>
      </View>
    );
  }
}

export default Cinemas;
