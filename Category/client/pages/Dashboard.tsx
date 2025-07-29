import { useState } from "react";
import { Edit, MapPin, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

interface Item {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  image: string;
  days: number;
}

export default function Dashboard() {
  const [items] = useState<Item[]>([
    {
      id: "1",
      title: "لپ تاپ",
      category: "لوازم دیجیتال",
      date: "1402/09/27",
      location: "محل کار",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&crop=center",
      days: 4
    },
    {
      id: "2",
      title: "حلقه و دستبندان",
      category: "طلا و جواهرات",
      date: "1402/14/27",
      location: "خونه",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      days: 3
    }
  ]);

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">دسته بندی های من</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground border border-border rounded-lg">
            <Edit className="w-4 h-4" />
            ویرایش
          </button>

          <button className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground border border-border rounded-lg">
            <MapPin className="w-4 h-4" />
            آدرس کاربری
          </button>

          <Link to="/logout" className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground border border-border rounded-lg">
            خروج
          </Link>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
            {/* Item Image */}
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute top-3 left-3 p-1 bg-white/80 rounded-lg hover:bg-white transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            
            {/* Item Content */}
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.category}</p>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="text-muted-foreground">
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span>{item.days} روز پیش</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
              </div>
              
              <div className="pt-2 border-t border-border">
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  مشاهده بیشتر
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Item Button */}
      <div className="flex justify-center pt-8">
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          افزودن کالای جدید
        </button>
      </div>
    </div>
  );
}
