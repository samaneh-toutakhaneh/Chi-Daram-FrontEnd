import { RequestHandler } from "express";

// Mock user storage (in production, use a real database)
const mockUsers = new Map<string, { phoneNumber: string; otp: string; otpExpiry: number }>();

export const sendOtp: RequestHandler = (req, res) => {
  try {
    const { phoneNumber } = req.body;
    
    if (!phoneNumber || !phoneNumber.match(/^09\d{9}$/)) {
      return res.status(400).json({
        success: false,
        error: 'شماره موبایل وارد شده معتبر نیست'
      });
    }

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = Date.now() + (2 * 60 * 1000); // 2 minutes

    // Store OTP (in production, send SMS)
    mockUsers.set(phoneNumber, { phoneNumber, otp, otpExpiry });
    
    console.log(`📱 OTP for ${phoneNumber}: ${otp}`); // For development testing

    res.json({
      success: true,
      message: 'کد تایید با موفقیت ارسال شد',
      data: {
        phoneNumber,
        message: `کد تایید به شماره ${phoneNumber} ارسال شد`
      }
    });
  } catch (error) {
    console.error('Send OTP error:', error);
    res.status(500).json({
      success: false,
      error: 'خطا در ارسال کد تایید'
    });
  }
};

export const verifyOtp: RequestHandler = (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;
    
    if (!phoneNumber || !otp) {
      return res.status(400).json({
        success: false,
        error: 'شماره موبایل و کد تایید الزامی است'
      });
    }

    const userData = mockUsers.get(phoneNumber);
    
    if (!userData) {
      return res.status(400).json({
        success: false,
        error: 'کد تایید یافت نشد. لطفاً مجدداً درخواست کنید'
      });
    }

    if (Date.now() > userData.otpExpiry) {
      mockUsers.delete(phoneNumber);
      return res.status(400).json({
        success: false,
        error: 'کد تایید منقضی شده است'
      });
    }

    if (userData.otp !== otp) {
      return res.status(400).json({
        success: false,
        error: 'کد تایید اشتباه است'
      });
    }

    // Generate a mock JWT token (in production, use a real JWT library)
    const token = `mock_token_${phoneNumber}_${Date.now()}`;
    
    // Remove used OTP
    mockUsers.delete(phoneNumber);

    res.json({
      success: true,
      message: 'کد تایید با موفقیت بررسی شد',
      data: {
        token,
        user: {
          id: `user_${phoneNumber}`,
          phoneNumber,
          isVerified: true
        }
      }
    });
  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({
      success: false,
      error: 'خطا در بررسی کد تایید'
    });
  }
};

export const resendOtp: RequestHandler = (req, res) => {
  try {
    const { phoneNumber } = req.body;
    
    if (!phoneNumber || !phoneNumber.match(/^09\d{9}$/)) {
      return res.status(400).json({
        success: false,
        error: 'شماره موبایل وارد شده معتبر نیست'
      });
    }

    // Generate a new OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = Date.now() + (2 * 60 * 1000); // 2 minutes

    // Update stored OTP
    mockUsers.set(phoneNumber, { phoneNumber, otp, otpExpiry });
    
    console.log(`📱 New OTP for ${phoneNumber}: ${otp}`); // For development testing

    res.json({
      success: true,
      message: 'کد تایید مجدداً ارسال شد',
      data: {
        phoneNumber,
        message: `کد تایید جدید به شماره ${phoneNumber} ارسال شد`
      }
    });
  } catch (error) {
    console.error('Resend OTP error:', error);
    res.status(500).json({
      success: false,
      error: 'خطا در ارسال مجدد کد تایید'
    });
  }
};
