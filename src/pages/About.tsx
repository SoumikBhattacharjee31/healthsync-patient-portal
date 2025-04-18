
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Shield, 
  Lock, 
  Users, 
  ShieldCheck, 
  BookOpen, 
  Smartphone,
  Laptop
} from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-health-soft-blue to-health-soft-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-health-deep-purple mb-4">About HealthSync</h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Our mission is to empower patients with tools to manage their healthcare journey effectively and securely.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-health-deep-purple mb-4">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                HealthSync was founded with a simple belief: healthcare should be accessible, transparent, and easy to manage for everyone.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our team of healthcare professionals and technology experts came together to build a platform that bridges the gap between patients and their medical information, making healthcare management intuitive and stress-free.
              </p>
              <p className="text-lg text-gray-700">
                Today, HealthSync is used by thousands of patients who appreciate having their prescriptions, symptoms, and health history at their fingertips.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare professionals"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white text-lg font-medium">
                      Building technology that puts patients first
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-health-deep-purple">Our Core Values</h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-health-soft-blue flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-health-dark-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient-Centered</h3>
              <p className="text-gray-600">
                We design every feature with patients' needs in mind, ensuring our platform is accessible and useful for everyone, regardless of technical proficiency.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-health-soft-blue flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-health-dark-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy & Security</h3>
              <p className="text-gray-600">
                We maintain the highest standards of data protection, ensuring your sensitive health information is always secure and only accessible to you.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-health-soft-blue flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-health-dark-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-600">
                We believe informed patients make better health decisions, which is why we provide reliable, easy-to-understand health resources.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-health-deep-purple">Key Features</h2>
            <p className="mt-4 text-xl text-gray-600">
              Tools designed to simplify your healthcare journey
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Prescription Management</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Upload prescriptions and extract key information automatically. Keep all your medication details in one secure place.
                </p>
                <ul className="space-y-3">
                  {[
                    "Easy image upload from any device",
                    "Automatic text extraction from prescription images",
                    "Medication history at your fingertips",
                    "Set reminders for refills and dosages"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1576671081030-0086bc7a1155?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Prescription management"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gray-100 p-6 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Health trends"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4">Health Trends & Insights</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Visualize your health data and gain insights from anonymized local health trends.
                </p>
                <ul className="space-y-3">
                  {[
                    "Personal health metrics tracking",
                    "Medication adherence monitoring",
                    "Regional health trend visualization",
                    "Personalized health recommendations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Data Security Section */}
      <section className="py-16 bg-health-soft-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-health-deep-purple">Your Data, Protected</h2>
            <p className="mt-4 text-xl text-gray-700">
              We take the security and privacy of your health information seriously
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Lock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600">
                All your health data is encrypted in transit and at rest, ensuring only you can access your information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ShieldCheck className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">HIPAA Compliant</h3>
              <p className="text-gray-600">
                Our platform adheres to the strictest healthcare privacy standards to protect your sensitive medical information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">You Control Your Data</h3>
              <p className="text-gray-600">
                We never share your data without your explicit permission. You decide who can access your health information.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Device Compatibility */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-health-deep-purple">Available Everywhere</h2>
            <p className="mt-4 text-xl text-gray-600">
              Access HealthSync on all your devices
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-health-soft-blue mb-4">
                <Smartphone className="h-10 w-10 text-health-dark-purple" />
              </div>
              <h3 className="text-xl font-semibold">Mobile</h3>
              <p className="text-gray-600">iOS & Android</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-health-soft-blue mb-4">
                <Laptop className="h-10 w-10 text-health-dark-purple" />
              </div>
              <h3 className="text-xl font-semibold">Web</h3>
              <p className="text-gray-600">Any Browser</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-health-purple to-health-dark-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to take control of your health?</h2>
          <p className="text-xl mb-8">
            Join thousands of patients who are managing their healthcare journey with ease.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-white text-health-dark-purple hover:bg-gray-100 px-8 py-3 text-lg">
                Sign Up for Free
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
