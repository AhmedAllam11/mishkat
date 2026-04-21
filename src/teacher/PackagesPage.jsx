import React from 'react'

function PackagesPage() {
  return (
    <>
  {/* Main Content */}
  <main className="flex-1 p-6 space-y-6">
    {/* Header */}
    <div className="flex justify-between items-center">
      <div className="flex gap-3">
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg font-semibold">
          {" "}
          إضافة حلقة جديدة <i className="fa-solid fa-circle-plus" />
        </button>
        <button className="bg-gray-300 border px-4 py-2 rounded-lg font-semibold">
          جدول الحلقات{" "}
          <i
            className="fa-regular fa-calendar-days"
            style={{ color: "rgb(4, 160, 69)" }}
          />
        </button>
      </div>
      <div className="text-right">
        <h1 className="text-xl font-bold">الحلقات القرآنية</h1>
        <p className="text-sm text-gray-400 mt-1">
          {" "}
          المعلم يدير الحلقات المسئول عنها
        </p>
      </div>
    </div>
    {/* Top Cards */}
    <div className="grid grid-cols-3 gap-6">
      {/* Main Card */}
      <div className="col-span-2 bg-green-800 text-white rounded-xl p-6 text-right">
        <div>
          <span className="text-sm bg-green-700 px-3 py-1 rounded-full">
            جارية الآن{" "}
          </span>
          <h2 className="text-lg font-bold mt-3">
            حلقة الإتقان - المستوى الثالث
          </h2>
          <p className="text-sm mt-2 opacity-80">
            مراجعة سورة البقرة من آية 142 إلى 176-التركيز على أحكام النون
            الساكنة والتنوين.
          </p>
        </div>
        <div className="text-left">
          <button className="mt-8 bg-white text-green-800 px-4 py-2 rounded-lg font-semibold">
            دخول الحلقة
            <i className="fa-solid fa-arrow-right-to-bracket" />
          </button>
        </div>
        <div className="flex  -space-x-2 mt-6 ">
          <div className="w-8 h-8 bg-white rounded-[10px] border" />
          <div className="w-8 h-8 bg-gray-300 rounded-[10px] border" />
          <div className="w-8 h-8 bg-gray-400 rounded-[10px] border" />
          <div className="w-8 h-8 bg-gray-500 text-white text-xs flex items-center justify-center rounded-[10px]">
            +12
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="bg-white rounded-xl p-6 space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">03</span>
          <span className="text-gray-600">الحلقات النشطة</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">42</span>
          <span className="text-gray-600">إجمالي الطلاب</span>
        </div>
        <div className="text-green-700 text-right text-sm font-semibold">
          زيادة بنسبة 12% عن الأسبوع الماضي
          <i
            className="fa-solid fa-arrow-trend-up "
            style={{ color: "rgb(4, 126, 89)" }}
          />
        </div>
      </div>
    </div>
    {/* Stats */}
    {/* Sessions List */}
    <div className="bg-white rounded-xl p-6 space-y-4">
      <h2 className="font-bold text-right">قائمة الحلقات اليومية</h2>
      {/* Item 1 */}
      <div className="flex justify-between items-center border p-4 rounded-lg">
        {/* Action */}
        <button className="bg-green-700 text-white px-4 py-1 rounded">
          بدء
        </button>
        <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
          حاضر الآن
        </span>
        {/* Content */}
        <div className="flex flex-col text-right">
          <div className="flex items-center gap-2 justify-end mb-1"></div>
          <h3 className="font-semibold">حلقة حفظ الصغار(أ)</h3>
          <div className="flex items-center gap-4 text-sm text-gray-500 justify-end mt-1">
            <div className="flex items-center gap-1">
              <span>12 طالب</span>
              <i className="fa-solid fa-user-group" />
            </div>
            <div className="flex items-center gap-1">
              <span> 05:30 - 04:00</span>
              <i className="fa-regular fa-clock" />
            </div>
          </div>
        </div>
      </div>
      {/* Item 2 */}
      <div className="flex justify-between items-center border p-4 rounded-lg">
        <button className="bg-white border text-green-700 px-3 py-1 rounded">
          التفاصيل
        </button>
        <span className="text-sm bg-gray-200  px-3 py-1 rounded-full">
          قائمة{" "}
        </span>
        <div className="flex flex-col text-right">
          <h3 className="font-semibold">حلقة التجويد العملي</h3>
          <div className="flex items-center gap-4 text-sm text-gray-500 justify-end mt-1">
            <div className="flex items-center gap-1">
              <span>8 طالب</span>
              <i className="fa-solid fa-user-group" />
            </div>
            <div className="flex items-center gap-1">
              <span> 07:30 - 06:00 </span>
              <i className="fa-regular fa-clock" />
            </div>
          </div>
        </div>
      </div>
      {/* Item 3 */}
      <div className="flex justify-between items-center border p-4 rounded-lg">
        <button className="bg-white border text-green-700 px-3 py-1 rounded">
          التفاصيل
        </button>
        <span className="text-sm bg-gray-200  px-3 py-1 rounded-full">
          قائمة{" "}
        </span>
        <div className="flex flex-col text-right">
          <h3 className="font-semibold">حلقة المتون العلمية</h3>
          <div className="flex items-center gap-4 text-sm text-gray-500 justify-end mt-1">
            <div className="flex items-center gap-1">
              <span>15 طلاب</span>
              <i className="fa-solid fa-user-group" />
            </div>
            <div className="flex items-center gap-1">
              <span>10:00 - 08:30</span>
              <i className="fa-regular fa-clock" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Weekly Schedule */}
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-green-700">عرض الجدول الكامل</span>
        <span className="font-bold">مواعيد الحلقات الأسبوعية</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600 text-center">
        <span className="flex-1">الجمعة</span>
        <span className="flex-1">الخميس</span>
        <span className="flex-1">الأربعاء</span>
        <span className="flex-1">الثلاثاء</span>
        <span className="flex-1">الاثنين</span>
        <span className="flex-1">الأحد</span>
        <span className="flex-1">السبت</span>
      </div>
      <div className="grid grid-cols-7 gap-2 mt-3 text-center">
        <div className="h-2 bg-green-700 rounded" />
        <div className="h-2 bg-green-300 rounded" />
        <div className="h-2 bg-green-700 rounded" />
        <div className="h-2 bg-green-200 rounded" />
        <div className="h-2 bg-green-700 rounded" />
        <div className="h-2 bg-green-400 rounded" />
        <div className="h-2 bg-green-700 rounded" />
      </div>
    </div>
  </main>
</>

  )
}

export default PackagesPage