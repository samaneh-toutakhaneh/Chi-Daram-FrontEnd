import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logout process
    const timer = setTimeout(() => {
      // In a real app, you would clear auth tokens, reset state, etc.
      alert('خروج از حساب کاربری انجام شد');
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-96 text-center">
      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
        <LogOut size={40} className="text-red-500" />
      </div>
      <h2 className="text-2xl font-bold text-chi-daram-text-dark mb-4">در حال خروج...</h2>
      <p className="text-chi-daram-text-light">
        لطفاً صبر کنید، در حال خروج از حساب کاربری هستید.
      </p>
    </div>
  );
}
