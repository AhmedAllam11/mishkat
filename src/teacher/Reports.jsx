import React from 'react'

function Reports() {
  return (
    <div>
        <>
  {/* MAIN CONTENT */}
  <main className="flex-1 px-12 py-8">
    <div className="space-y-6">
      {/* Title */}
      <div className="text-right">
        <h1 className="text-2xl font-bold ">عرض نتائج التقارير والمتابعة</h1>
        <span className="text-red-500 text-sm mt-1">
          التقارير دي بتوصل كل ولي أمر
        </span>
        <i
          className="fa-solid fa-circle-exclamation fa-flip-vertical"
          style={{ color: "rgb(189, 8, 8)" }}
        />
      </div>
      {/* Top Section */}
      <div className="flex flex-row-reverse gap-6">
        {/* Chart */}
        <div className="bg-white rounded-xl p-6 flex-1">
          <div className="flex justify-between flex-row-reverse items-center mb-4">
            <h2 className="font-bold">تطور المستوى بمرور الوقت</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>المراجعة</span>
              <span className="w-2 h-2 bg-green-600 rounded-full" />
              <span>الحفظ</span>
              <span className="w-2 h-2 bg-green-700 rounded-full" />
            </div>
          </div>
          <div className="h-[200px] flex items-end justify-between text-xs text-gray-400">
            <span>أكتوبر</span>
            <span>نوفمبر</span>
            <span>ديسمبر</span>
            <span>يناير</span>
          </div>
        </div>
        {/* Side Cards */}
        <div className="w-[260px] space-y-4">
          {/* Card 1 */}
          <div className="bg-green-800 text-white rounded-2xl p-5 relative">
            {/* Label */}
            <span className="bg-green-700 text-xs px-3 py-1 rounded-md absolute top-4 right-4">
              أداء العام
            </span>
            {/* Icon */}
            <div className="absolute top-4 left-4 text-green-200 text-xl">
              <i className="fa-regular fa-circle-check" />
            </div>
            {/* Content */}
            <div className="mt-10 text-right">
              <p className="text-sm text-green-200">نسبة الانضباط</p>
              <p className="text-4xl font-black mt-1">94%</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-200 rounded-2xl p-4 text-right">
            <p className="text-sm text-gray-500 mb-3">أحدث الملاحظات المرسلة</p>
            <div className="bg-white rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
              <i>
                "تحسن ملحوظ في مخارج الحروف والالتزام بأحكام التجويد الأساسية
                خلال الأسبوع الماضي"
              </i>
            </div>
          </div>
        </div>
      </div>
      {/* Reports */}
      <div className="bg-white rounded-xl p-6 space-y-4">
        <div className="flex flex-row-reverse justify-between items-center">
          <h2 className="font-bold ">تقارير كل طالب</h2>
          <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm">
            تصفية حسب الحلقة
          </button>
        </div>
        {/* Row 1*/}
        <div className="flex flex-row-reverse justify-between items-center bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 w-[250px]">
            <div>
              <p className="font-bold">أحمد محمد علي</p>
              <p className="text-xs text-gray-500">حلقةالصديق .الجزء 26</p>
            </div>
            <img src="" className="w-10 h-10 rounded-[100px]" />
          </div>
          <div className="text-center w-[120px]">
            <p className="text-xs text-gray-400">آخر تقييم</p>
            <p className="font-bold">ممتاز</p>
          </div>
          <div className="text-center w-[120px]">
            <p className="text-xs text-gray-400">المحفوظات</p>
            <p className="font-bold"> 14 صفحة </p>
          </div>
          <div className="w-[150px] flex justify-end">
            <button className="bg-green-800 text-white px-4 py-2 rounded-lg text-sm">
              عرض التقرير <i className="fa-solid fa-eye fa-xs" />
            </button>
          </div>
        </div>
        {/* Row 2*/}
        <div className="flex flex-row-reverse justify-between items-center bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 w-[250px]">
            <div>
              <p className="font-bold">ياسين إبراهيم</p>
              <p className="text-xs text-gray-500">حلقةالفاروق .الجزء 15</p>
            </div>
            <img src="" className="w-10 h-10 rounded-[100px]" />
          </div>
          <div className="text-center w-[120px]">
            <p className="text-xs text-gray-400">آخر تقييم</p>
            <p className="font-bold">جيد جداً</p>
          </div>
          <div className="text-center w-[120px]">
            <p className="text-xs text-gray-400">المحفوظات</p>
            <p className="font-bold "> 8 صفحات</p>
          </div>
          <div className="w-[150px] flex justify-end">
            <button className="bg-green-800 text-white px-4 py-2 rounded-lg text-sm">
              عرض التقرير <i className="fa-solid fa-eye fa-xs" />
            </button>
          </div>
        </div>
        {/* Row 3*/}
        <div className="flex flex-row-reverse justify-between items-center bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 w-[250px]">
            <div>
              <p className="font-bold">سارة محمود كمال</p>
              <p className="text-xs text-gray-500">حلقة الزهراء .الجزء 30</p>
            </div>
            <img src="" className="w-10 h-10 rounded-[100px]" />
          </div>
          <div className="text-center w-[120px]">
            <p className="text-xs text-gray-400">آخر تقييم</p>
            <p className="font-bold">ممتاز</p>
          </div>
          <div className="text-center w-[120px]">
            <p className="text-xs text-gray-400">المحفوظات</p>
            <p className="font-bold"> صفحة 22</p>
          </div>
          <div className="w-[150px] flex justify-end">
            <button className="bg-green-800 text-white px-4 py-2 rounded-lg text-sm">
              عرض التقرير <i className="fa-solid fa-eye fa-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</>

    </div>
  )
}

export default Reports