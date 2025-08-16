interface Product {
  id: number;
  name: string;
  price: string;
  date: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "مشاهده تجهیزات",
    price: "۱۳۶۰۰۰۰۰",
    date: "۱ مهر ۱۴۰۳",
    description: "لباس ورزشی / دسته بندی",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop"
  },
  {
    id: 2,
    name: "تعداد ۵ مورد",
    price: "",
    date: "",
    description: "",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=200&h=200&fit=crop"
  },
  {
    id: 3,
    name: "",
    price: "",
    date: "",
    description: "",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop"
  },
  {
    id: 4,
    name: "",
    price: "",
    date: "",
    description: "",
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=200&h=200&fit=crop"
  },
  {
    id: 5,
    name: "",
    price: "",
    date: "",
    description: "",
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f99ed?w=200&h=200&fit=crop"
  },
  {
    id: 6,
    name: "",
    price: "",
    date: "",
    description: "",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop"
  }
];

export default function ProductGrid() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">لیست های اخیر</h3>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2 group-hover:opacity-90 transition-opacity">
                <img
                  src={product.image}
                  alt={product.name || 'محصول'}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.name && (
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {product.name}
                  </h4>
                  {product.price && (
                    <p className="text-xs text-blue-600 font-medium">
                      {product.price}
                    </p>
                  )}
                  {product.date && (
                    <p className="text-xs text-gray-500">
                      {product.date}
                    </p>
                  )}
                  {product.description && (
                    <p className="text-xs text-gray-500 truncate">
                      {product.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
