
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Zap, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-orange-100/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in-up">
          {/* Attention Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-full px-4 py-2 mb-6 shimmer">
            <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span className="text-sm font-semibold text-primary-dark">Trusted by 5,000+ Partners Worldwide</span>
            <Trophy className="w-4 h-4 text-blue-500 fill-blue-500" />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
            <span className="gradient-text">Digital Entertainment</span>
            <br />
            <span className="text-gray-900">& Marketing</span>
            <br />
            <span className="gradient-text">Conglomerate</span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto font-medium leading-relaxed">
            Mobtions is a <span className="text-blue-600 font-bold">diversified technology company</span> powering the future of digital entertainment 
            through <span className="text-orange-600 font-bold">innovative gaming</span>, rewards platforms, and strategic advertising solutions.
          </p>

          {/* Business Verticals Preview with Enhanced Styling */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { name: 'Zyrocraft', icon: '🎮' },
              { name: 'Coinflow', icon: '💰' },
              { name: 'GamezHub', icon: '🕹️' },
              { name: 'Traffhit', icon: '📈' }
            ].map((vertical, index) => (
              <div key={vertical.name} className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:scale-105">
                <span className="text-lg mr-2">{vertical.icon}</span>
                <span className="text-base font-bold text-gray-800">{vertical.name}</span>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="btn-gradient text-white text-lg px-10 py-4 rounded-full font-bold shadow-lg">
              <Zap className="mr-2 h-5 w-5" />
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-4 rounded-full border-2 border-gray-400 hover:bg-gray-100 text-gray-800 font-bold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Stats with Better Visual Hierarchy */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t-2 border-gray-200">
            <div className="text-center animate-pulse-scale glow rounded-lg p-6">
              <div className="text-5xl md:text-6xl font-extrabold gradient-text mb-3">5,000+</div>
              <div className="text-gray-700 font-semibold text-lg">Registered Affiliates</div>
              <div className="text-gray-500 text-sm mt-1">Growing daily</div>
            </div>
            <div className="text-center animate-pulse-scale glow rounded-lg p-6" style={{ animationDelay: '0.5s' }}>
              <div className="text-5xl md:text-6xl font-extrabold gradient-text mb-3">4</div>
              <div className="text-gray-700 font-semibold text-lg">Business Verticals</div>
              <div className="text-gray-500 text-sm mt-1">Integrated ecosystem</div>
            </div>
            <div className="text-center animate-pulse-scale glow rounded-lg p-6" style={{ animationDelay: '1s' }}>
              <div className="text-5xl md:text-6xl font-extrabold gradient-text mb-3">∞</div>
              <div className="text-gray-700 font-semibold text-lg">Growth Potential</div>
              <div className="text-gray-500 text-sm mt-1">Unlimited opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
