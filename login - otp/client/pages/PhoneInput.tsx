import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { useFetch } from '../hooks/useFetch';
import { apiService } from '../services/api';
import { APP_CONFIG, MESSAGES, ROUTES } from '../constants';
import { validatePhoneNumber, cleanPhoneNumber, formatPhoneNumber, getErrorMessage } from '../utils';

const PhoneInput: React.FC = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const {
    execute: sendOtp,
    isLoading,
    error: apiError
  } = useFetch(async (phone: string) => {
    const response = await apiService.sendOtp(phone);
    if (response.success) {
      return response.data;
    }
    throw new Error(response.error || 'خطا در ارسال کد تایید');
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleaned = cleanPhoneNumber(value);
    
    // Limit to 11 digits and ensure it starts with 09
    if (cleaned.length <= 11) {
      setPhoneNumber(cleaned);
      if (error) setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePhoneNumber(phoneNumber)) {
      setError(MESSAGES.ERRORS.INVALID_PHONE);
      return;
    }

    try {
      await sendOtp(phoneNumber);
      navigate(ROUTES.LOGIN, { state: { phoneNumber } });
    } catch (err) {
      setError(getErrorMessage(err));
    }
  };

  const displayPhone = formatPhoneNumber(phoneNumber);

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
            <p className="text-gray-600 text-sm">
              برای ورود شماره موبایل خود را وارد کنید
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                شماره موبایل
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                placeholder="09XX XXX XXXX"
                value={displayPhone}
                onChange={handlePhoneChange}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base sm:text-lg text-center font-mono"
                dir="ltr"
              />
              <p className="text-xs text-gray-500 mt-1 text-center">
                شماره موبایل خود را با ۰۹ شروع کنید
              </p>
            </div>

            {/* Error Message */}
            {(error || apiError) && (
              <div className="text-center">
                <p className="text-red-600 text-sm">
                  {error || getErrorMessage(apiError)}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!validatePhoneNumber(phoneNumber)}
              loading={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
            >
              دریافت کد تایید
            </Button>
          </form>

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

export default PhoneInput;
