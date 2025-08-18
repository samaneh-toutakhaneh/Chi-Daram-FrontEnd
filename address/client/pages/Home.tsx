import React, { useState } from 'react';
import { EditIcon } from '../components/Icons';
import { useFetch, useMutation } from '../hooks/useFetch';
import { placesApi } from '../services/api';
import { Place, AddPlaceForm } from '../types';
import AddPlaceModal from '../components/AddPlaceModal';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  // Fetch places data
  const { data: places, loading, error, refetch } = useFetch<Place[]>(
    () => placesApi.getPlaces(),
    { immediate: false } // Don't fetch immediately since we want to show empty state
  );

  // Add place mutation
  const { mutate: addPlace, loading: addingPlace } = useMutation<Place, AddPlaceForm>(
    (data) => placesApi.createPlace(data)
  );

  // For now, show empty state to match the design
  const showEmptyState = !places || places.length === 0;

  const handleAddPlace = async (data: AddPlaceForm) => {
    const result = await addPlace(data);
    if (result) {
      // Refresh the places list
      refetch();
    }
  };

  const handleEditToggle = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 lg:mb-8 gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">محل‌های من</h1>
        </div>

        <button
          onClick={handleEditToggle}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 border rounded-lg transition-colors w-fit ${
            isEditMode
              ? 'bg-blue-600 border-blue-600 text-white'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <EditIcon size={16} className={isEditMode ? "text-white" : "text-gray-600"} />
          <span className="font-medium text-sm">{isEditMode ? 'تمام' : 'ویرایش'}</span>
        </button>
      </div>

      {/* Breadcrumb */}
      <div className="mb-4 lg:mb-6">
        <nav className="text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">ثبت آدرس</span>
        </nav>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg border border-gray-200 min-h-80 lg:min-h-96">
        {loading ? (
          // Loading State
          <div className="flex items-center justify-center h-80 lg:h-96">
            <div className="animate-spin rounded-full h-8 w-8 lg:h-12 lg:w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          // Error State
          <div className="flex flex-col items-center justify-center h-80 lg:h-96 text-center p-6">
            <div className="text-red-500 mb-4">
              <svg className="w-12 h-12 lg:w-16 lg:h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-base lg:text-lg font-medium text-gray-900 mb-2">خطا در بارگذاری اطلاعات</h3>
            <p className="text-gray-500 mb-4 text-sm">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              تلاش مجدد
            </button>
          </div>
        ) : showEmptyState ? (
          // Empty State - matches the design exactly
          <div className="flex flex-col items-center justify-center h-80 lg:h-96 text-center p-6">
            <div className="text-gray-400 mb-4 lg:mb-6">
              <svg className="w-16 h-16 lg:w-20 lg:h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-base lg:text-lg font-medium text-gray-500 mb-2 px-4">
              آدرسی برای نمایش پیدا نشد، یک آدرس ثبت کنید
            </h3>
            <p className="text-gray-400 text-sm mb-4 lg:mb-6 px-4">
              برای شروع، یک مکان جدید اضافه کنید
            </p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              disabled={addingPlace}
              className="px-4 lg:px-6 py-2 lg:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm lg:text-base disabled:opacity-50"
            >
              {addingPlace ? 'در حال افزودن...' : 'افزودن مکان جدید'}
            </button>
          </div>
        ) : (
          // Places List (when data exists)
          <div className="p-6">
            <div className="grid gap-4">
              {places?.map((place) => (
                <div
                  key={place.id}
                  className={`p-4 border border-gray-200 rounded-lg transition-all ${
                    isEditMode ? 'border-blue-300 bg-blue-50' : 'hover:shadow-md cursor-pointer'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{place.name}</h3>
                      <p className="text-gray-600 text-sm">{place.address}</p>
                      {place.description && (
                        <p className="text-gray-500 text-xs mt-1">{place.description}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {place.isDefault && (
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          پیش‌فرض
                        </span>
                      )}
                      {isEditMode && (
                        <button className="p-1 text-red-500 hover:text-red-700">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <EditIcon size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Place Modal */}
      <AddPlaceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddPlace}
      />
    </div>
  );
};

export default Home;
