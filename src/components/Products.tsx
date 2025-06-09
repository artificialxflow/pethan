import React, { useState } from 'react';
import { Package, Droplets, Shield, Star } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('bottles');

  const productCategories = {
    bottles: {
      title: 'PET Bottles',
      description: 'High-quality PET bottles for various applications',
      products: [
        {
          name: 'Water Bottles',
          sizes: ['250ml', '500ml', '1L', '1.5L'],
          features: ['BPA Free', 'Crystal Clear', 'Lightweight'],
          image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Beverage Bottles',
          sizes: ['330ml', '500ml', '750ml', '1L'],
          features: ['Food Grade', 'Durable', 'Recyclable'],
          image: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Juice Bottles',
          sizes: ['200ml', '500ml', '1L'],
          features: ['UV Protection', 'Tamper Evident', 'Easy Grip'],
          image: 'https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    jars: {
      title: 'PET Jars',
      description: 'Premium PET jars for food storage and packaging',
      products: [
        {
          name: 'Food Storage Jars',
          sizes: ['250ml', '500ml', '750ml', '1L'],
          features: ['Airtight Seal', 'Wide Mouth', 'Stackable'],
          image: 'https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Spice Jars',
          sizes: ['50ml', '100ml', '200ml'],
          features: ['Clear Visibility', 'Easy Pour', 'Compact Design'],
          image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Cosmetic Jars',
          sizes: ['30ml', '50ml', '100ml', '200ml'],
          features: ['Premium Finish', 'Chemical Resistant', 'Elegant Design'],
          image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    }
  };

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-primary-600 to-persian-600 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive catalog of premium PET bottles and jars manufactured to the highest international standards.
            </p>
            
            {/* Category Tabs */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setActiveCategory('bottles')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === 'bottles'
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-lg'
                }`}
              >
                <Package className="w-5 h-5 inline-block mr-2" />
                PET Bottles
              </button>
              <button
                onClick={() => setActiveCategory('jars')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === 'jars'
                    ? 'bg-gradient-to-r from-persian-500 to-persian-600 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-lg'
                }`}
              >
                <Droplets className="w-5 h-5 inline-block mr-2" />
                PET Jars
              </button>
            </div>
          </div>

          {/* Product Category */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {productCategories[activeCategory].title}
              </h3>
              <p className="text-lg text-gray-600">
                {productCategories[activeCategory].description}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories[activeCategory].products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover-lift border border-gray-100">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Premium
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h4>
                    
                    {/* Sizes */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-600 mb-2">Available Sizes:</h5>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size, sizeIndex) => (
                          <span key={sizeIndex} className="bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-600 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 text-gold-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-primary-500 to-persian-500 hover:from-primary-600 hover:to-persian-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300">
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Features */}
          <div className="bg-gradient-to-br from-primary-50 via-white to-persian-50 rounded-xl p-8 border border-primary-100 shadow-xl">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Why Choose Our PET Products?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white rounded-lg p-6 shadow-lg hover-lift border border-primary-100">
                <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Food Grade Safety</h4>
                <p className="text-sm text-gray-600">All products meet international food safety standards</p>
              </div>
              <div className="text-center bg-white rounded-lg p-6 shadow-lg hover-lift border border-accent-100">
                <Package className="w-12 h-12 text-accent-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Durable Design</h4>
                <p className="text-sm text-gray-600">Built to withstand daily use and transportation</p>
              </div>
              <div className="text-center bg-white rounded-lg p-6 shadow-lg hover-lift border border-persian-100">
                <Droplets className="w-12 h-12 text-persian-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Eco-Friendly</h4>
                <p className="text-sm text-gray-600">100% recyclable and environmentally conscious</p>
              </div>
              <div className="text-center bg-white rounded-lg p-6 shadow-lg hover-lift border border-gold-100">
                <Star className="w-12 h-12 text-gold-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Premium Quality</h4>
                <p className="text-sm text-gray-600">ISO certified manufacturing processes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;