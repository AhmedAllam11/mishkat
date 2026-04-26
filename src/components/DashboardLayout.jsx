import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function DashboardLayout() {
  const { accountType } = useContext(AuthContext);
  const location = useLocation();

  // If on the root dashboard page, redirect to the appropriate sub-page based on role
  if (location.pathname === "/dashboard" || location.pathname === "/dashboard/") {
    if (accountType === 'student') return <Navigate to="/dashboard/student/profile" replace />;
    if (accountType === 'teacher') return <Navigate to="/dashboard/teacher/students" replace />;
    if (accountType === 'parent') return <Navigate to="/dashboard/parent/reports" replace />;
    if (accountType === 'admin') return <Navigate to="/dashboard/admin/accounts" replace />;
  }
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>

    </div>
  );
}

export default DashboardLayout;