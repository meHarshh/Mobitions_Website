
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb, Trophy } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We leverage data-driven insights to optimize performance across all verticals.',
    },
    {
      icon: Users,
      title: 'Partner-Centric',
      description: 'Building lasting relationships through transparent and mutually beneficial partnerships.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly evolving our technologies and approaches to stay ahead of industry trends.',
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results and maximizing ROI for all stakeholders.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              About <span className="gradient-text">Mobtions</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Mobtions represents the convergence of entertainment, technology, and strategic marketing. 
              As a diversified digital conglomerate, we've built a comprehensive ecosystem that spans 
              game development, user rewards, content platforms, and affiliate marketing.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our integrated approach allows us to create synergies across all business verticals, 
              maximizing value for our partners while delivering engaging experiences for end users.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">5,000+</div>
                <div className="text-sm text-gray-500">Active Affiliates</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">Multi-Million</div>
                <div className="text-sm text-gray-500">Ad Impressions</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="card-hover bg-white border border-gray-200 shadow-lg hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
