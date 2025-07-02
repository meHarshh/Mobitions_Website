
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad2, Gift, Globe, TrendingUp, Network, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: 'Zyrocraft',
      subtitle: 'Game Studio',
      description: 'Cutting-edge casual games with strategic ad monetization through CPC and CPM partnerships.',
      features: ['Casual Game Development', 'Ad Monetization', 'Brand Partnerships', 'Performance Campaigns'],
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Gift,
      title: 'Coinflow',
      subtitle: 'Offer Wall App',
      description: 'Innovative reward platform creating win-win ecosystems for users, advertisers, and partners.',
      features: ['User Rewards System', 'App Downloads', 'Service Registrations', 'Targeted Offers'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Globe,
      title: 'GamezHub',
      subtitle: 'HTML5 Gaming Platform',
      description: 'Exclusive gaming library with Google Ads integration and WebView technology for seamless integration.',
      features: ['HTML5 Games', 'Google Ads Integration', 'WebView Technology', 'Revenue Sharing'],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: TrendingUp,
      title: 'Traffhit',
      subtitle: 'Content & Ad Network',
      description: 'Finance, health, fitness, and news platforms monetized through native ads, banners, and video ads.',
      features: ['Native Discovery Ads', 'Banner Advertising', 'Video Ads', 'Targeted Campaigns'],
      gradient: 'from-green-500 to-blue-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Our <span className="gradient-text">Business Verticals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four distinct divisions working together to revolutionize digital entertainment and marketing
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className="card-hover bg-white border border-gray-200 shadow-lg hover:shadow-xl overflow-hidden group">
              <CardHeader className="relative">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                  {service.title}
                  <span className="text-sm font-normal text-gray-500">({service.subtitle})</span>
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Affiliate Network Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-2 border-blue-100 shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Network className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold mb-2 text-gray-800">
              <span className="gradient-text">Affiliate Ad Network</span>
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Bridging advertisers and publishers with our extensive network
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our affiliate ad network serves as the backbone connecting advertisers with over 5,000 registered affiliates, 
              creating mutually beneficial partnerships while optimizing revenue streams for all stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-orange-500 hover:opacity-90 text-white">
                Join as Advertiser
              </Button>
              <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                Become an Affiliate
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
