import React, { useEffect, useRef, useState } from 'react';
import { Target, Shield, Clock, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Unmatched Accuracy',
    description: '99.97% accuracy rate across 500,000+ discovered devices. Zero false positives with advanced fingerprinting algorithms.'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Detect 15 types of security vulnerabilities including rogue devices, unauthorized access points, and compliance violations in real-time.'
  },
  {
    icon: Clock,
    title: 'Time Saving',
    description: 'Reduce network documentation time by 95%. Complete enterprise network mapping in 10 minutes vs. 2-3 weeks manually.'
  },
  {
    icon: Zap,
    title: 'Migration Support',
    description: 'Successfully planned 1,200+ network migrations with 99.2% success rate. Automated dependency mapping and risk assessment.'
  }
];

const WhyBitB: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why bitB Helps
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your network operations with intelligent automation and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => itemRefs.current[index] = el}
              data-index={index}
              className={`text-center group ${
                visibleItems[index] ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 scale-150"></div>
                <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-full border border-slate-600 group-hover:border-cyan-500/50 transition-all duration-300">
                  <benefit.icon className="w-10 h-10 text-cyan-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {benefit.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBitB;