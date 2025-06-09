import React from 'react';
import { CheckCircle, Target, Heart, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="bg-gradient-to-r from-primary-600 to-persian-600 bg-clip-text text-transparent">MadeByPersians</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading manufacturer of premium PET products with a commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="space-y-8">
              <div className="persian-text bg-white rounded-xl p-6 shadow-xl border border-primary-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">درباره ما</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  فعالیت خود را در صنعت تولید محصولات PET (بطری – ظروف جار) با حفظ کرامت انسانی و تکیه بر دانش ایرانی و کارگران ایرانی آغاز نموده است.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  مفتخریم که از آن زمان تا کنون، مشتری محوری را سرلوحه تفکر و کار خود و تعهد قرار داده و کیفیت و سلامت محصولات را حق مشتری و لازمه انجام کار حرفه‌ای دانسته‌ایم.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  در همین راستا شرکت ما موفق به کسب نشان استاندارد و سلامت ISO22000 و ISO 9001 گردیده است.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-xl hover-lift border border-primary-100">
                  <Target className="w-12 h-12 text-primary-600 mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h4>
                  <p className="text-gray-600">Delivering premium PET products while maintaining the highest standards of quality and customer satisfaction.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-xl hover-lift border border-persian-100">
                  <Heart className="w-12 h-12 text-persian-600 mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h4>
                  <p className="text-gray-600">Built on Iranian expertise, human dignity, and unwavering commitment to excellence in manufacturing.</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-persian-600 rounded-xl p-8 text-white shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Manufacturing Facility" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">State-of-the-Art Manufacturing</h3>
                <p className="text-gray-100 mb-6">
                  Our modern facility combines advanced technology with skilled craftsmanship to produce the highest quality PET products.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-gold-400">ISO</div>
                    <div className="text-sm opacity-90">Certified Quality</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-accent-400">100%</div>
                    <div className="text-sm opacity-90">Customer Focus</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-xl hover-lift border border-primary-100">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Every product undergoes rigorous quality control to ensure it meets our high standards.</p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-xl hover-lift border border-accent-100">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Standards</h3>
              <p className="text-gray-600">ISO 22000 and ISO 9001 certified manufacturing processes ensure international quality.</p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-xl hover-lift border border-persian-100">
              <div className="w-16 h-16 bg-gradient-to-br from-persian-500 to-persian-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Care</h3>
              <p className="text-gray-600">Customer satisfaction is our top priority and the foundation of our business philosophy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;