import { RequestHandler } from "express";
import { z } from "zod";

// Validation schemas
const LoginSchema = z.object({
  phoneNumber: z.string().regex(/^09\d{9}$/, 'Invalid phone number format'),
  acceptTerms: z.boolean().refine(val => val === true, 'Terms must be accepted'),
});

// Mock user database (in real app, this would be a proper database)
const mockUsers = new Map([
  ['09123456789', {
    id: '1',
    phoneNumber: '09123456789',
    firstName: 'علی',
    lastName: 'احمدی',
    isVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }]
]);

// Mock tokens (in real app, use proper JWT library)
const mockTokens = new Map<string, { userId: string; expiresAt: Date }>();

export const handleLogin: RequestHandler = async (req, res) => {
  try {
    const validatedData = LoginSchema.parse(req.body);
    
    // Simulate verification code sending (in real app, send SMS)
    console.log(`Verification code sent to ${validatedData.phoneNumber}`);
    
    // For demo purposes, automatically authenticate
    let user = mockUsers.get(validatedData.phoneNumber);
    
    if (!user) {
      // Create new user if doesn't exist
      user = {
        id: Date.now().toString(),
        phoneNumber: validatedData.phoneNumber,
        isVerified: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      mockUsers.set(validatedData.phoneNumber, user);
    }

    // Generate mock token
    const token = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const refreshToken = `refresh_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const expiresIn = 24 * 60 * 60; // 24 hours in seconds
    const expiresAt = new Date(Date.now() + expiresIn * 1000);
    
    mockTokens.set(token, { userId: user.id, expiresAt });

    res.json({
      user,
      token,
      refreshToken,
      expiresIn,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        message: 'اطلاعات وارد شده نامعتبر است',
        errors: error.errors,
      });
    } else {
      console.error('Login error:', error);
      res.status(500).json({
        message: 'خطایی در سرور رخ داده است',
      });
    }
  }
};

export const handleLogout: RequestHandler = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      mockTokens.delete(token);
    }
    
    res.json({ message: 'خروج موفقیت‌آمیز' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({
      message: 'خطایی در سرور رخ داده است',
    });
  }
};

export const handleGetCurrentUser: RequestHandler = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'توکن احراز هویت یافت نشد' });
    }

    const token = authHeader.substring(7);
    const tokenData = mockTokens.get(token);
    
    if (!tokenData || tokenData.expiresAt < new Date()) {
      return res.status(401).json({ message: 'توکن نامعتبر یا منقضی شده' });
    }

    const user = Array.from(mockUsers.values()).find(u => u.id === tokenData.userId);
    if (!user) {
      return res.status(404).json({ message: 'کاربر یافت نشد' });
    }

    res.json(user);
  } catch (error) {
    console.error('Get current user error:', error);
    res.status(500).json({
      message: 'خطایی در سرور رخ داده است',
    });
  }
};

export const handleRefreshToken: RequestHandler = async (req, res) => {
  try {
    // For demo purposes, just return the same token structure
    const newToken = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const newRefreshToken = `refresh_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const expiresIn = 24 * 60 * 60;

    res.json({
      token: newToken,
      refreshToken: newRefreshToken,
      expiresIn,
    });
  } catch (error) {
    console.error('Refresh token error:', error);
    res.status(500).json({
      message: 'خطایی در سرور رخ داده است',
    });
  }
};
