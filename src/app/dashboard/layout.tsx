import type { ReactNode } from "react";
import Sidebar from "~/Components/Sidebar/Sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gray-100">{children}</main>
    </div>
  );
};

export default DashboardLayout;
