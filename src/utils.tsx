const BASE_URL = 'https://api.publicapis.org/entries';

export const fetchPublicApis = async (searchTerm: string) => {
  let url = BASE_URL;

  try {
    if (searchTerm) {
      url += `?title=${searchTerm}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message)
  }
}
