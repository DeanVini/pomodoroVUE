const getApiUrl = () => {
  if (import.meta.env.DEV) {
    return import.meta.env.VITE_API_HOST || 'http://localhost:3000';
  }

  return 'https://api.pomovue.deanvinici.us';
};

export const API_BASE_URL = getApiUrl();
export const API_URL = API_BASE_URL;

console.log('API URL configurada:', API_URL);
