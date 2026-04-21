import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    // dir="rtl" عشان يقلب الاتجاه يمين
    // h-screen تضمن إن الطول 100% من الشاشة
    // overflow-hidden تمنع سكرول المتصفح الخارجي
    <div  className="flex h-screen overflow-hidden bg-gray-50">

      {/* السيد بار */}
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* الناف بار */}
        <Navbar />

        {/* محتوى الصفحات (Outlet) هو اللي بيعمل سكرول */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>

    </div>
  );
}

export default DashboardLayout;