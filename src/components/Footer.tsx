import React from 'react';
import { MapPin, Phone, Mail, Briefcase, FileText, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">bitB</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading QoS networking solutions trusted by 200+ organizations. Automated discovery and intelligent mapping for networks of any size - from 100 to 100,000+ devices.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                <span>Clifton Park, NY</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                <span>+1 (518) 555-BITB</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                <span>demo@bitb.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 bitB. All rights reserved. | Revolutionizing network intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;