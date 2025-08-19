import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';
import OtpInput from '../components/OtpInput';
import { useFetch, useOtpApi } from '../hooks/useFetch';
import { apiService } from '../services/api';
import { APP_CONFIG, MESSAGES, ROUTES } from '../constants';
import { validateOtp, joinOtp, getErrorMessage } from '../utils';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || '';

  const [otpValues, setOtpValues] = useState<string[]>(Array(5).fill(''));
  const [error, setError] = useState('');

  const { timeLeft, canResend, startTimer, formatTime } = useOtpApi();

  const {
    execute: verifyOtp,
    isLoading,
    error: apiError
  } = useFetch(async (otp: string) => {
    if (!phoneNumber) {
      throw new Error('شماره موبایل یافت نشد');
    }
    const response = await apiService.verifyOtp(phoneNumber, otp);
    if (response.success && response.data) {
      apiService.setAuthToken(response.data.token);
      return response.data;
    }
    throw new Error(response.error || 'خطا در تایید کد');
  });

  const {
    execute: resendOtp,
    isLoading: isResending,
    error: resendError
  } = useFetch(async () => {
    if (!phoneNumber) {
      throw new Error('شماره موبایل یافت نشد');
    }
    const response = await apiService.resendOtp(phoneNumber);
    if (response.success) {
      return response.data;
    }
    throw new Error(response.error || 'خطا در ارسال مجدد کد');
  });

  useEffect(() => {
    if (!phoneNumber) {
      navigate('/phone-input');
      return;
    }
    // Start timer when component mounts
    startTimer();
  }, [phoneNumber, navigate, startTimer]);

  const handleOtpChange = (newValues: string[]) => {
    setOtpValues(newValues);
    
    // Clear error when OTP changes
    if (error) {
      setError('');
    }
    
    // Auto-submit when all fields are filled
    const otpString = joinOtp(newValues);
    if (otpString.length === 5) {
      handleSubmit(otpString);
    }
  };

  const handleSubmit = async (otpString?: string) => {
    const otp = otpString || joinOtp(otpValues);
    
    if (otp.length !== 5) {
      setError('کد تایید باید ۵ رقم باشد');
      return;
    }

    try {
      const result = await verifyOtp(otp);
      if (result) {
        navigate(ROUTES.DASHBOARD || ROUTES.HOME);
      }
    } catch (err) {
      setError(getErrorMessage(err));
    }
  };

  const handleResendOtp = async () => {
    try {
      await resendOtp();
      startTimer();
      setOtpValues(Array(5).fill(''));
      setError('');
    } catch (err) {
      setError(getErrorMessage(err));
    }
  };

  const handleEditPhone = () => {
    navigate('/phone-input');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
          {/* Logo */}
          <div className="text-center">
            <Logo size="lg" className="mx-auto mb-4" />
            <div className="flex items-center justify-center gap-2">
              <span className="text-blue-600 text-lg font-semibold">{APP_CONFIG.APP_NAME}</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">ورود با ثبت نام</h1>
            <p className="text-gray-500 text-sm">
              کد تایید به شماره موبایلی که وارد می‌کنید، ارسال خواهد شد.
            </p>
            {phoneNumber && (
              <p className="text-gray-700 text-sm font-medium" dir="ltr">
                {phoneNumber.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3')}
              </p>
            )}
          </div>

          {/* OTP Input */}
          <div className="space-y-6">
            <OtpInput
              length={5}
              value={otpValues}
              onChange={handleOtpChange}
              disabled={isLoading}
              error={!!error}
              autoFocus
              className="mb-4 px-2"
            />

            {/* Error Message */}
            {(error || apiError || resendError) && (
              <div className="text-center">
                <p className="text-red-600 text-sm">
                  {error || getErrorMessage(apiError || resendError)}
                </p>
              </div>
            )}

            {/* Timer and Edit Phone */}
            <div className="flex justify-between items-center text-sm">
              {/* Edit Phone - Left Side */}
              <button
                onClick={handleEditPhone}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ویرایش شماره موبایل
              </button>
              
              {/* Timer - Right Side */}
              <div className="text-gray-500">
                {!canResend ? (
                  <span>
                    تا دریافت مجدد کد <span className="font-mono font-medium">{formatTime(timeLeft)}</span>
                  </span>
                ) : (
                  <button
                    onClick={handleResendOtp}
                    disabled={isResending}
                    className="text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
                  >
                    {isResending ? 'در حال ارسال...' : 'ارسال مجدد کد'}
                  </button>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              onClick={() => handleSubmit()}
              disabled={joinOtp(otpValues).length !== 5}
              loading={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
            >
              تایید
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 space-y-2">
            <p>با ورود و یا ثبت نام، شما</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-700">
                شرایط استفاده
              </a>
              <span>و</span>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                حریم خصوصی
              </a>
            </div>
            <p>را می‌پذیرید</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
