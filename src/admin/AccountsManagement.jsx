import React, { useState } from 'react';
import { FaPlus, FaFilter, FaSearch, FaEllipsisV, FaUsers, FaUserGraduate, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';

function AccountsManagement() {
  const [search, setSearch] = useState("");

  const users = [
    { id: '2024-05110', name: 'عبدالرحمن محمد الفارس', type: 'معلم', joinDate: '12 مارس 2024', status: 'نشط', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: '2024-09822', name: 'سعود بن عبدالله', type: 'طالب', joinDate: '05 فبراير 2024', status: 'نشط', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: '2023-11004', name: 'نورة خالد العتيبي', type: 'ولي أمر', joinDate: '20 نوفمبر 2023', status: 'متوقف', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: '2024-01229', name: 'ياسر سليمان', type: 'معلم', joinDate: '15 يناير 2024', status: 'نشط', avatar: 'https://i.pravatar.cc/150?img=13' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-right" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">إدارة الحسابات</h1>
          <p className="text-sm text-gray-500">الرئيسية / المستخدمون</p>
        </div>
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="البحث عن مستخدم، رقم هوية..."
            className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-emerald-800 text-white p-6 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="z-10">
            <p className="text-emerald-100 text-sm mb-1">إجمالي المستخدمين</p>
            <h2 className="text-3xl font-bold">2,482</h2>
          </div>
          <FaUsers className="absolute -bottom-4 -left-4 text-6xl text-emerald-700 opacity-50" />
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center border border-gray-100">
          <div>
            <p className="text-gray-500 text-sm mb-1">الطلاب</p>
            <h2 className="text-2xl font-bold text-gray-800">1,840</h2>
            <p className="text-xs text-emerald-600 mt-2 bg-emerald-50 inline-block px-2 py-1 rounded-full">+12% <span className="text-gray-400 text-[10px]">هذا الشهر</span></p>
          </div>
          <div className="bg-emerald-50 p-3 rounded-full text-emerald-600">
            <FaUserGraduate size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center border border-gray-100">
          <div>
            <p className="text-gray-500 text-sm mb-1">المعلمون</p>
            <h2 className="text-2xl font-bold text-gray-800">142</h2>
            <p className="text-xs text-emerald-600 mt-2 bg-emerald-50 inline-block px-2 py-1 rounded-full">+5% <span className="text-gray-400 text-[10px]">هذا الشهر</span></p>
          </div>
          <div className="bg-emerald-50 p-3 rounded-full text-emerald-600">
            <FaChalkboardTeacher size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center border border-gray-100">
          <div>
            <p className="text-gray-500 text-sm mb-1">أولياء الأمور</p>
            <h2 className="text-2xl font-bold text-gray-800">500</h2>
            <p className="text-xs text-red-500 mt-2 bg-red-50 inline-block px-2 py-1 rounded-full">-3% <span className="text-gray-400 text-[10px]">هذا الشهر</span></p>
          </div>
          <div className="bg-emerald-50 p-3 rounded-full text-emerald-600">
            <FaUserTie size={24} />
          </div>
        </div>
      </div>

      {/* Actions & Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
           <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition">
              <FaPlus /> إضافة مستخدم جديد
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition">
              <FaFilter /> تصفية النتائج
            </button>
          </div>
        </div>

        <table className="w-full text-sm text-right">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="py-4 px-6 font-medium">اسم المستخدم / الهوية</th>
              <th className="py-4 px-6 font-medium">نوع الحساب</th>
              <th className="py-4 px-6 font-medium">تاريخ الانضمام</th>
              <th className="py-4 px-6 font-medium">الحالة</th>
              <th className="py-4 px-6 font-medium">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="py-4 px-6 flex items-center gap-3">
                  <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover border" />
                  <div>
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-xs text-gray-500">ID: {user.id}</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs ${user.type === 'معلم' ? 'bg-emerald-50 text-emerald-700' : user.type === 'طالب' ? 'bg-blue-50 text-blue-700' : 'bg-orange-50 text-orange-700'}`}>
                    {user.type}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-600">{user.joinDate}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${user.status === 'نشط' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                    <span className="text-gray-700">{user.status}</span>
                  </div>
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
          <div>عرض 10 من أصل 2,482 مستخدم</div>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-gray-50">&lt;</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border bg-emerald-800 text-white">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-gray-50">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-gray-50">3</button>
            <span className="w-8 h-8 flex items-center justify-center">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-gray-50">24</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-gray-50">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountsManagement;
