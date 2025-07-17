import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductImageGallery = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    product.image,
    product.image,
    product.image
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="relative mb-6">
      <div className="relative overflow-hidden rounded-xl">
        <img   
          className="w-full h-80 object-cover"
          alt={`${product.title} - Nimbus Compressors branded product image ${currentImageIndex + 1}`}
         src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
        
        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-bold">
          NIMBUS
        </div>
        
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {product.power || product.capacity}
        </div>

        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {productImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
