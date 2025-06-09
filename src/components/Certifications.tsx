import React from 'react';
import { Award, Shield, CheckCircle, Globe } from 'lucide-react';

const Certifications = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-primary-600 to-persian-600 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to maintaining the highest standards of quality, safety, and environmental responsibility.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* ISO 22000 */}
            <div className="bg-white rounded-xl shadow-xl p-8 hover-lift border border-primary-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">ISO 22000</h3>
                  <p className="text-gray-600">Food Safety Management</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Our ISO 22000 certification ensures that our food packaging products meet the highest international standards for food safety management systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-2" />
                  Hazard Analysis and Critical Control Points (HACCP)
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-2" />
                  Food Safety Management System
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-2" />
                  Continuous Improvement Process
                </li>
              </ul>
            </div>

            {/* ISO 9001 */}
            <div className="bg-white rounded-xl shadow-xl p-8 hover-lift border border-persian-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-persian-500 to-persian-600 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">ISO 9001</h3>
                  <p className="text-gray-600">Quality Management System</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                ISO 9001 certification demonstrates our commitment to quality management and continuous improvement in all aspects of our operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-2" />
                  Quality Management System
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-2" />
                  Customer Satisfaction Focus
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-2" />
                  Process Optimization
                </li>
              </ul>
            </div>
          </div>

          {/* Quality Commitment */}
          <div className="bg-gradient-to-r from-primary-600 to-persian-600 rounded-xl p-8 text-white text-center shadow-2xl">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Global Quality Standards</h3>
            <p className="text-xl mb-6 opacity-90">
              Our certifications ensure that every product meets international quality and safety requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2 text-gold-400">100%</div>
                <div className="opacity-90">Quality Tested</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2 text-accent-400">ISO</div>
                <div className="opacity-90">Certified Processes</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2 text-persian-300">24/7</div>
                <div className="opacity-90">Quality Monitoring</div>
              </div>
            </div>
          </div>

          {/* Persian Text Section */}
          <div className="mt-12 persian-text bg-white rounded-xl p-8 shadow-xl border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">تعهد ما به کیفیت</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              حفظ دستاوردهای گذشته، طراحی محصولات جدید با توجه به نیاز مشتری، رعایت حفظ کیفیت عرضه محصولات با قیمت مناسب در راستای مشتری محوری، از اهداف این شرکت است. نشان اعتبار و موفقیت ما رضایت مشتری گرامی و انگیزه‌ای برای تلاش روز افزون‌مان می‌باشد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;