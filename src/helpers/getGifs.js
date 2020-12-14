export const getGifs = async (category) => {
  const url =
    `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=8vqqD5xcl8LaDTNGqIue1jw3QfsARKft`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      url: img.images?.downsized_medium.url,
      title: img.title,
    };
  });
  // console.log(gifs);
  return gifs;
};