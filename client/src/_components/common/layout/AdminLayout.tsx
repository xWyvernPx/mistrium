import React, { PropsWithChildren, useEffect, useState } from "react";
import Header from "../../admin/common/Header";
import Sidebar from "../../admin/common/Sidebar";
const AdminLayout: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    window.document.children[0].classList.add("admin");
    return () => {
      window.document.children[0].classList.remove("admin");
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
