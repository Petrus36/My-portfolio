import { useState, useEffect } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

export interface PrintMaterial {
  id: number;
  title: string;
  type: 'business-card' | 'letterhead' | 'logo';
  imageUrl: string;
}

export const getPrintMaterials = (lang: Language): PrintMaterial[] => {
  const materials = {
    sk: [
      {
        id: 1,
        title: 'Vizitka - Dizajn 1',
        type: 'business-card' as const,
        imageUrl: '/BusinessCard1.jpg',
      },
      {
        id: 2,
        title: 'Vizitka - Dizajn 2',
        type: 'business-card' as const,
        imageUrl: '/BusinessCard2.jpg',
      },
      {
        id: 3,
        title: 'Vizitka - Dizajn 3',
        type: 'business-card' as const,
        imageUrl: '/BusinessCard3.jpg',
      },
      {
        id: 4,
        title: 'Logo - Dizajn 1',
        type: 'logo' as const,
        imageUrl: '/Logo1.jpg',
      },
      {
        id: 5,
        title: 'Logo - Dizajn 2',
        type: 'logo' as const,
        imageUrl: '/Logo2.jpg',
      },
      {
        id: 6,
        title: 'Hlavičkový papier',
        type: 'letterhead' as const,
        imageUrl: '/HeadPaper.JPG',
      },
    ],
    en: [
      {
        id: 1,
        title: 'Business Card - Design 1',
        type: 'business-card' as const,
        imageUrl: '/BusinessCard1.jpg',
      },
      {
        id: 2,
        title: 'Business Card - Design 2',
        type: 'business-card' as const,
        imageUrl: '/BusinessCard2.jpg',
      },
      {
        id: 3,
        title: 'Business Card - Design 3',
        type: 'business-card' as const,
        imageUrl: '/BusinessCard3.jpg',
      },
      {
        id: 4,
        title: 'Logo - Design 1',
        type: 'logo' as const,
        imageUrl: '/Logo1.jpg',
      },
      {
        id: 5,
        title: 'Logo - Design 2',
        type: 'logo' as const,
        imageUrl: '/Logo2.jpg',
      },
      {
        id: 6,
        title: 'Letterhead',
        type: 'letterhead' as const,
        imageUrl: '/HeadPaper.JPG',
      },
    ],
  };
  return materials[lang];
};

const PrintMaterials = () => {
  const { t, language } = useLanguage();
  const printMaterials = getPrintMaterials(language);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<PrintMaterial | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % printMaterials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + printMaterials.length) % printMaterials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') {
          setSelectedImage(null);
        }
      } else {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          setCurrentIndex((prev) => (prev - 1 + printMaterials.length) % printMaterials.length);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          setCurrentIndex((prev) => (prev + 1) % printMaterials.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <section id="print-materials" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient">
              {t('printMaterialsTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              {t('printMaterialsSubtitle')}
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main Slider */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {printMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="min-w-full flex-shrink-0 relative"
                  >
                    <div
                      className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer group overflow-hidden"
                      onClick={() => setSelectedImage(material)}
                    >
                      <img
                        src={material.imageUrl.replace(/ /g, '%20')}
                        alt={material.title}
                        className="w-full h-full object-contain p-4 sm:p-8"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.nextElementSibling) {
                            (target.nextElementSibling as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback placeholder if image fails to load */}
                      <div className="absolute inset-0 flex items-center justify-center hidden">
                        <div className="text-center p-8">
                          <div className={`w-full h-full max-w-sm mx-auto rounded-lg shadow-xl flex items-center justify-center ${
                            material.type === 'business-card' 
                              ? 'bg-gradient-to-br from-blue-50 to-purple-50 aspect-[3.5/2]' 
                              : material.type === 'logo'
                              ? 'bg-gradient-to-br from-gray-50 to-purple-50 aspect-square'
                              : 'bg-gradient-to-br from-gray-50 to-blue-50 aspect-[4/1]'
                          }`}>
                            <div className="text-gray-400">
                              {material.type === 'business-card' ? (
                                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                </svg>
                              ) : material.type === 'logo' ? (
                                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                              ) : (
                                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              )}
                              <p className="text-sm font-medium">{material.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 z-10 group"
                aria-label="Previous slide"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:text-blue-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 z-10 group"
                aria-label="Next slide"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:text-blue-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {printMaterials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8 sm:w-10'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4 text-sm text-gray-600">
              {currentIndex + 1} / {printMaterials.length}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[95vh] bg-white rounded-xl sm:rounded-2xl shadow-2xl animate-slide-up overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 transition-colors z-10 shadow-lg"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 text-center">
                {selectedImage.title}
              </h3>
              <div className={`relative mx-auto rounded-lg overflow-hidden shadow-xl bg-white ${
                selectedImage.type === 'business-card' 
                  ? 'aspect-[3.5/2] max-w-sm' 
                  : selectedImage.type === 'logo'
                  ? 'aspect-square max-w-md'
                  : 'aspect-[4/1] max-w-2xl'
              }`}>
                <img
                  src={selectedImage.imageUrl.replace(/ /g, '%20')}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain p-4 sm:p-8"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback placeholder if image fails to load */}
                <div className={`absolute inset-0 hidden items-center justify-center ${
                  selectedImage.type === 'business-card' 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50' 
                    : selectedImage.type === 'logo'
                    ? 'bg-gradient-to-br from-gray-50 to-purple-50'
                    : 'bg-gradient-to-br from-gray-50 to-blue-50'
                }`}>
                  <div className="text-gray-400 text-center p-8">
                    {selectedImage.type === 'business-card' ? (
                      <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                    ) : selectedImage.type === 'logo' ? (
                      <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    ) : (
                      <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    <p className="text-base font-medium">{selectedImage.title}</p>
                    <p className="text-sm mt-2 text-gray-500">Image not available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrintMaterials;

