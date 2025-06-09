import React from 'react';
import { Award, Shield, CheckCircle, Globe } from 'lucide-react';

const Certifications = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-primary-500">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to maintaining the highest standards of quality, safety, and environmental responsibility.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* ISO 22000 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-8 h-8 text-primary-500" />
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
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Hazard Analysis and Critical Control Points (HACCP)
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Food Safety Management System
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Continuous Improvement Process
                </li>
              </ul>
            </div>

            {/* ISO 9001 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-persian-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-persian-500" />
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
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Quality Management System
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Customer Satisfaction Focus
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Process Optimization
                </li>
              </ul>
            </div>
          </div>

          {/* Quality Commitment */}
          <div className="bg-gradient-to-r from-primary-500 to-persian-500 rounded-lg p-8 text-white text-center">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Global Quality Standards</h3>
            <p className="text-xl mb-6 opacity-90">
              Our certifications ensure that every product meets international quality and safety requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="opacity-90">Quality Tested</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">ISO</div>
                <div className="opacity-90">Certified Processes</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Quality Monitoring</div>
              </div>
            </div>
          </div>

          {/* Persian Text Section */}
          <div className="mt-12 persian-text bg-white rounded-lg p-8 shadow-lg">
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