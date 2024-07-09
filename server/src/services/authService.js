import User from '../models/User.js';
import { generateToken } from '../config/jwt.js';

export const register = async (userData) => {
  try {
    // role 값 검증
    if (userData.role && !['consumer', 'seller'].includes(userData.role)) {
      throw new Error('Invalid role. Must be either "consumer" or "seller".');
    }

    const user = new User(userData);
    await user.save();
    const token = generateToken(user._id);
    return { user, token };
  } catch (error) {
    console.error('Error in authService.register:', error);
    if (error.name === 'ValidationError') {
      // Mongoose validation error
      const errors = Object.values(error.errors).map(err => err.message);
      throw new Error(`Validation failed: ${errors.join(', ')}`);
    }
    throw error;
  }
};

export const login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid credentials');
    }
    const token = generateToken(user._id);
    return { user, token };
  } catch (error) {
    console.error('Error in authService.login:', error);
    throw error;
  }
};