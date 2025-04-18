
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Upload, Bell, LineChart, FileText } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-health-soft-blue to-health-soft-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-health-deep-purple mb-4 animate-fade-in">
                Welcome to HealthSync
              </h1>
              <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Your personal health companion. Manage prescriptions, track symptoms, and stay on top of your health journey.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Link to="/signup">
                  <Button className="bg-primary hover:bg-secondary px-6 py-3 text-lg">
                    Get Started
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="px-6 py-3 text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-health-purple rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-spin-slow"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-health-bright-blue rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-spin-slow" style={{ animationDelay: "2s" }}></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-health-soft-blue rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-spin-slow" style={{ animationDelay: "4s" }}></div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Doctor using tablet"
                    className="rounded-lg shadow-2xl animate-fade-in"
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-health-deep-purple">Key Features</h2>
            <p className="mt-4 text-xl text-gray-600">Tools to help you manage your health with ease</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="health-card flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-health-soft-blue flex items-center justify-center mb-4">
                <Upload className="h-7 w-7 text-health-dark-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Prescriptions</h3>
              <p className="text-gray-600">
                Easily upload and store your prescriptions for quick access and information extraction.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="health-card flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-health-soft-blue flex items-center justify-center mb-4">
                <Bell className="h-7 w-7 text-health-dark-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Reminders</h3>
              <p className="text-gray-600">
                Never miss a dose with customized medication and appointment reminders.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="health-card flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-health-soft-blue flex items-center justify-center mb-4">
                <LineChart className="h-7 w-7 text-health-dark-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Trends</h3>
              <p className="text-gray-600">
                View personalized health insights and trends based on your medical data.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="health-card flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-health-soft-blue flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-health-dark-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hospital Forms</h3>
              <p className="text-gray-600">
                Generate pre-filled hospital admission forms for easier check-ins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-health-deep-purple">What Our Users Say</h2>
            <p className="mt-4 text-xl text-gray-600">Stories from people using HealthSync</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="health-card">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-health-purple to-health-dark-purple flex items-center justify-center text-white font-bold">
                  JP
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">John Peterson</h4>
                  <p className="text-sm text-gray-500">Patient</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "HealthSync has completely changed how I manage my medications. The reminders are a lifesaver!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="health-card">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-health-purple to-health-dark-purple flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Miller</h4>
                  <p className="text-sm text-gray-500">Caregiver</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As someone who manages health for multiple family members, HealthSync's organization tools are invaluable."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="health-card">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-health-purple to-health-dark-purple flex items-center justify-center text-white font-bold">
                  RJ
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Dr. Robert Johnson</h4>
                  <p className="text-sm text-gray-500">Physician</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I recommend HealthSync to all my patients. It helps them stay organized and engaged with their health."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-health-purple to-health-dark-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to take control of your health?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already managing their health journey with HealthSync.
          </p>
          <Link to="/signup">
            <Button className="bg-white text-health-dark-purple hover:bg-gray-100 px-8 py-3 text-lg font-medium">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
