import React from 'react';

const logos = [
  { name: 'NYS Agencies', width: 120 },
  { name: 'MVP Healthcare', width: 140 },
  { name: 'SHI International', width: 110 },
  { name: 'Albany Medical Center', width: 160 },
  { name: 'SUNY System', width: 100 },
  { name: 'Regeneron Pharmaceuticals', width: 180 },
  { name: 'GlobalFoundries', width: 140 },
  { name: 'CDPHP', width: 90 },
  { name: 'Price Chopper/Market 32', width: 170 },
  { name: 'Momentive Performance', width: 160 }
];

const TrustedLogos: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by 200+ Leading Organizations
          </h2>
          <p className="text-gray-400">
            From Fortune 500 companies to government agencies - managing over 2.5 million network devices worldwide
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-infinite">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: `${logo.width}px` }}
              >
                <div className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-6 py-4 rounded-lg font-semibold text-sm whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity duration-300">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedLogos;