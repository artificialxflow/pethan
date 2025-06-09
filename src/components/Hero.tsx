import React from 'react';
import { ArrowDown, Award, Users, Factory } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-persian-600"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gold-400 opacity-10 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent-400 opacity-10 rounded-full animate-float blur-sm" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-persian-400 opacity-10 rounded-full animate-float blur-sm" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary-400 opacity-5 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Made<span className="text-gold-400">By</span>Persians
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-slide-up">
            Premium PET Products Manufacturing
          </p>
          
          {/* Persian Description */}
          <div className="persian-text bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-8 animate-slide-up shadow-2xl" style={{animationDelay: '0.2s'}}>
            <p className="text-white text-lg leading-relaxed">
              تولیدکننده محصولات PET با کیفیت بالا شامل بطری و ظروف جار
              <br />
              دارای گواهینامه‌های ISO 22000 و ISO 9001
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover-lift shadow-xl">
              <Award className="w-12 h-12 text-gold-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">ISO Certified</h3>
              <p className="text-gray-200">ISO 22000 & ISO 9001</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover-lift shadow-xl">
              <Factory className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Premium Quality</h3>
              <p className="text-gray-200">Advanced Manufacturing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover-lift shadow-xl">
              <Users className="w-12 h-12 text-persian-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Customer Focus</h3>
              <p className="text-gray-200">Satisfaction Guaranteed</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl animate-slide-up"
            style={{animationDelay: '0.6s'}}
          >
            View Our Products
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;