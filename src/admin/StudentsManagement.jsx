import React, { useState } from 'react';
import { FaPlus, FaFilter, FaSearch, FaEllipsisV, FaFileExport, FaCog } from 'react-icons/fa';

function StudentsManagement() {
  const [search, setSearch] = useState("");

  const students = [
    { id: 'STU-29482#', name: 'عبدالرحمن محمد العتيبي', details: 'سنتين في المسار - المستوى الثالث', status: 'نشط', initial: 'ع' },
    { id: 'STU-11283#', name: 'نورة عبدالله القحطاني', details: 'جديدة - بانتظار التسكين', status: 'نشط', initial: 'ن', color: 'bg-red-100 text-red-600' },
    { id: 'STU-66921#', name: 'خالد إبراهيم المنصور', details: 'منسحب - إجازة دراسية', status: 'غير نشط', initial: 'خ', color: 'bg-gray-200 text-gray-600' },
    { id: 'STU-55418#', name: 'مريم صالح السالم', details: 'خمس سنوات - خاتمة', status: 'نشط', initial: 'م' },
    { id: 'STU-19882#', name: 'فهد بندر الرويلي', details: 'سنة واحدة - المستوى الأول', status: 'نشط', initial: 'ف' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-right" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">إدارة الطلاب</h1>
          <p className="text-sm text-gray-500">متابعة وتنظيم سجلات الطلاب المسجلين في النظام</p>
        </div>
        <div className="flex gap-4">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="بحث عن طالب، معرف، أو حلقة..."
              className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button className="flex items-center justify-center p-2 border rounded-full text-gray-500 hover:bg-gray-100">
             <FaCog />
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <p className="text-gray-500 text-sm mb-2">إجمالي الطلاب</p>
            <h2 className="text-3xl font-bold text-emerald-800">1,284</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-200 border-b-4 border-b-emerald-500 text-center">
            <p className="text-gray-500 text-sm mb-2">طلاب نشطون</p>
            <h2 className="text-3xl font-bold text-emerald-600">1,150</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-200 border-b-4 border-b-red-500 text-center">
            <p className="text-gray-500 text-sm mb-2">غير نشط</p>
            <h2 className="text-3xl font-bold text-red-500">134</h2>
        </div>

        <div className="bg-emerald-800 text-white p-6 rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-center">
          <div className="z-10">
            <h3 className="font-bold mb-2">الربط الأكاديمي</h3>
            <p className="text-emerald-100 text-xs leading-relaxed">تم ربط 92% من الطلاب بحلقات تعليمية نشطة حالياً.</p>
          </div>
        </div>
      </div>

      {/* Actions & Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          
          <div className="flex gap-4 items-center">
            <div className="flex bg-gray-100 p-1 rounded-lg">
                <button className="px-6 py-1 text-sm bg-white shadow-sm rounded-md text-gray-800 font-medium">الكل</button>
                <button className="px-6 py-1 text-sm text-gray-500 hover:text-gray-800">نشط</button>
                <button className="px-6 py-1 text-sm text-gray-500 hover:text-gray-800">غير نشط</button>
            </div>
          </div>

          <div className="flex gap-2">
             <button className="flex items-center gap-2 bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition">
              <FaPlus /> إضافة طالب جديد
            </button>
             <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition">
               <FaFilter /> تصفية متقدمة
             </button>
             <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition">
               <FaFileExport /> تصدير القائمة
             </button>
          </div>
        </div>

        <table className="w-full text-sm text-right">
          <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
            <tr>
              <th className="py-4 px-6 font-medium">الاسم</th>
              <th className="py-4 px-6 font-medium text-center">المعرف (ID)</th>
              <th className="py-4 px-6 font-medium text-center">الحالة</th>
              <th className="py-4 px-6 font-medium">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="py-4 px-6 flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${student.color || 'bg-emerald-100 text-emerald-700'}`}>
                    {student.initial}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{student.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{student.details}</p>
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-500 text-center font-mono text-xs">{student.id}</td>
                <td className="py-4 px-6 text-center">
                  <span className={`px-4 py-1 rounded-full text-xs font-medium ${student.status === 'نشط' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                    {student.status === 'نشط' ? '• نشط' : '• غير نشط'}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-400 cursor-pointer hover:text-gray-600">
                  <FaEllipsisV />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 bg-gray-50">
          <div>عرض 10 من أصل 1,284 طالب</div>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-gray-50">&lt;</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border bg-emerald-800 text-white">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-gray-50">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-gray-50">3</button>
            <span className="w-8 h-8 flex items-center justify-center">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-gray-50">129</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-gray-50">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsManagement;
