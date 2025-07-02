
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Partner <span className="gradient-text">With Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to unlock new revenue streams? Let's discuss how Mobtions can help grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                    <p className="text-gray-600">partnerships@mobtions.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Visit Us</h3>
                    <p className="text-gray-600">Digital Innovation Hub<br />San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Get In Touch</CardTitle>
                <p className="text-gray-600">
                  Tell us about your business and how we can work together
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-700">Name</label>
                    <Input placeholder="Your full name" className="border-gray-300 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-700">Email</label>
                    <Input type="email" placeholder="your@email.com" className="border-gray-300 focus:border-blue-500" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-700">Company</label>
                    <Input placeholder="Your company name" className="border-gray-300 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-700">Partnership Type</label>
                    <Input placeholder="Advertiser / Publisher / Other" className="border-gray-300 focus:border-blue-500" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">Message</label>
                  <Textarea 
                    placeholder="Tell us about your business goals and how we can help..."
                    rows={6}
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-orange-500 hover:opacity-90 text-lg py-6 text-white">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
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
