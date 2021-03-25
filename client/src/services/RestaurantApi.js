import axios from 'axios';

export function findAll(success) {
  axios.get('http://localhost:8080/restaurants/').then(
    (response) => {
      success(response.data);
    },
    (error) => console.error(error)
  );
}
