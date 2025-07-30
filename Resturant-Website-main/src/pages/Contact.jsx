import AnimatedPage from '../components/AnimatedPage';
import ContactForm from '../components/ContactForm';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <AnimatedPage>
    <div className="py-16 bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-amber-900">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-amber-800 mb-6">Get in Touch</h2>
            <ContactForm />
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-800 mb-6">Visit Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Culinary Street, Foodville, FC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">info@savorybites.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-900 mb-2">Hours of Operation</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
                  <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
                  <li>Sunday: 10:00 AM - 9:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}