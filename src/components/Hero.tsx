
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Zap, Trophy, Users, Target, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%2394a3b8%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%2020h40v1H0zM20%200v40h1V0z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="text-center max-w-6xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-full px-6 py-3 mb-8 shadow-lg">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-sm font-semibold text-slate-700">Industry Leader</span>
            </div>
            <div className="w-px h-4 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500 fill-blue-500" />
              <span className="text-sm font-semibold text-slate-700">5,000+ Partners</span>
            </div>
            <div className="w-px h-4 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
              <span className="text-sm font-semibold text-slate-700">Trusted Globally</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
            <div className="mb-2">
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                Digital Entertainment
              </span>
            </div>
            <div className="mb-2">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                & Marketing
              </span>
            </div>
            <div>
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Powerhouse
              </span>
            </div>
          </h1>

          {/* Enhanced Subtitle */}
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-4">
              Transform your digital presence with our comprehensive ecosystem of 
              <span className="text-blue-600 font-semibold"> gaming platforms</span>, 
              <span className="text-orange-500 font-semibold"> reward systems</span>, and 
              <span className="text-purple-600 font-semibold"> marketing solutions</span>.
            </p>
            <p className="text-lg text-slate-500 font-normal">
              Join thousands of successful partners in the next generation of digital entertainment.
            </p>
          </div>

          {/* Business Verticals Showcase */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {[
              { name: 'Zyrocraft', desc: 'Gaming Studio', icon: '🎮', color: 'from-purple-500 to-pink-500' },
              { name: 'Coinflow', desc: 'Rewards Platform', icon: '💰', color: 'from-green-500 to-emerald-500' },
              { name: 'GamezHub', desc: 'Gaming Network', icon: '🕹️', color: 'from-blue-500 to-cyan-500' },
              { name: 'Traffhit', desc: 'Ad Network', icon: '📈', color: 'from-orange-500 to-red-500' }
            ].map((vertical, index) => (
              <div key={vertical.name} className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 hover:border-slate-300/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-3xl mb-3">{vertical.icon}</div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">{vertical.name}</h3>
                <p className="text-slate-500 text-sm font-medium">{vertical.desc}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${vertical.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-12 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0">
              <Rocket className="mr-3 h-6 w-6" />
              Start Partnership
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-4 rounded-full border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-bold hover:bg-blue-50 transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <Play className="mr-3 h-6 w-6" />
              Watch Overview
            </Button>
          </div>

          {/* Professional Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-slate-200/60">
            <div className="group text-center p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-slate-200/40 hover:bg-white/60 hover:border-slate-300/60 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                5,000+
              </div>
              <div className="text-slate-700 font-bold text-lg mb-1">Global Partners</div>
              <div className="text-slate-500 text-sm">Across 50+ Countries</div>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-slate-200/40 hover:bg-white/60 hover:border-slate-300/60 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <div className="text-slate-700 font-bold text-lg mb-1">Business Verticals</div>
              <div className="text-slate-500 text-sm">Integrated Ecosystem</div>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-slate-200/40 hover:bg-white/60 hover:border-slate-300/60 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-slate-700 font-bold text-lg mb-1">Global Support</div>
              <div className="text-slate-500 text-sm">Always Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
