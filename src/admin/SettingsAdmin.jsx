import React, { useState } from 'react';
import { FaServer, FaShieldAlt, FaUsersCog, FaCog, FaPlus, FaCheck, FaTimes, FaToggleOn, FaToggleOff, FaSlack, FaGoogle } from 'react-icons/fa';

function SettingsAdmin() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-right" dir="rtl">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">التحكم في النظام</h1>
        <p className="text-sm text-gray-500">إدارة الإعدادات العامة، الصلاحيات، وتكوينات الخادم التقنية.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* General Settings */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <div className="flex justify-between items-center mb-6">
             <div className="flex items-center gap-2">
                <FaCog className="text-emerald-600 text-xl" />
                <h2 className="text-xl font-bold text-gray-800">الإعدادات العامة</h2>
             </div>
             <button className="bg-[#1e4638] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#2a594a] transition">
               حفظ التغييرات
             </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">اسم المؤسسة</label>
                 <input type="text" defaultValue="أكاديمية مشكاة للعلوم الشرعية" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm" />
              </div>
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">النطاق الرئيسي (Domain)</label>
                 <input type="text" defaultValue="mishkah.edu.sa" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm text-left" dir="ltr" />
              </div>
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">المنطقة الزمنية</label>
                 <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm">
                   <option>(GMT+03:00) الرياض</option>
                 </select>
              </div>
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني للنظام</label>
                 <input type="email" defaultValue="admin@mishkah.edu.sa" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm text-left" dir="ltr" />
              </div>
           </div>

           <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="font-bold text-emerald-800">وضع الصيانة</h4>
                <p className="text-sm text-emerald-700 mt-1">عند التفعيل، سيتم إغلاق الواجهة الأمامية للمستخدمين وعرض رسالة "قيد التحديث".</p>
              </div>
              <button onClick={() => setMaintenanceMode(!maintenanceMode)} className="text-3xl text-emerald-600 focus:outline-none">
                {maintenanceMode ? <FaToggleOn /> : <FaToggleOff className="text-gray-400" />}
              </button>
           </div>
        </div>

        {/* Server & Security */}
        <div className="space-y-6">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <div className="flex items-center gap-2 mb-4">
                <FaServer className="text-emerald-600" />
                <h2 className="font-bold text-gray-800">حالة الخادم</h2>
             </div>
             <div className="mb-4">
               <div className="flex justify-between text-xs text-gray-500 mb-1">
                 <span>استهلاك المعالج</span>
                 <span className="font-bold text-gray-800">24%</span>
               </div>
               <div className="w-full bg-gray-200 rounded-full h-2">
                 <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '24%' }}></div>
               </div>
             </div>
             <div>
               <div className="flex justify-between text-xs text-gray-500 mb-1">
                 <span>الذاكرة العشوائية</span>
                 <span className="font-bold text-gray-800">1.8 / 3.2 GB</span>
               </div>
               <div className="w-full bg-gray-200 rounded-full h-2">
                 <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '56%' }}></div>
               </div>
             </div>
           </div>

           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <div className="flex items-center gap-2 mb-4">
                <FaShieldAlt className="text-red-600" />
                <h2 className="font-bold text-gray-800">آخر النشاطات الأمنية</h2>
             </div>
             <ul className="space-y-3 mb-4">
               <li className="flex items-start gap-2">
                 <FaCheck className="text-emerald-500 mt-1 flex-shrink-0" />
                 <div>
                   <p className="text-sm font-bold text-gray-700">دخول ناجح</p>
                   <p className="text-xs text-gray-400">المدير - 192.168.1.1 - منذ دقيقتين</p>
                 </div>
               </li>
               <li className="flex items-start gap-2">
                 <FaTimes className="text-red-500 mt-1 flex-shrink-0" />
                 <div>
                   <p className="text-sm font-bold text-gray-700">محاولة دخول فاشلة</p>
                   <p className="text-xs text-gray-400">IP: 45.12.33.102 - منذ ساعة</p>
                 </div>
               </li>
             </ul>
             <button className="w-full text-xs font-bold text-gray-500 hover:text-emerald-700 transition">
               عرض سجل الأمان الكامل
             </button>
           </div>
        </div>
      </div>

      {/* Roles & Permissions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
         <div className="flex justify-between items-center mb-6">
           <div>
              <div className="flex items-center gap-2 mb-1">
                 <FaUsersCog className="text-emerald-600 text-xl" />
                 <h2 className="text-xl font-bold text-gray-800">إدارة الصلاحيات والأدوار</h2>
              </div>
              <p className="text-sm text-gray-500">تخصيص مستويات الوصول للمشرفين، المعلمين، والطلاب.</p>
           </div>
           <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition">
             <FaPlus className="text-xs" /> إضافة دور جديد
           </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="border border-gray-200 rounded-xl p-5 hover:border-emerald-300 transition">
               <div className="flex justify-between items-start mb-3">
                 <h3 className="font-bold text-emerald-800">المدير العام</h3>
                 <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded">إدارة كاملة</span>
               </div>
               <p className="text-sm text-gray-500 mb-6 min-h-[60px]">صلاحيات مطلقة للتحكم في كافة موارد النظام والبيانات المالية.</p>
               <div className="flex gap-2">
                 <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">كل الصلاحيات</span>
                 <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">إدارة قواعد البيانات</span>
               </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 hover:border-emerald-300 transition">
               <div className="flex justify-between items-start mb-3">
                 <h3 className="font-bold text-emerald-800">المعلم</h3>
                 <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">إدارة المحتوى التعليمي</span>
               </div>
               <p className="text-sm text-gray-500 mb-6 min-h-[60px]">صلاحيات إضافة الحلقات، تقييم الطلاب، ورفع المواد التعليمية.</p>
               <div className="flex gap-2">
                 <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">الحضور والغياب</span>
                 <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">إرسال تقارير</span>
               </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 hover:border-emerald-300 transition">
               <div className="flex justify-between items-start mb-3">
                 <h3 className="font-bold text-emerald-800">الطالب</h3>
                 <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">وصول محدود</span>
               </div>
               <p className="text-sm text-gray-500 mb-6 min-h-[60px]">عرض الدروس، المشاركة في الحلقات، وعرض الملف الشخصي فقط.</p>
               <div className="flex gap-2">
                 <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">عرض المحتوى</span>
                 <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">المراسلة</span>
               </div>
            </div>

         </div>
      </div>

      {/* Integrations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl text-blue-500">
               <FaGoogle />
             </div>
             <div>
               <h3 className="font-bold text-gray-800">Google Workspace</h3>
               <p className="text-xs text-gray-500">مزامنة تقويم المعلمين والطلاب تلقائياً.</p>
             </div>
           </div>
           <span className="flex items-center gap-1 text-emerald-600 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full"><FaCheck /> متصل</span>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between opacity-75">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl text-purple-600">
               <FaSlack />
             </div>
             <div>
               <h3 className="font-bold text-gray-800">تكامل Slack</h3>
               <p className="text-xs text-gray-500">إرسال تنبيهات مباشرة إلى قنوات الفريق.</p>
             </div>
           </div>
           <button className="text-gray-500 text-sm font-bold border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-gray-50">تفعيل</button>
        </div>
      </div>

    </div>
  );
}

export default SettingsAdmin;
