
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}

export function DashboardCard({
  title,
  icon,
  children,
  className,
  footer,
}: DashboardCardProps) {
  return (
    <div className={cn("bg-white rounded-lg shadow-sm overflow-hidden", className)}>
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h3 className="font-medium text-lg flex items-center gap-2">
          {icon && <span className="text-primary">{icon}</span>}
          {title}
        </h3>
      </div>
      <div className="p-6">{children}</div>
      {footer && <div className="px-6 py-3 bg-gray-50 border-t">{footer}</div>}
    </div>
  );
}
