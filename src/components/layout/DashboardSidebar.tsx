
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Pill, 
  LineChart, 
  FileText, 
  Bell, 
  CircleHelp, 
  User, 
  Upload, 
  AlertTriangle,
  BookOpen
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, isActive }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
};

const DashboardSidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const sidebarItems = [
    {
      icon: Upload,
      label: "Upload Prescription",
      href: "/prescriptions",
    },
    {
      icon: LineChart,
      label: "Health Trends",
      href: "/trends",
    },
    {
      icon: FileText,
      label: "Hospital Forms",
      href: "/forms",
    },
    {
      icon: Bell,
      label: "Notifications",
      href: "/notifications",
    },
    {
      icon: Pill,
      label: "Medications",
      href: "/medications",
    },
    {
      icon: AlertTriangle,
      label: "Symptom Tracker",
      href: "/symptoms",
    },
    {
      icon: BookOpen,
      label: "Resources",
      href: "/resources",
    },
    {
      icon: User,
      label: "Profile",
      href: "/profile",
    },
    {
      icon: CircleHelp,
      label: "Help",
      href: "/help",
    },
  ];

  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 border-r flex-col p-4 bg-sidebar">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-health-purple to-health-dark-purple flex items-center justify-center">
          <span className="text-white font-bold text-lg">H</span>
        </div>
        <span className="text-xl font-bold text-health-deep-purple">HealthSync</span>
      </div>
      <nav className="space-y-1 flex-1">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
