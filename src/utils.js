const BASE_URL = 'https://api.publicapis.org/entries';

export const fetchPublicApis = async (searchTerm) => {
  let url = BASE_URL;

  try {
    if (searchTerm) {
      url += `?title=${searchTerm}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.entries)
    return data;
  } catch (error) {
    throw new Error(error.message)
  }
}
