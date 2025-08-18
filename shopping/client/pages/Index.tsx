import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ShoppingList from './ShoppingList';

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1">
          <ShoppingList />
        </div>
      </div>
    </div>
  );
}
