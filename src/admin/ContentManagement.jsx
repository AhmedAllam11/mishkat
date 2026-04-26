import React, { useState } from 'react';
import { FaPlus, FaSearch, FaEllipsisV, FaEdit, FaTrash, FaBookOpen, FaMoneyBillWave, FaChartLine, FaUserGraduate } from 'react-icons/fa';
import { MdViewList, MdGridView } from 'react-icons/md';

function ContentManagement() {
  const [search, setSearch] = useState("");

  const courses = [
    { 
      id: 1, 
      title: 'تحفيظ القرآن الكريم', 
      type: 'أساسي', 
      desc: 'برنامج مكثف لحفظ وتثبيت القرآن الكريم مع مراجعة دورية.',
      sessions: '24 حصة / شهر', 
      students: '1,200 طالب', 
      price: '250 ر.س',
      image: 'https://images.unsplash.com/photo-1609599006353-e629aaab31ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      typeColor: 'bg-emerald-100 text-emerald-700'
    },
    { 
      id: 2, 
      title: 'أحكام التجويد', 
      type: 'متقدم', 
      desc: 'إتقان مخارج الحروف والصفات مع التطبيق العملي للنظم.',
      sessions: '12 حصة / شهر', 
      students: '850 طالب', 
      price: '180 ر.س',
      image: 'https://images.unsplash.com/photo-1590076214532-628d0eb4b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      typeColor: 'bg-blue-100 text-blue-700'
    },
    { 
      id: 3, 
      title: 'تفسير القرآن', 
      type: 'نظري', 
      desc: 'فهم معاني الآيات وأسباب النزول من أمهات كتب التفسير.',
      sessions: '8 حصص / شهر', 
      students: '420 طالب', 
      price: '150 ر.س',
      image: 'https://images.unsplash.com/photo-1576769267415-9642010aa962?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      typeColor: 'bg-orange-100 text-orange-700'
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-right" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">إدارة المحتوى التعليمي</h1>
          <p className="text-sm text-gray-500">تنظيم وتحديث المسارات التعليمية، المناهج، والأسعار</p>
        </div>
        <div className="flex gap-4">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="بحث في المحتوى التعليمي..."
              className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button className="flex items-center gap-2 bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition">
             <FaPlus /> إضافة مسار جديد
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center relative border border-gray-100">
            <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-md">نشط الآن</span>
            <p className="text-gray-500 text-sm mb-2">إجمالي المسارات</p>
            <h2 className="text-4xl font-bold text-emerald-800">12</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-2">معدل الإكمال</p>
              <h2 className="text-3xl font-bold text-gray-800">+24%</h2>
            </div>
            <div className="text-red-500 text-3xl">
              <FaChartLine />
            </div>
        </div>

        <div className="bg-emerald-800 text-white p-6 rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-center">
            <div className="z-10">
              <div className="flex justify-between items-start mb-2">
                 <FaMoneyBillWave className="text-2xl text-emerald-300" />
                 <p className="text-emerald-100 text-xs">أعلى إيراد</p>
              </div>
              <h2 className="text-2xl font-bold">تجويد متقدم</h2>
            </div>
        </div>
      </div>

      {/* Current Paths List */}
      <div className="mb-6 flex justify-between items-center">
         <h2 className="text-lg font-bold text-gray-800">المسارات الحالية</h2>
         <div className="flex gap-2 text-gray-500">
           <button className="p-2 hover:bg-gray-200 rounded"><MdGridView size={20} /></button>
           <button className="p-2 hover:bg-gray-200 rounded bg-gray-200 text-gray-800"><MdViewList size={20} /></button>
         </div>
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition">
            
            <div className="flex gap-6 items-center flex-1">
              <img src={course.image} alt={course.title} className="w-20 h-20 rounded-lg object-cover" />
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-lg text-gray-800">{course.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-md ${course.typeColor}`}>{course.type}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{course.desc}</p>
                <div className="flex gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><FaBookOpen /> {course.sessions}</span>
                  <span className="flex items-center gap-1"><FaUserGraduate /> {course.students}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3 w-48 border-r border-gray-100 pr-6">
              <div className="text-xl font-bold text-emerald-600">{course.price}</div>
              <div className="flex gap-3 text-gray-400">
                 <button className="hover:text-gray-600"><FaEdit /></button>
                 <button className="hover:text-gray-600"><FaEllipsisV /></button>
                 <button className="hover:text-red-500"><FaTrash /></button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Action Card */}
      <div className="mt-8 bg-emerald-800 rounded-xl p-6 flex justify-between items-center text-white">
        <div>
           <h3 className="text-xl font-bold mb-1">هل تريد مراجعة التسعير العالمي؟</h3>
           <p className="text-emerald-100 text-sm">يمكنك تحديث أسعار جميع المسارات التعليمية بضغطة واحدة بناءً على العروض الموسمية.</p>
        </div>
        <button className="bg-white text-emerald-800 font-bold px-6 py-2 rounded-lg shadow hover:bg-gray-50 transition">
          تعديل الأسعار الجماعي
        </button>
      </div>

    </div>
  );
}

export default ContentManagement;
