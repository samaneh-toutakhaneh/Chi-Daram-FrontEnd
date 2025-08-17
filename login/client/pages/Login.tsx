import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';
import { authApi } from '../services/api';
import { validatePhoneNumber, sanitizePhoneNumber } from '../utils';
import { PERSIAN_MESSAGES, ROUTES } from '../constants';

export default function Login() {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = sanitizePhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phoneNumber: value }));
    
    // Clear error when user starts typing
    if (errors.phoneNumber) {
      setErrors(prev => ({ ...prev, phoneNumber: '' }));
    }
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, acceptTerms: e.target.checked }));
    
    // Clear error when user checks the box
    if (errors.acceptTerms) {
      setErrors(prev => ({ ...prev, acceptTerms: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = PERSIAN_MESSAGES.LOGIN.PHONE_REQUIRED;
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = PERSIAN_MESSAGES.LOGIN.PHONE_INVALID;
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = PERSIAN_MESSAGES.LOGIN.TERMS_REQUIRED;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await authApi.login({
        phoneNumber: formData.phoneNumber,
        acceptTerms: formData.acceptTerms,
      });
      
      // Store auth token
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      
      // Navigate to dashboard
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      setErrors({ 
        general: error instanceof Error ? error.message : 'خطا در ورود به سیستم' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Full width - Login Form */}
      <div className="w-full flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Title */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center ml-2">
                  <span className="text-white font-bold text-lg">چ</span>
                </div>
                <span className="text-xl font-bold text-blue-600">ثبت نام</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {PERSIAN_MESSAGES.LOGIN.TITLE}
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              کد تائید به شماره موبایل که وارد می‌کنید ارسال خواهد شد.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.general && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{errors.general}</p>
              </div>
            )}

            <div>
              <Input
                type="tel"
                placeholder="9xxxxxxxxx"
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                prefix="+98"
                error={errors.phoneNumber}
                className="text-left"
                dir="ltr"
                maxLength={11}
              />
            </div>

            <div>
              <Checkbox
                checked={formData.acceptTerms}
                onChange={handleTermsChange}
                label={PERSIAN_MESSAGES.LOGIN.TERMS_TEXT}
                error={errors.acceptTerms}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              loading={isLoading}
              disabled={isLoading}
            >
              {isLoading ? PERSIAN_MESSAGES.COMMON.LOADING : PERSIAN_MESSAGES.LOGIN.LOGIN_BUTTON}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
