
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, DollarSign, Users, Zap } from 'lucide-react';

const Network = () => {
  const networkStats = [
    {
      icon: Users,
      title: '5,000+',
      subtitle: 'Registered Affiliates',
      description: 'Growing network of trusted partners worldwide',
    },
    {
      icon: DollarSign,
      title: 'CPC & CPM',
      subtitle: 'Revenue Models',
      description: 'Flexible monetization options for maximum ROI',
    },
    {
      icon: BarChart3,
      title: 'Real-time',
      subtitle: 'Analytics & Reporting',
      description: 'Comprehensive insights for data-driven decisions',
    },
    {
      icon: Zap,
      title: 'Instant',
      subtitle: 'Campaign Activation',
      description: 'Quick setup and deployment across all verticals',
    },
  ];

  return (
    <section id="network" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Partner Network</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful partners in our comprehensive advertising ecosystem
          </p>
        </div>

        {/* Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {networkStats.map((stat, index) => (
            <Card key={stat.title} className="card-hover bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold gradient-text">{stat.title}</CardTitle>
                <p className="text-sm font-medium text-foreground">{stat.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">For Advertisers</CardTitle>
              <p className="text-muted-foreground">
                Reach your target audience across our diversified platform ecosystem
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Access to 5,000+ verified affiliates
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Multi-vertical campaign distribution
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Performance-based pricing (CPC/CPM)
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Real-time analytics and optimization
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-primary to-blue-600 hover:opacity-90">
                Start Advertising
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-purple-500/10 border-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">For Publishers</CardTitle>
              <p className="text-muted-foreground">
                Monetize your traffic with our high-converting campaigns
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                  Premium campaign selection
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                  Competitive payout rates
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                  Multiple ad formats and placements
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                  Dedicated account management
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-secondary to-purple-600 hover:opacity-90">
                Join as Publisher
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Network;
