
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Zap, Star } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
            <span className="text-sm font-bold text-gray-800">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900">
            Partner <span className="gradient-text">With Us</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Ready to <span className="text-blue-600 font-bold">unlock new revenue streams?</span> Let's discuss how Mobtions can help grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 shadow-xl hover:shadow-2xl card-hover group overflow-hidden">
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-700 font-medium">partnerships@mobtions.com</p>
                    <p className="text-gray-500 text-sm">24/7 response time</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 shadow-xl hover:shadow-2xl card-hover group overflow-hidden">
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-700 font-medium">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Business hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 shadow-xl hover:shadow-2xl card-hover group overflow-hidden">
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-700 font-medium">Digital Innovation Hub</p>
                    <p className="text-gray-500 text-sm">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-2xl hover:shadow-3xl group overflow-hidden">
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</CardTitle>
                <p className="text-gray-700 text-lg font-medium">
                  Tell us about your business and how we can <span className="text-blue-600 font-bold">work together</span>
                </p>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-base font-bold mb-2 block text-gray-800">Name</label>
                    <Input placeholder="Your full name" className="border-2 border-gray-300 focus:border-blue-500 text-gray-800 font-medium py-3" />
                  </div>
                  <div>
                    <label className="text-base font-bold mb-2 block text-gray-800">Email</label>
                    <Input type="email" placeholder="your@email.com" className="border-2 border-gray-300 focus:border-blue-500 text-gray-800 font-medium py-3" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-base font-bold mb-2 block text-gray-800">Company</label>
                    <Input placeholder="Your company name" className="border-2 border-gray-300 focus:border-blue-500 text-gray-800 font-medium py-3" />
                  </div>
                  <div>
                    <label className="text-base font-bold mb-2 block text-gray-800">Partnership Type</label>
                    <Input placeholder="Advertiser / Publisher / Other" className="border-2 border-gray-300 focus:border-blue-500 text-gray-800 font-medium py-3" />
                  </div>
                </div>

                <div>
                  <label className="text-base font-bold mb-2 block text-gray-800">Message</label>
                  <Textarea 
                    placeholder="Tell us about your business goals and how we can help..."
                    rows={6}
                    className="border-2 border-gray-300 focus:border-blue-500 text-gray-800 font-medium"
                  />
                </div>

                <Button className="w-full btn-gradient text-white text-xl py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Zap className="mr-2 h-6 w-6" />
                  Send Message
                  <Send className="ml-2 h-6 w-6" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
