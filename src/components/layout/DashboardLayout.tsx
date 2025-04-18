
import { ReactNode } from "react";
import MainNav from "./MainNav";
import DashboardSidebar from "./DashboardSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="flex flex-1">
        {!isMobile && <DashboardSidebar />}
        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-gray-50">
          {isMobile && (
            <div className="mb-6 overflow-x-auto pb-2">
              <div className="flex space-x-2">
                <a href="/dashboard" className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-white shadow-sm hover:bg-gray-50">
                  Dashboard
                </a>
                <a href="/prescriptions" className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-white shadow-sm hover:bg-gray-50">
                  Prescriptions
                </a>
                <a href="/trends" className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-white shadow-sm hover:bg-gray-50">
                  Trends
                </a>
                <a href="/notifications" className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-white shadow-sm hover:bg-gray-50">
                  Reminders
                </a>
                <a href="/symptoms" className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-white shadow-sm hover:bg-gray-50">
                  Symptoms
                </a>
              </div>
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
