import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const mediaResults = response.data.collection.items;
        const imageResults = mediaResults.filter(
          (res) => res.data[0].media_type === "image"
        );
        const images = imageResults.map((image) => image.links[0].href);
        return images;
      });
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
};

export default getImages;
