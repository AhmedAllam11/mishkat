import React, { useState } from 'react';
import { FaPlus, FaSearch, FaUserPlus, FaCalendarAlt, FaEdit, FaLink, FaVideo } from 'react-icons/fa';

function CirclesManagement() {
  const [search, setSearch] = useState("");

  const circles = [
    {
      id: 1,
      title: 'حلقة الإمام الشافعي (تجويد)',
      teacher: 'د. أحمد العتيبي',
      studentsCount: 12,
      status: 'مباشر الآن',
      nextTime: 'اليوم - 8:30 م',
      progress: 85,
      statusColor: 'bg-emerald-100 text-emerald-700'
    },
    {
      id: 2,
      title: 'أساسيات التفسير - المستوى الأول',
      teacher: 'أ. سارة خالد',
      studentsCount: 20,
      status: 'تبدأ قريباً',
      nextTime: 'الاثنين - 4:00 م',
      progress: 20,
      statusColor: 'bg-gray-100 text-gray-700'
    },
    {
      id: 3,
      title: 'حفظ جزء تبارك - المجموعة ب',
      teacher: 'الشيخ محمد محمود',
      studentsCount: 8,
      status: 'مباشر الآن',
      nextTime: 'غداً - 9:00 ص',
      progress: 50,
      statusColor: 'bg-emerald-100 text-emerald-700'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-right" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">تنظيم الحلقات التعليمية</h1>
          <p className="text-sm text-gray-500">الفصل الدراسي الثاني - 1445 هـ</p>
        </div>
        <div className="flex gap-4">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="بحث عن حلقة أو معلم..."
              className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button className="flex items-center gap-2 bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition">
             <FaPlus /> إنشاء حلقة جديدة
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Right Sidebar (Actions & Quick Info) */}
        <div className="w-full lg:w-1/4 space-y-6">
          {/* Quick Organization */}
          <div className="bg-emerald-800 text-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold mb-2">تنظيم سريع</h3>
            <p className="text-emerald-100 text-xs leading-relaxed mb-6">قم بربط الطلاب والمعلمين بالحلقات المتاحة أو عدل المواعيد التعليمية بضغطة واحدة.</p>
            <div className="space-y-2">
              <button className="w-full flex justify-between items-center bg-emerald-700 hover:bg-emerald-600 px-4 py-2 rounded text-sm transition">
                <span>ربط المعلم <FaUserPlus className="inline ml-2" /></span>
                <span>&lt;</span>
              </button>
              <button className="w-full flex justify-between items-center bg-emerald-700 hover:bg-emerald-600 px-4 py-2 rounded text-sm transition">
                <span>ربط الطلاب <FaUserPlus className="inline ml-2" /></span>
                <span>&lt;</span>
              </button>
              <button className="w-full flex justify-between items-center bg-emerald-700 hover:bg-emerald-600 px-4 py-2 rounded text-sm transition">
                <span>تحديد المواعيد <FaCalendarAlt className="inline ml-2" /></span>
                <span>&lt;</span>
              </button>
            </div>
          </div>

          {/* Available Teachers */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
             <h3 className="font-bold text-gray-800 text-sm mb-4">معلمون متاحون الآن <FaUserPlus className="inline text-emerald-600 mr-1"/></h3>
             <ul className="space-y-3">
               <li className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex justify-center items-center font-bold text-xs">ي</div>
                 <div>
                   <p className="text-sm font-semibold text-gray-800">يوسف محمد</p>
                   <p className="text-xs text-gray-400">متاح 3 ساعات</p>
                 </div>
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex justify-center items-center font-bold text-xs">ع</div>
                 <div>
                   <p className="text-sm font-semibold text-gray-800">علي الشريف</p>
                   <p className="text-xs text-emerald-500">متاح طوال اليوم</p>
                 </div>
               </li>
               <li className="flex items-center gap-3 opacity-50">
                 <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex justify-center items-center font-bold text-xs">ع</div>
                 <div>
                   <p className="text-sm font-semibold text-gray-800">علي الحربي</p>
                   <p className="text-xs text-gray-400">مشغول حالياً</p>
                 </div>
               </li>
             </ul>
          </div>

          {/* Today's Schedule */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
             <h3 className="font-bold text-gray-800 text-sm mb-4">مواعيد اليوم</h3>
             <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                 <div className="flex items-center justify-center w-3 h-3 rounded-full border-2 border-white bg-emerald-500 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                 <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2.5rem)] p-2 rounded border border-gray-100 bg-gray-50 shadow-sm">
                   <div className="flex items-center justify-between mb-1">
                     <div className="font-bold text-gray-800 text-xs">8:30 مساءً</div>
                   </div>
                   <div className="text-gray-500 text-[10px]">حلقة الإمام الشافعي</div>
                 </div>
               </div>
               
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                 <div className="flex items-center justify-center w-3 h-3 rounded-full border-2 border-white bg-gray-300 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                 <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2.5rem)] p-2 rounded border border-gray-100 shadow-sm">
                   <div className="flex items-center justify-between mb-1">
                     <div className="font-bold text-gray-800 text-xs">9:00 مساءً</div>
                   </div>
                   <div className="text-gray-500 text-[10px]">حفظ جزء تبارك</div>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Main Content (Active Circles) */}
        <div className="w-full lg:w-3/4">
          
          {/* Top Stats summary */}
          <div className="flex justify-between items-center mb-6 px-4">
             <div className="text-center">
               <h2 className="text-3xl font-bold text-emerald-800">42</h2>
               <p className="text-gray-500 text-sm">إجمالي الحلقات</p>
             </div>
             <div className="text-center">
               <h2 className="text-3xl font-bold text-emerald-600">850</h2>
               <p className="text-gray-500 text-sm">طلاب نشطون</p>
             </div>
             <div className="text-center">
               <h2 className="text-3xl font-bold text-emerald-600">10</h2>
               <p className="text-gray-500 text-sm">معلمون متاحون</p>
             </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">الحلقات النشطة</h2>
            <div className="flex bg-gray-100 p-1 rounded-lg">
                <button className="px-6 py-1 text-sm bg-white shadow-sm rounded-md text-gray-800 font-medium">الكل</button>
                <button className="px-6 py-1 text-sm text-gray-500 hover:text-gray-800">قيد الانتظار</button>
            </div>
          </div>

          <div className="space-y-4">
             {circles.map(circle => (
                <div key={circle.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                        {/* Placeholder for circle icon/image */}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{circle.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{circle.teacher} <span className="mx-2">|</span> {circle.studentsCount} طالب</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${circle.statusColor}`}>
                         {circle.status}
                       </span>
                       <div className="flex gap-2">
                         <button className="text-gray-400 hover:text-emerald-600"><FaLink /></button>
                         <button className="text-gray-400 hover:text-emerald-600"><FaEdit /></button>
                       </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                     <button className="text-sm text-gray-500 hover:text-gray-800 underline">عرض التفاصيل</button>
                     <div className="w-1/2">
                       <div className="flex justify-between text-xs text-gray-500 mb-1">
                         <span>الموعد القادم: <span className="font-bold text-gray-800">{circle.nextTime}</span></span>
                         <span>{circle.progress}% اكتمال</span>
                       </div>
                       <div className="w-full bg-gray-200 rounded-full h-1.5">
                         <div className="bg-emerald-800 h-1.5 rounded-full" style={{ width: `${circle.progress}%` }}></div>
                       </div>
                     </div>
                  </div>
                </div>
             ))}
          </div>
        </div>

      </div>

    </div>
  );
}

export default CirclesManagement;
