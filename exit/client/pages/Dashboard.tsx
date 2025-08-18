import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { authApi } from '../services/api';

export default function Dashboard() {
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
      // Even if API fails, clear local storage and redirect
      localStorage.removeItem('authToken');
      localStorage.removeItem('refreshToken');
      navigate('/login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    // Go to items page or dashboard as default
    navigate('/items');
  };

  return (
    <Layout>
      <div className="space-y-6">

        {/* Exit Confirmation */}
        <div className="bg-white rounded-lg border border-border max-w-md mx-auto">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground text-center">خروج</h2>
          </div>
          <div className="p-6">
            <div className="text-center space-y-6">
              <p className="text-muted-foreground">آیا برای خروج اطمینان دارید؟</p>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="btn-outline min-w-[100px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  انصراف
                </button>
                <button 
                  onClick={handleConfirmExit}
                  disabled={isLoading}
                  className="btn-danger min-w-[100px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'در حال خروج...' : 'خروج از حساب'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
