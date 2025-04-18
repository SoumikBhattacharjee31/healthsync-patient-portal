
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { 
  Upload, 
  Bell, 
  LineChart, 
  FileText, 
  Calendar,
  Pill,
  AlertTriangle
} from "lucide-react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    upcomingAppointments: 0,
    activeMedications: 0,
    recentPrescriptions: 0,
    recentSymptoms: 0,
  });

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        upcomingAppointments: 2,
        activeMedications: 3,
        recentPrescriptions: 1,
        recentSymptoms: 2,
      });
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back, here's an overview of your health information</p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner size="lg" />
        </div>
      ) : (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard
              title="Upcoming Appointments"
              icon={<Calendar className="h-5 w-5" />}
              className="border-l-4 border-health-purple"
            >
              <div className="text-3xl font-bold">{stats.upcomingAppointments}</div>
              <p className="text-gray-600">Next: Dr. Smith on April 28</p>
            </DashboardCard>
            
            <DashboardCard
              title="Active Medications"
              icon={<Pill className="h-5 w-5" />}
              className="border-l-4 border-health-bright-blue"
            >
              <div className="text-3xl font-bold">{stats.activeMedications}</div>
              <p className="text-gray-600">Next dose: Lisinopril at 8:00 PM</p>
            </DashboardCard>
            
            <DashboardCard
              title="Recent Prescriptions"
              icon={<FileText className="h-5 w-5" />}
              className="border-l-4 border-health-sky-blue"
            >
              <div className="text-3xl font-bold">{stats.recentPrescriptions}</div>
              <p className="text-gray-600">Last updated: 3 days ago</p>
            </DashboardCard>
            
            <DashboardCard
              title="Symptom Log"
              icon={<AlertTriangle className="h-5 w-5" />}
              className="border-l-4 border-health-deep-purple"
            >
              <div className="text-3xl font-bold">{stats.recentSymptoms}</div>
              <p className="text-gray-600">Last logged: Headache, yesterday</p>
            </DashboardCard>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/prescriptions">
                <Button variant="outline" className="w-full h-full py-6 flex flex-col items-center justify-center gap-2">
                  <Upload className="h-6 w-6" />
                  <span>Upload Prescription</span>
                </Button>
              </Link>
              
              <Link to="/notifications">
                <Button variant="outline" className="w-full h-full py-6 flex flex-col items-center justify-center gap-2">
                  <Bell className="h-6 w-6" />
                  <span>Manage Reminders</span>
                </Button>
              </Link>
              
              <Link to="/trends">
                <Button variant="outline" className="w-full h-full py-6 flex flex-col items-center justify-center gap-2">
                  <LineChart className="h-6 w-6" />
                  <span>View Health Trends</span>
                </Button>
              </Link>
              
              <Link to="/forms">
                <Button variant="outline" className="w-full h-full py-6 flex flex-col items-center justify-center gap-2">
                  <FileText className="h-6 w-6" />
                  <span>Hospital Forms</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DashboardCard title="Recent Activity" className="lg:col-span-1">
              <ul className="divide-y">
                <li className="py-3 flex justify-between">
                  <div>
                    <p className="font-medium">Prescription Uploaded</p>
                    <p className="text-sm text-gray-500">Amoxicillin 500mg</p>
                  </div>
                  <span className="text-sm text-gray-500">Today</span>
                </li>
                <li className="py-3 flex justify-between">
                  <div>
                    <p className="font-medium">Appointment Scheduled</p>
                    <p className="text-sm text-gray-500">Dr. Smith - Cardiology</p>
                  </div>
                  <span className="text-sm text-gray-500">Yesterday</span>
                </li>
                <li className="py-3 flex justify-between">
                  <div>
                    <p className="font-medium">Symptom Logged</p>
                    <p className="text-sm text-gray-500">Headache - Moderate</p>
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </li>
              </ul>
              
              <div className="mt-4">
                <Button variant="ghost" className="text-sm">View all activity</Button>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Medication Schedule Today" className="lg:col-span-1">
              <ul className="divide-y">
                <li className="py-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-health-soft-blue flex items-center justify-center mr-3">
                      <Pill className="h-5 w-5 text-health-deep-purple" />
                    </div>
                    <div>
                      <p className="font-medium">Lisinopril 10mg</p>
                      <p className="text-sm text-gray-500">1 pill</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">8:00 PM</p>
                    <p className="text-sm text-gray-500">With food</p>
                  </div>
                </li>
                <li className="py-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-health-soft-blue flex items-center justify-center mr-3">
                      <Pill className="h-5 w-5 text-health-deep-purple" />
                    </div>
                    <div>
                      <p className="font-medium">Metformin 500mg</p>
                      <p className="text-sm text-gray-500">2 pills</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">9:00 PM</p>
                    <p className="text-sm text-gray-500">After dinner</p>
                  </div>
                </li>
                <li className="py-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-health-soft-blue flex items-center justify-center mr-3">
                      <Pill className="h-5 w-5 text-health-deep-purple" />
                    </div>
                    <div>
                      <p className="font-medium">Vitamin D 1000 IU</p>
                      <p className="text-sm text-gray-500">1 pill</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">9:00 PM</p>
                    <p className="text-sm text-gray-500">With dinner</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-4">
                <Link to="/notifications">
                  <Button variant="ghost" className="text-sm">View full schedule</Button>
                </Link>
              </div>
            </DashboardCard>
          </div>
        </>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
