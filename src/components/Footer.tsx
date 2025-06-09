import React from 'react';
import { Phone, Mail, MessageCircle, Award, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-persian-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MP</span>
                </div>
                <span className="font-bold text-xl">MadeByPersians.ir</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading manufacturer of premium PET products including bottles and jars. 
                ISO 22000 and ISO 9001 certified with a commitment to quality, innovation, and customer satisfaction.
              </p>
              <div className="persian-text bg-gray-800 rounded-lg p-4 mb-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  تولیدکننده محصولات PET با کیفیت بالا - دارای گواهینامه‌های بین‌المللی ISO
                </p>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 px-3 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-gold-400" />
                  <span className="text-sm">ISO 22000</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-persian-600 to-persian-700 px-3 py-2 rounded-lg">
                  <Shield className="w-5 h-5 text-gold-400" />
                  <span className="text-sm">ISO 9001</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <a 
                  href="tel:+989214843361" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+98 921 484 3361</span>
                </a>
                <a 
                  href="mailto:sales@madebypersians.ir" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-persian-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>sales@madebypersians.ir</span>
                </a>
                <a 
                  href="https://wa.me/989214843361" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <a 
                  href="https://wa.me/989214843361?text=Hello, I'm interested in your PET products. Could you please provide more information?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-persian-500 hover:from-primary-600 hover:to-persian-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-semibold">Get Quote</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 MadeByPersians.ir. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Premium PET Products</span>
                <span>•</span>
                <span>ISO Certified</span>
                <span>•</span>
                <span>Made in Iran</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;