
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const businessVerticals = [
    { name: 'Zyrocraft', description: 'Game Studio' },
    { name: 'Coinflow', description: 'Offer Wall App' },
    { name: 'GamezHub', description: 'Gaming Platform' },
    { name: 'Traffhit', description: 'Content Network' },
  ];

  const quickLinks = [
    'About Us',
    'Services',
    'Partnership',
    'Contact',
    'Privacy Policy',
    'Terms of Service',
  ];

  const contactInfo = [
    'partnerships@mobtions.com',
    '+1 (555) 123-4567',
    'San Francisco, CA',
  ];

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold gradient-text">Mobtions</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              A diversified digital entertainment and marketing conglomerate powering the future of online engagement.
            </p>
            <div className="text-sm text-muted-foreground">
              <div className="gradient-text font-semibold">5,000+ Active Affiliates</div>
              <div>Trusted Partner Network</div>
            </div>
          </div>

          {/* Business Verticals */}
          <div>
            <h3 className="font-semibold mb-4">Business Verticals</h3>
            <ul className="space-y-2">
              {businessVerticals.map((vertical) => (
                <li key={vertical.name} className="text-sm">
                  <span className="font-medium">{vertical.name}</span>
                  <span className="text-muted-foreground"> - {vertical.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              {contactInfo.map((info) => (
                <li key={info} className="text-sm text-muted-foreground">
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>
            © 2024 Mobtions. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            Empowering digital growth through innovative partnerships
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
