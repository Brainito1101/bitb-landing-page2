import React from 'react';
import { Users, Shield, BarChart } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Consulting',
    description: 'Expert network architecture consulting with 20+ years experience. Strategic planning for enterprises managing 10,000+ devices across multiple data centers.'
  },
  {
    icon: Shield,
    title: 'Secure Design',
    description: 'SOC 2 Type II compliant security assessments. Zero-trust architecture design with multi-factor authentication and encrypted data transmission protocols.'
  },
  {
    icon: BarChart,
    title: 'Performance Management',
    description: '24/7 NOC services monitoring 50+ KPIs. Achieve 99.99% uptime with proactive alerting and automated remediation for critical network events.'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Support & Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive support and professional services to maximize your network potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-cyan-500 to-blue-500 p-4 rounded-xl">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;