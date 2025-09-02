import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = () => {
    setIsChatOpen(true);
    // Simulate opening a chat widget
    setTimeout(() => setIsChatOpen(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Network?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join 200+ organizations already using bitB to manage over 2.5M network devices. Schedule your personalized demo today and see results in under 10 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={handleChatClick}
            className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <MessageCircle className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Want to chat?
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>

          <div className="text-gray-400 text-lg">or</div>

          <button className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-cyan-500 rounded-full hover:bg-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
            <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            Send us a message
          </button>
        </div>

        {isChatOpen && (
          <div className="fixed bottom-6 right-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600 rounded-2xl p-6 max-w-sm animate-scale-in shadow-2xl z-50">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-white font-semibold">Chat Support</span>
            </div>
            <p className="text-gray-300 text-sm">Hi! We're here to help. How can we assist you with bitB today?</p>
            <div className="mt-4 flex">
              <div className="flex-1 flex space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;