import React, { useState } from 'react';
import { FaSearch, FaFilter, FaInfoCircle, FaCheckCircle, FaFileAlt, FaTimes, FaCheck, FaEye, FaEnvelope, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

function ReviewTeachers() {
  const [search, setSearch] = useState("");

  const requests = [
    {
      id: 1,
      name: 'أ. فاطمة الزهراء',
      specialty: 'اللغة العربية',
      date: '14 أكتوبر 2023',
      experience: '5 سنوات',
      email: 'f.zahra@email.com',
      status: 'بانتظار المراجعة',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 2,
      name: 'د. أحمد عبد الرحمن',
      specialty: 'الدراسات الإسلامية',
      date: '12 أكتوبر 2023',
      experience: '12 سنة',
      email: 'a.abdelrahman@email.com',
      status: 'بانتظار المراجعة',
      avatar: 'https://i.pravatar.cc/150?img=11'
    },
    {
      id: 3,
      name: 'د. مريم إبراهيم',
      specialty: 'التربية الإسلامية',
      date: '16 أكتوبر 2023',
      experience: '15 سنة',
      email: 'm.ibrahim@email.com',
      status: 'بانتظار المراجعة',
      avatar: 'https://i.pravatar.cc/150?img=9'
    },
    {
      id: 4,
      name: 'أ. يوسف محمد',
      specialty: 'علوم القرآن',
      date: '15 أكتوبر 2023',
      experience: '8 سنوات',
      email: 'yousif.m@email.com',
      status: 'بانتظار المراجعة',
      avatar: 'https://i.pravatar.cc/150?img=12'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-right" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">مراجعة المعلمين الجدد</h1>
          <p className="text-sm text-emerald-600 mt-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            يوجد حالياً <span className="font-bold">8</span> طلبات انضمام بانتظار المراجعة
          </p>
        </div>
        <div className="flex gap-4">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="بحث عن معلم..."
              className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition">
             <FaFilter /> تصفية
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Right Sidebar (Guidelines) */}
        <div className="w-full lg:w-1/4">
          <div className="bg-emerald-800 text-white p-6 rounded-xl shadow-sm h-full flex flex-col justify-between">
            <div>
              <div className="flex justify-center mb-4">
                 <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center text-2xl">
                    <FaInfoCircle />
                 </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">نظام الصلاحيات</h3>
              <p className="text-emerald-100 text-sm leading-relaxed text-center mb-6">
                يرجى ملاحظة أن جميع طلبات المعلمين الجدد تكون مجمدة تلقائياً.
              </p>
              
              <div className="bg-emerald-900/50 p-4 rounded-lg text-sm leading-relaxed mb-6">
                <span className="font-bold text-white">قبل القبول، المعلم ملوش صلاحيات</span> على النظام، ولا يمكنه الوصول للحلقات أو بيانات الطلاب إلا بعد المراجعة الكاملة والموافقة من قبلكم.
              </div>
            </div>

            <div className="mt-auto">
               <h4 className="font-bold flex items-center gap-2 mb-3"><FaCheckCircle className="text-emerald-400"/> خطوات التوثيق</h4>
               <ul className="text-emerald-100 text-xs space-y-2 pr-6 list-decimal">
                 <li>مراجعة المؤهل الدراسي</li>
                 <li>التحقق من سنوات الخبرة</li>
                 <li>التأكد من صحة بيانات التواصل</li>
               </ul>
            </div>
          </div>
        </div>

        {/* Main Content (Requests Grid) */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {requests.map(req => (
            <div key={req.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <img src={req.avatar} alt={req.name} className="w-14 h-14 rounded-full object-cover border-2 border-gray-100" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{req.name}</h3>
                    <p className="text-sm text-gray-500">تخصص: {req.specialty}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                  {req.status}
                </span>
              </div>

              <div className="space-y-2 mb-6 mt-2 border-t border-gray-50 pt-4">
                 <p className="text-sm text-gray-600 flex items-center gap-3">
                   <FaCalendarAlt className="text-gray-400" /> تاريخ الطلب: <span className="font-medium text-gray-800">{req.date}</span>
                 </p>
                 <p className="text-sm text-gray-600 flex items-center gap-3">
                   <FaGraduationCap className="text-gray-400" /> الخبرة: <span className="font-medium text-gray-800">{req.experience}</span>
                 </p>
                 <p className="text-sm text-gray-600 flex items-center gap-3">
                   <FaEnvelope className="text-gray-400" /> <span className="font-medium text-gray-800" dir="ltr">{req.email}</span>
                 </p>
              </div>

              <div className="mt-auto">
                <button className="w-full mb-2 flex justify-center items-center gap-2 bg-emerald-50 text-emerald-700 py-2 rounded-lg text-sm font-medium hover:bg-emerald-100 transition">
                  <FaEye /> الاطلاع على بيانات المعلم
                </button>
                <div className="flex gap-2">
                  <button className="flex-1 flex justify-center items-center gap-2 bg-white border border-gray-200 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                    <FaFileAlt className="text-emerald-600" /> مراجعة CV
                  </button>
                  <button className="flex-1 flex justify-center items-center gap-2 bg-red-50 text-red-600 border border-red-100 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition">
                    <FaTimes /> رفض
                  </button>
                  <button className="flex-1 flex justify-center items-center gap-2 bg-emerald-800 text-white py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition">
                    <FaCheck /> قبول
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ReviewTeachers;
