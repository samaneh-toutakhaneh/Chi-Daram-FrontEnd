import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { authApi } from '../services/api';

export default function Exit() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmExit = async () => {
    setIsLoading(true);
    try {
      await authApi.logout();
      // Redirect to login or home page
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="max-w-md w-full text-center">
          {/* Main heading */}
          <h1 className="text-2xl font-semibold text-foreground mb-8">
            خروج
          </h1>

          {/* Question text */}
          <p className="text-lg text-muted-foreground mb-8">
            برای خروج از حساب کاربری خود اطمینان دارید؟
          </p>

          {/* Action buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleConfirmExit}
              disabled={isLoading}
              className="btn-danger min-w-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'در حال خروج...' : 'خروج و حذف'}
            </button>
            
            <button
              onClick={handleCancel}
              disabled={isLoading}
              className="btn-outline min-w-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              انصراف
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
