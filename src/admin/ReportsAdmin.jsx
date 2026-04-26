import React, { useState } from 'react';
import { FaDownload, FaCalendarAlt, FaChartLine, FaCheckCircle, FaExclamationTriangle, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

function ReportsAdmin() {
  const [activeTab, setActiveTab] = useState('quran');

  const studentsProgress = [
    { id: 1, name: 'أحمد سامي القحطاني', level: 'المستوى الثالث - حلقة الفاروق', progress: 78, status: 'ملتزم', statusColor: 'text-emerald-700 bg-emerald-100', icon: 'أ.س' },
    { id: 2, name: 'محمد عبد الرحمن', level: 'المستوى الأول - حلقة النور', progress: 42, status: 'يحتاج متابعة', statusColor: 'text-red-700 bg-red-100', icon: 'م.ع' },
    { id: 3, name: 'سارة خالد التميمي', level: 'المستوى الرابع - حلقة خديجة', progress: 92, status: 'ملتزم', statusColor: 'text-emerald-700 bg-emerald-100', icon: 'س.خ' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-right" dir="rtl">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-sm font-bold text-emerald-600 mb-1">التقارير الإدارية</p>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">متابعة الأداء العام</h1>
          <p className="text-sm text-gray-500 max-w-lg">نظرة شاملة على تقدم المسارات التعليمية ومعدلات الالتزام، للمتابعة الإدارية الشاملة.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition">
             <FaCalendarAlt className="text-gray-400" /> آخر 30 يوم
          </button>
          <button className="flex items-center gap-2 bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition">
             <FaDownload /> تصدير التقارير
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="flex justify-center mb-2">
             <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <FaChartLine />
             </div>
          </div>
          <p className="text-gray-500 text-sm mb-1">معدل الإنجاز العام</p>
          <h2 className="text-3xl font-bold text-gray-800">84.2%</h2>
          <p className="text-xs text-emerald-500 font-bold mt-2">12.5%+</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="flex justify-center mb-2">
             <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <FaCheckCircle />
             </div>
          </div>
          <p className="text-gray-500 text-sm mb-1">نسبة التزام المعلمين</p>
          <h2 className="text-3xl font-bold text-gray-800">96.8%</h2>
          <p className="text-xs text-emerald-500 font-bold mt-2">3.2%+</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="flex justify-center mb-2">
             <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <FaExclamationTriangle />
             </div>
          </div>
          <p className="text-gray-500 text-sm mb-1">الجلسات غير الموثقة</p>
          <h2 className="text-3xl font-bold text-gray-800">14</h2>
          <p className="text-xs text-red-500 font-bold mt-2">2.1%-</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="flex justify-center mb-2">
             <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <FaUserGraduate />
             </div>
          </div>
          <p className="text-gray-500 text-sm mb-1">إجمالي الطلاب النشطين</p>
          <h2 className="text-3xl font-bold text-gray-800">1,248</h2>
          <p className="text-xs text-emerald-500 font-bold mt-2">85+</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Right Content (Student Reports) */}
        <div className="w-full lg:w-2/3">
           <div className="mb-6">
             <h2 className="text-xl font-bold text-gray-800">تقارير الطلاب</h2>
             <p className="text-sm text-gray-500 mt-1">تتبع المستويات التعليمية حسب المسارات</p>
           </div>
           
           {/* Tabs */}
           <div className="flex gap-4 mb-6 border-b border-gray-200 pb-2">
             <button onClick={() => setActiveTab('quran')} className={`pb-2 text-sm font-bold border-b-2 transition ${activeTab === 'quran' ? 'border-emerald-600 text-emerald-800' : 'border-transparent text-gray-500'}`}>حفظ القرآن</button>
             <button onClick={() => setActiveTab('sunnah')} className={`pb-2 text-sm font-bold border-b-2 transition ${activeTab === 'sunnah' ? 'border-emerald-600 text-emerald-800' : 'border-transparent text-gray-500'}`}>السنة النبوية</button>
             <button onClick={() => setActiveTab('arabic')} className={`pb-2 text-sm font-bold border-b-2 transition ${activeTab === 'arabic' ? 'border-emerald-600 text-emerald-800' : 'border-transparent text-gray-500'}`}>اللغة العربية</button>
           </div>

           {/* Progress List */}
           <div className="space-y-4">
              {studentsProgress.map(student => (
                <div key={student.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                   <div className="flex items-center gap-4 w-1/3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">{student.icon}</div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-800">{student.name}</h4>
                        <p className="text-xs text-gray-400">{student.level}</p>
                      </div>
                   </div>

                   <div className="w-1/3 px-4">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>التقدم في الحفظ</span>
                        <span className="font-bold">{student.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className={`h-1.5 rounded-full ${student.progress > 50 ? 'bg-emerald-600' : 'bg-red-500'}`} style={{ width: `${student.progress}%` }}></div>
                      </div>
                   </div>

                   <div className="w-1/4 text-left">
                     <span className={`px-3 py-1 rounded-full text-xs font-bold ${student.statusColor}`}>{student.status}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Left Content (Teacher Commitment & Alerts) */}
        <div className="w-full lg:w-1/3 space-y-6">
           {/* Teacher Commitment Card */}
           <div className="bg-[#1e4638] text-white p-6 rounded-xl shadow-sm">
             <h3 className="font-bold mb-1">نسبة التزام المعلمين</h3>
             <p className="text-[#a7f3d0] text-xs mb-6">تحليل الحضور وتوثيق الجلسات الأسبوعي</p>
             
             <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full border-8 border-[#34d399] flex items-center justify-center">
                   <span className="text-2xl font-bold">96%</span>
                </div>
                <div className="space-y-2">
                   <p className="text-sm flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#34d399]"></span> حضور كامل: 42 معلم</p>
                   <p className="text-sm flex items-center gap-2 text-gray-300"><span className="w-2 h-2 rounded-full bg-gray-400"></span> غياب بعذر: 3 معلمين</p>
                </div>
             </div>

             <button className="w-full py-2 border border-[#34d399] text-[#34d399] rounded-lg text-sm font-bold hover:bg-[#34d399] hover:text-[#1e4638] transition">
               عرض قائمة المعلمين
             </button>
           </div>

           {/* Alerts Card */}
           <div>
              <h3 className="font-bold text-gray-800 mb-4">تنبيهات المتابعة</h3>
              <div className="space-y-3">
                 <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex gap-3">
                    <FaExclamationTriangle className="text-red-500 mt-1 flex-shrink-0" />
                    <div>
                       <h4 className="font-bold text-sm text-red-700">توقف تقدم حلقة "الكوثر"</h4>
                       <p className="text-xs text-red-600 mt-1">لم يتم رصد نتائج 8 طلاب لمدة أسبوعين.</p>
                    </div>
                 </div>
                 <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 flex gap-3">
                    <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                       <h4 className="font-bold text-sm text-emerald-800">إنجاز استثنائي: م. يوسف</h4>
                       <p className="text-xs text-emerald-700 mt-1">أتم التسميع لـ 25 طالب بمعدل امتياز هذا الأسبوع.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>

    </div>
  );
}

export default ReportsAdmin;
