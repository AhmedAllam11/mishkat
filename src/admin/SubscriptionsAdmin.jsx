import React, { useState } from 'react';
import { FaSearch, FaFilePdf, FaMoneyBillWave, FaExclamationCircle, FaReceipt, FaHistory, FaCheckCircle, FaTimesCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function SubscriptionsAdmin() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState('all');

  const transactions = [
    { id: 1, name: 'عبدالرحمن محمد خالد', invoice: '#MSK-8921', course: 'حلقة الإتقان (تجويد)', date: '14 أكتوبر 2023', amount: '350 ر.س', status: 'مكتمل', statusType: 'success', icon: <FaReceipt className="text-emerald-600" /> },
    { id: 2, name: 'فهد بن سلمان العتيبي', invoice: '#MSK-8854', course: 'مسار اللغة العربية', date: '12 أكتوبر 2023', amount: '420 ر.س', status: 'متأخر', statusType: 'late', icon: <FaHistory className="text-orange-500" /> },
    { id: 3, name: 'سارة إبراهيم الشريف', invoice: '#MSK-8910', course: 'تحفيظ الصغار', date: '10 أكتوبر 2023', amount: '280 ر.س', status: 'مكتمل', statusType: 'success', icon: <FaReceipt className="text-emerald-600" /> },
    { id: 4, name: 'يوسف عبدالله العمري', invoice: '#MSK-8722', course: 'القراءات العشر', date: '08 أكتوبر 2023', amount: '500 ر.س', status: 'فشل الدفع', statusType: 'failed', icon: <FaTimesCircle className="text-red-500" /> },
    { id: 5, name: 'نورة عبدالعزيز', invoice: '#MSK-8611', course: 'حلقة الإتقان (تجويد)', date: '05 أكتوبر 2023', amount: '350 ر.س', status: 'مكتمل', statusType: 'success', icon: <FaReceipt className="text-emerald-600" /> }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-right" dir="rtl">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">متابعة الأمور المالية</h1>
        </div>
        <div className="relative w-72">
          <input
            type="text"
            placeholder="بحث عن معاملة أو طالب..."
            className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
           <div>
             <p className="text-gray-500 text-sm mb-1">الاشتراكات النشطة</p>
             <h2 className="text-3xl font-bold text-gray-800">1,240</h2>
             <p className="text-xs text-emerald-500 mt-2">+12% هذا الشهر</p>
           </div>
           <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 text-xl">
             <FaMoneyBillWave />
           </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
           <div>
             <p className="text-gray-500 text-sm mb-1">إجمالي المدفوعات</p>
             <h2 className="text-3xl font-bold text-gray-800">45,000 <span className="text-sm font-normal text-gray-500">ر.س</span></h2>
             <p className="text-xs text-gray-400 mt-2">من 154 معاملة</p>
           </div>
           <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 text-xl">
             <FaMoneyBillWave />
           </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 flex items-center justify-between relative overflow-hidden">
           <div className="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
           <div>
             <p className="text-gray-500 text-sm mb-1">حالات متأخرة</p>
             <h2 className="text-3xl font-bold text-red-600">18</h2>
             <p className="text-xs text-red-500 font-bold mt-2">تتطلب إجراء فوري</p>
           </div>
           <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-xl">
             <FaExclamationCircle />
           </div>
        </div>

        <div className="md:col-span-3 lg:col-span-1 lg:hidden"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-8">
         <div className="w-full lg:w-1/3 bg-[#1e4638] text-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-start">
             <h3 className="text-xl font-bold mb-2">تصدير التقرير المالي</h3>
             <p className="text-[#a7f3d0] text-sm mb-6">يمكنك استخراج تقارير مفصلة لكل المسارات التعليمية والمعاملات بضغطة واحدة.</p>
             <button className="bg-white text-[#1e4638] font-bold px-6 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-100 transition">
               تحميل PDF <FaFilePdf />
             </button>
         </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
         {/* Tabs */}
         <div className="flex gap-6 border-b border-gray-200 px-6 pt-4">
           <button onClick={() => setActiveTab('all')} className={`pb-3 text-sm font-bold border-b-2 transition ${activeTab === 'all' ? 'border-emerald-600 text-emerald-800' : 'border-transparent text-gray-500'}`}>كافة المعاملات</button>
           <button onClick={() => setActiveTab('active')} className={`pb-3 text-sm font-bold border-b-2 transition ${activeTab === 'active' ? 'border-emerald-600 text-emerald-800' : 'border-transparent text-gray-500'}`}>الاشتراكات النشطة</button>
           <button onClick={() => setActiveTab('failed')} className={`pb-3 text-sm font-bold border-b-2 transition ${activeTab === 'failed' ? 'border-emerald-600 text-emerald-800' : 'border-transparent text-gray-500'}`}>الفشل والتأخير <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full mr-1">3</span></button>
           <button onClick={() => setActiveTab('pending')} className={`pb-3 text-sm font-bold border-b-2 transition ${activeTab === 'pending' ? 'border-emerald-600 text-emerald-800' : 'border-transparent text-gray-500'}`}>الفواتير المستحقة</button>
         </div>

         <div className="p-0 overflow-x-auto">
           <table className="w-full text-right text-sm">
             <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
               <tr>
                 <th className="py-4 px-6 font-medium">الطالب والمعاملة</th>
                 <th className="py-4 px-6 font-medium">المسار التعليمي</th>
                 <th className="py-4 px-6 font-medium">التاريخ</th>
                 <th className="py-4 px-6 font-medium">المبلغ</th>
                 <th className="py-4 px-6 font-medium">الحالة</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-100">
               {transactions.map(item => (
                 <tr key={item.id} className="hover:bg-gray-50 transition">
                   <td className="py-4 px-6">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                         {item.icon}
                       </div>
                       <div>
                         <p className="font-bold text-gray-800">{item.name}</p>
                         <p className="text-xs text-gray-400">رقم الفاتورة: <span dir="ltr">{item.invoice}</span></p>
                       </div>
                     </div>
                   </td>
                   <td className="py-4 px-6 text-gray-600">{item.course}</td>
                   <td className="py-4 px-6 text-gray-500">{item.date}</td>
                   <td className="py-4 px-6 font-bold text-gray-800">{item.amount}</td>
                   <td className="py-4 px-6">
                     <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                       item.statusType === 'success' ? 'bg-emerald-100 text-emerald-700' : 
                       item.statusType === 'late' ? 'border border-orange-200 text-orange-600 bg-orange-50' : 
                       'bg-red-100 text-red-700'
                     }`}>
                       {item.status}
                     </span>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>

         {/* Pagination */}
         <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
           <p>عرض 1-5 من أصل 154 معاملة</p>
           <div className="flex gap-1">
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50"><FaChevronRight className="text-xs" /></button>
             <button className="w-8 h-8 flex items-center justify-center rounded bg-emerald-800 text-white font-bold">1</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50">2</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50">3</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50"><FaChevronLeft className="text-xs" /></button>
           </div>
         </div>
      </div>

    </div>
  );
}

export default SubscriptionsAdmin;
