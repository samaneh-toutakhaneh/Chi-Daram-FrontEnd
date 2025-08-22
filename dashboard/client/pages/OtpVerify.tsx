import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';
import OtpInput from '../components/OtpInput';
import { useFetch, useOtpApi } from '../hooks/useFetch';
import { apiService } from '../services/api';
import { APP_CONFIG, MESSAGES, ROUTES } from '../constants';
import { validateOtp, joinOtp, getErrorMessage } from '../utils';

const OtpVerify: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || '';
  
  const [otpValues, setOtpValues] = useState<string[]>(Array(APP_CONFIG.OTP_LENGTH).fill(''));
  const [error, setError] = useState<string>('');
  
  const { timeLeft, canResend, startTimer, formatTime } = useOtpApi();
  
  const {
    execute: verifyOtp,
    isLoading: isVerifying,
    error: verifyError
  } = useFetch(async (phone: string, otp: string) => {
    const response = await apiService.verifyOtp(phone, otp);
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
  } = useFetch(async (phone: string) => {
    const response = await apiService.resendOtp(phone);
    if (response.success) {
      return response.data;
    }
    throw new Error(response.error || 'خطا در ارسال مجدد کد');
  });

  useEffect(() => {
    if (!phoneNumber) {
      navigate(ROUTES.LOGIN);
      return;
    }
    
    // Start timer when component mounts
    startTimer();
  }, [phoneNumber, navigate, startTimer]);

  useEffect(() => {
    // Clear error when OTP changes
    if (error) {
      setError('');
    }
  }, [otpValues, error]);

  const handleOtpChange = (newValues: string[]) => {
    setOtpValues(newValues);
    
    // Auto-submit when all fields are filled
    const otpString = joinOtp(newValues);
    if (otpString.length === APP_CONFIG.OTP_LENGTH) {
      handleSubmit(otpString);
    }
  };

  const handleSubmit = async (otpString?: string) => {
    const otp = otpString || joinOtp(otpValues);
    
    if (!validateOtp(otp)) {
      setError(MESSAGES.ERRORS.INVALID_OTP);
      return;
    }

    try {
      const result = await verifyOtp(phoneNumber, otp);
      if (result) {
        // Navigate to dashboard or home
        navigate(ROUTES.DASHBOARD || ROUTES.HOME);
      }
    } catch (err) {
      setError(getErrorMessage(err));
    }
  };

  const handleResendOtp = async () => {
    try {
      await resendOtp(phoneNumber);
      startTimer();
      setOtpValues(Array(APP_CONFIG.OTP_LENGTH).fill(''));
      setError('');
    } catch (err) {
      setError(getErrorMessage(err));
    }
  };

  const formatPhoneDisplay = (phone: string) => {
    if (phone.length === 11) {
      return `${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(7)}`;
    }
    return phone;
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
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">ورود با آیدنتیتام</h1>
            <p className="text-gray-600 text-sm">
              کد تایید به شماره موبایل شما پیامک شده است
            </p>
          </div>

          {/* Phone Number Display */}
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">شماره موبایل:</p>
            <p className="text-lg font-medium text-gray-900 font-mono" dir="ltr">
              {formatPhoneDisplay(phoneNumber)}
            </p>
          </div>

          {/* OTP Input */}
          <div className="space-y-4">
            <OtpInput
              length={APP_CONFIG.OTP_LENGTH}
              value={otpValues}
              onChange={handleOtpChange}
              disabled={isVerifying}
              error={!!error}
              autoFocus
              className="mb-4 px-2"
            />

            {/* Error Message */}
            {(error || verifyError || resendError) && (
              <div className="text-center">
                <p className="text-red-600 text-sm">
                  {error || getErrorMessage(verifyError || resendError)}
                </p>
              </div>
            )}
          </div>

          {/* Timer and Resend */}
          <div className="text-center space-y-4">
            {!canResend ? (
              <p className="text-gray-500 text-sm">
                ارسال مجدد کد در <span className="font-mono font-medium">{formatTime(timeLeft)}</span>
              </p>
            ) : (
              <button
                onClick={handleResendOtp}
                disabled={isResending}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium disabled:opacity-50"
              >
                {isResending ? 'در حال ارسال...' : 'ارسال مجدد کد تایید'}
              </button>
            )}
          </div>

          {/* Submit Button */}
          <Button
            onClick={() => handleSubmit()}
            disabled={joinOtp(otpValues).length !== APP_CONFIG.OTP_LENGTH}
            loading={isVerifying}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
          >
            تایید
          </Button>

          {/* Back to Login */}
          <div className="text-center">
            <button
              onClick={() => navigate(ROUTES.LOGIN)}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              بازگشت به صفحه ورود
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;
