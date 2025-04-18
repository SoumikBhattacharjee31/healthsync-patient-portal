
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-health-purple to-health-dark-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="ml-2 text-xl font-bold text-health-deep-purple">HealthSync</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Empowering patients to take control of their healthcare journey with
              modern tools and resources.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Features</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/prescriptions" className="text-gray-500 hover:text-health-purple text-sm">
                  Prescription Management
                </Link>
              </li>
              <li>
                <Link to="/trends" className="text-gray-500 hover:text-health-purple text-sm">
                  Health Trends
                </Link>
              </li>
              <li>
                <Link to="/forms" className="text-gray-500 hover:text-health-purple text-sm">
                  Hospital Forms
                </Link>
              </li>
              <li>
                <Link to="/notifications" className="text-gray-500 hover:text-health-purple text-sm">
                  Reminders
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/help" className="text-gray-500 hover:text-health-purple text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-health-purple text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-500 hover:text-health-purple text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-health-purple text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-health-purple text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-health-purple text-sm">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-health-purple text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-health-purple text-sm">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} HealthSync. All rights reserved. For CSE 408 project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
