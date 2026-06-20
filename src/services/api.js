import axios from "axios";

const ACCESS_KEY = "ТУТ_ТВІЙ_ACCESS_KEY";

axios.defaults.baseURL = "https://api.unsplash.com";

export async function fetchImages(query, page) {
  const response = await axios.get("/search/photos", {
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
