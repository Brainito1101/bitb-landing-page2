import React, { useEffect, useRef, useState } from 'react';
import { Zap, Network, Eye, Activity } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fully Automated Discovery & Updates',
    description: 'Discover 99.8% of network devices in under 5 minutes. Auto-updates every 15 seconds with SNMP v1/v2c/v3, SSH, and WMI protocols. Zero manual configuration needed.'
  },
  {
    icon: Network,
    title: 'Physical / Logical / vPhysical Topologies',
    description: 'Generate Layer 2/3 topologies for 10,000+ node networks. Support for Cisco, Juniper, Arista, HP, Dell, and 200+ vendor types with VLAN and routing table analysis.'
  },
  {
    icon: Eye,
    title: 'Insight, Change Assist, Path View, Network Tables',
    description: 'Track 50+ network metrics per device. Predictive change impact analysis, end-to-end path tracing, and customizable dashboards with 99.9% uptime SLA monitoring.'
  },
  {
    icon: Activity,
    title: 'Instant Network Health Monitoring & Root Cause Analysis',
    description: 'AI-powered root cause analysis resolves 85% of network issues in under 2 minutes. Monitor bandwidth utilization, packet loss, latency, and device health across 24/7 operations.'
  }
];

const Features: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Key Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the power of automated network intelligence with our comprehensive suite of tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => cardRefs.current[index] = el}
              data-index={index}
              className={`group relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                visibleCards[index] ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-xl">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;