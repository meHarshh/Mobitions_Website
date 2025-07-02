
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-orange-100/50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Digital Entertainment</span>
            <br />
            <span className="text-gray-800">& Marketing</span>
            <br />
            <span className="gradient-text">Conglomerate</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Mobtions is a diversified technology company powering the future of digital entertainment 
            through innovative gaming, rewards platforms, and strategic advertising solutions.
          </p>

          {/* Business Verticals Preview */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Zyrocraft', 'Coinflow', 'GamezHub', 'Traffhit'].map((vertical) => (
              <div key={vertical} className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <span className="text-sm font-medium text-gray-700">{vertical}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-orange-500 hover:opacity-90 text-lg px-8 text-white">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-gray-300 hover:bg-gray-50 text-gray-700">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center animate-pulse-scale">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5,000+</div>
              <div className="text-gray-600">Registered Affiliates</div>
            </div>
            <div className="text-center animate-pulse-scale">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4</div>
              <div className="text-gray-600">Business Verticals</div>
            </div>
            <div className="text-center animate-pulse-scale">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-gray-600">Growth Potential</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
