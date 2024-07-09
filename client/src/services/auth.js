import api from './api';

export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  console.log('Registration response:', response.data); // 응답 로깅
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  console.log('Login response:', response.data); // 응답 로깅
  return response.data;
};

export const logout = async () => {
  try {
    await api.post('/auth/logout');
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem('token');
  } catch (error) {
    console.error('Logout error:', error);
    // 에러가 발생해도 로컬의 토큰은 제거합니다.
    localStorage.removeItem('token');
  }
};

