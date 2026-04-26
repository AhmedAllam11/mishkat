import React, { useState } from 'react';
import { FaSearch, FaFilter, FaPaperPlane, FaEnvelope, FaExclamationTriangle, FaInfoCircle, FaCheckCircle, FaArrowLeft, FaHeadset, FaBell } from 'react-icons/fa';

function NotificationsAdmin() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-right" dir="rtl">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">التواصل داخل النظام</h1>
          <p className="text-sm text-gray-500 max-w-lg">إدارة التنبيهات، الرسائل الهامة، والتواصل المباشر مع المعلمين والطلاب.</p>
        </div>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="البحث في الإشعارات..."
            className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Main Content (Notifications List) */}
        <div className="w-full lg:w-2/3">
           
           {/* Tabs & Filter */}
           <div className="flex justify-between items-center mb-6">
             <div className="flex gap-2 text-sm">
               <button onClick={() => setActiveTab('all')} className={`px-4 py-1.5 rounded-full font-bold transition ${activeTab === 'all' ? 'bg-[#1e4638] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>الكل</button>
               <button onClick={() => setActiveTab('system')} className={`px-4 py-1.5 rounded-full font-bold transition ${activeTab === 'system' ? 'bg-[#1e4638] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>تنبيهات النظام</button>
               <button onClick={() => setActiveTab('teachers')} className={`px-4 py-1.5 rounded-full font-bold transition ${activeTab === 'teachers' ? 'bg-[#1e4638] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>رسائل المعلمين</button>
               <button onClick={() => setActiveTab('other')} className={`px-4 py-1.5 rounded-full font-bold transition ${activeTab === 'other' ? 'bg-[#1e4638] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>أخرى</button>
             </div>
             <button className="flex items-center gap-2 text-gray-500 hover:text-gray-800 text-sm font-bold">
               <FaFilter /> تصفية
             </button>
           </div>

           {/* Notifications */}
           <div className="space-y-4">
              
              {/* Alert 1 */}
              <div className="bg-white p-5 rounded-xl shadow-sm border-r-4 border-r-red-500 border border-gray-100 flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0">
                    <FaExclamationTriangle />
                 </div>
                 <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                       <h3 className="font-bold text-gray-800">فشل في معالجة الدفعة المالية</h3>
                       <span className="text-xs text-gray-400">منذ 15 دقيقة</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">تعذر إرسال المستحقات المالية لـ 3 معلمين بسبب خطأ في بيانات الحساب البنكي. يرجى المراجعة الفورية.</p>
                    <div className="flex gap-4">
                       <button className="text-sm font-bold text-red-600 hover:text-red-700">مراجعة البيانات</button>
                       <button className="text-sm text-gray-500 hover:text-gray-700">تجاهل</button>
                    </div>
                 </div>
              </div>

              {/* Alert 2 */}
              <div className="bg-white p-5 rounded-xl shadow-sm border-r-4 border-r-blue-500 border border-gray-100 flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
                    <FaInfoCircle />
                 </div>
                 <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                       <h3 className="font-bold text-gray-800">تحديث النظام المجدول</h3>
                       <span className="text-xs text-gray-400">ساعتان</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">سيبدأ تحديث النظام القادم يوم الأحد الساعة 2:00 صباحاً. سيتم إخطار جميع المستخدمين عبر البريد الإلكتروني.</p>
                 </div>
              </div>

              {/* Alert 3 */}
              <div className="bg-white p-5 rounded-xl shadow-sm border-r-4 border-r-emerald-600 border border-gray-100 flex gap-4">
                 <img src="https://i.pravatar.cc/150?img=5" alt="سارة خالد" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                 <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                       <h3 className="font-bold text-gray-800">رسالة من المعلمة: سارة خالد</h3>
                       <span className="text-xs text-gray-400">4 ساعات</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">أواجه مشكلة في إضافة طالب جديد إلى حلقة "نور البيان". يبدو أن النظام يظهر رسالة خطأ عند الضغط على حفظ.</p>
                    <div className="flex gap-4">
                       <button className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-emerald-100 transition">الرد الآن</button>
                       <button className="text-sm text-gray-500 hover:text-gray-700">تم الحل</button>
                    </div>
                 </div>
              </div>

              {/* Alert 4 */}
              <div className="bg-white p-5 rounded-xl shadow-sm border-r-4 border-r-emerald-500 border border-gray-100 flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0">
                    <FaCheckCircle />
                 </div>
                 <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                       <h3 className="font-bold text-gray-800">تم تفعيل 5 حسابات طلاب جدد</h3>
                       <span className="text-xs text-gray-400">أمس</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">تمت مراجعة وقبول 5 طلبات تسجيل جديدة بنجاح وإرسال بيانات الدخول لأولياء الأمور.</p>
                 </div>
              </div>

           </div>
           
           <div className="mt-4 text-center">
             <button className="text-sm text-gray-500 hover:text-gray-800 font-bold">عرض التنبيهات الأقدم <span className="inline-block translate-y-0.5">▼</span></button>
           </div>
        </div>

        {/* Left Content (Actions & Stats) */}
        <div className="w-full lg:w-1/3 space-y-6">
           
           {/* Send Notification Card */}
           <div className="bg-[#1e4638] text-white p-6 rounded-xl shadow-sm text-center">
             <div className="flex justify-center mb-3">
               <div className="w-12 h-12 rounded-full bg-[#2a594a] flex items-center justify-center text-xl">
                 <FaPaperPlane className="mr-1" />
               </div>
             </div>
             <h3 className="text-xl font-bold mb-2">إرسال تنبيه جديد</h3>
             <p className="text-[#a7f3d0] text-sm leading-relaxed mb-6">قم بإرسال رسالة فورية لجميع المستخدمين أو فئة محددة.</p>
             <button className="bg-white text-[#1e4638] font-bold w-full py-2.5 rounded-lg text-sm hover:bg-gray-50 transition">
               بدء الإرسال
             </button>
           </div>

           {/* Stats Card */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <h3 className="font-bold text-gray-800 mb-4 text-center">إحصائيات التواصل</h3>
             <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3 text-gray-600">
                     <FaEnvelope className="text-emerald-600" />
                     <span className="text-sm font-bold">رسائل غير مقروءة</span>
                   </div>
                   <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">12</span>
                </div>
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3 text-gray-600">
                     <FaBell className="text-gray-400" />
                     <span className="text-sm font-bold">تنبيهات النظام النشطة</span>
                   </div>
                   <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center text-xs font-bold">4</span>
                </div>
             </div>
           </div>

           {/* Support Card */}
           <div className="bg-gray-100 p-6 rounded-xl shadow-inner border border-gray-200">
             <div className="flex items-center gap-3 mb-2">
               <FaHeadset className="text-gray-500 text-xl" />
               <h3 className="font-bold text-gray-800">طلبات الدعم الفني</h3>
             </div>
             <p className="text-sm text-gray-600 mb-4 leading-relaxed">يوجد 3 طلبات مساعدة جديدة من المعلمين بحاجة للمراجعة.</p>
             <button className="text-emerald-700 font-bold text-sm flex items-center gap-2 hover:text-emerald-800 transition">
               <FaArrowLeft className="text-xs" /> انتقل إلى الدعم 
             </button>
           </div>

        </div>

      </div>

    </div>
  );
}

export default NotificationsAdmin;
