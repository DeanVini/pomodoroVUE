const getApiUrl = () => {
  if (import.meta.env.DEV) {
    return import.meta.env.VITE_API_HOST || 'http://localhost:3000';
  }

  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  return 'https://pomodoro-vue-mu.vercel.app';
};

export const API_BASE_URL = getApiUrl();
export const API_URL = `${API_BASE_URL}/api`;

console.log('API URL configurada:', API_URL);
