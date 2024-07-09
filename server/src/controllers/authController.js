import * as authService from '../services/authService.js';

export const register = async (req, res, next) => {
  try {
    const { user, token } = await authService.register(req.body);
    console.log('User registered:', JSON.stringify(user, null, 2));
    console.log('Token generated:', token); // 토큰 로깅 추가
    res.status(201).json({ user, token });
  } catch (error) {
    console.error('Registration error:', error);
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { user, token } = await authService.login(req.body);
    console.log('User logged in:', JSON.stringify(user, null, 2));
    console.log('Token generated:', token); // 토큰 로깅 추가
    res.json({ user, token });
  } catch (error) {
    console.error('Login error:', error);
    next(error);
  }
};

export const logout = (req, res) => {
    res.json({ message: 'Logged out successfully' });
};