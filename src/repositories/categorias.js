import config from "../config";
const URL_CATEGORIES = `${config.URL}/categorias`;

function getAll() {
  return fetch(URL_CATEGORIES).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error("Nao foi possivel pegar os dados!");
  });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error("Nao foi possivel pegar os dados!");
  });
}

export default {
  getAllWithVideos,
  getAll,
};
