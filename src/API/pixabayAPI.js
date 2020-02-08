import axios from "axios";

function searchImages(query, page) {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=14619699-a58095564fbdec9b5516f2680&per_page=12`
  );
}

export default { searchImages };
