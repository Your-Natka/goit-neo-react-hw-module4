import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const ACCESS_KEY = 'EP6xGKyS54rZDz4us-SIpaV9VJyUgJsapxCpS6v8gf4';

export async function fetchImages(query, page) {
  const response = await axios.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return response.data;
}
