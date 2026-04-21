import React from 'react'

function Tracking() {
  return (
    <div>
       <main className="flex-1 max-w-[1200px] mx-auto">
  {/* Header */}
  <div className="bg-white rounded-xl px-6 py-4 mb-6 flex items-center justify-between shadow-sm">
    <div className="w-[120px]" />
    <div className="w-[420px] bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2 text-sm text-gray-500">
      <input
        className="bg-transparent outline-none w-full text-right"
        placeholder="...بحث في المسار"
      />
      <i className="fa-solid fa-magnifying-glass" />
    </div>
    <h2 className="text-green-800 font-bold text-lg">متابعة مسار الطالب</h2>
  </div>
  {/* Title */}
  <div className="text-right mb-8">
    <h1 className="text-2xl font-bold mb-1">مرحباً بك يا طالب العلم</h1>
    <p className="text-gray-500 text-sm">
      !أنت الآن في المرحلة الثالثة من مسار الحفظ... استمر في التميز
    </p>
  </div>
  {/* Grid */}
  <div className="grid grid-cols-3 gap-6">
    {/* LEFT */}
    <div className="col-span-2 space-y-6">
      {/* Path Card */}
      <div className="bg-white rounded-xl p-6 text-right shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
            المستوى المتقدم
          </span>
          <h3 className="font-bold">خريطة المسار التعليمي</h3>
        </div>
        <div className="flex justify-between items-center">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
              <i className="fa-solid fa-book" />
            </div>
            <p className="text-xs text-gray-500">المراجعة</p>
            <p className="text-[11px] text-gray-400 mt-1">تحت المراجعة</p>
          </div>
          <div className="flex-1 h-[2px] bg-gray-200 mx-3" />
          {/* Step 2 */}
          <div className="text-center">
            <div className="w-10 h-10 bg-green-700 text-white rounded-lg flex items-center justify-center mx-auto mb-2">
              <i className="fa-solid fa-check" />
            </div>
            <p className="text-xs text-green-700 font-bold">المرحلة الحالية</p>
            <p className="text-[11px] text-green-600 mt-1">مكتمل</p>
          </div>
          <div className="flex-1 h-[2px] bg-gray-200 mx-3" />
          {/* Step 3 */}
          <div className="text-center">
            <div className="w-10 h-10 bg-green-700 text-white rounded-lg flex items-center justify-center mx-auto mb-2">
              <i className="fa-solid fa-check" />
            </div>
            <p className="text-xs text-green-700">التأسيس</p>
            <p className="text-[11px] text-green-600 mt-1">مكتمل</p>
          </div>
        </div>
      </div>
      {/* Bottom Cards */}
      <div className="grid grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-5 text-right shadow-sm">
          <i className="fa-solid fa-flag text-gray-400 mb-3" />
          <h4 className="font-bold text-sm mb-2">اختبار الجزء الثالث</h4>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">
            اختبار في مراجعة حفظ الجزء بالكامل بإتقان
          </p>
          <div className="flex gap-1 justify-end">
            <span className="w-3 h-3 bg-gray-300 rounded-full" />
            <span className="w-3 h-3 bg-gray-300 rounded-full" />
            <span className="w-3 h-3 bg-gray-400 rounded-full" />
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl p-5 flex gap-3 text-right shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h4 className="font-bold text-sm mb-2">
              "خيركم من تعلم القرآن وعلمه"
            </h4>
            <p className="text-xs text-gray-500 mb-3 leading-relaxed">
              لقد أحرزت إنجازًا رائعًا هذا الأسبوع، واصل تقدمك
            </p>
            <button className="bg-green-700 text-white text-xs px-3 py-1 rounded">
              ابدأ ورد اليوم
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* RIGHT */}
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 text-right shadow-sm">
        <p className="text-gray-400 text-sm mb-2">إنجاز العام</p>
        <h2 className="text-3xl font-bold text-green-700 mb-2">68%</h2>
        <p className="text-xs text-gray-500 mb-4">
          .لقد حفظت 18 جزءًا من القرآن الكريم حتي الأن
        </p>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div className="bg-green-700 h-2 rounded-full w-[68%]" />
        </div>
      </div>
    </div>
  </div>
  {/* Weekly Activity FULL WIDTH */}
  <div className="w-full mt-8 rounded-xl p-6 text-right">
    {/* Title */}
    <div className="flex justify-between items-center mb-6">
      <span className="text-green-700 text-sm cursor-pointer hover:underline">
        عرض التقارير المفصلة
      </span>
      <h3 className="font-bold">النشاط الأسبوعي</h3>
    </div>
    {/* Days */}
    <div
      className="grid grid-cols-7 gap-5 text-center text-sm"
      style={{ direction: "rtl" }}
    >
      {/* 24 - الأحد */}
      <div className="bg-white border rounded-xl p-4 h-32 flex flex-col justify-between shadow-sm hover:shadow-md transition">
        <span className="text-xs text-gray-500">الأحد</span>
        <span className="font-bold text-lg">24</span>
        <span className="w-full h-[3px] bg-green-700 rounded-full shadow-[0_6px_8px_rgba(0,0,0,0.25)]" />
      </div>
      {/* 25 - الإثنين */}
      <div className="bg-white border rounded-xl p-4 h-32 flex flex-col justify-between shadow-sm hover:shadow-md transition">
        <span className="text-xs text-gray-500">الإثنين</span>
        <span className="font-bold text-lg">25</span>
        <span className="w-full h-[3px] bg-green-700 rounded-full shadow-[0_6px_8px_rgba(0,0,0,0.25)]" />
      </div>
      {/* 26 - الثلاثاء */}
      <div className="bg-white border rounded-xl p-4 h-32 flex flex-col justify-between shadow-sm hover:shadow-md transition">
        <span className="text-xs text-gray-500">الثلاثاء</span>
        <span className="font-bold text-lg">26</span>
        <span className="w-full h-[3px] bg-green-700 rounded-full shadow-[0_6px_8px_rgba(0,0,0,0.25)]" />
      </div>
      {/* 27 - الأربعاء */}
      <div className="bg-white border rounded-xl p-4 h-32 flex flex-col justify-between shadow-sm hover:shadow-md transition">
        <span className="text-xs text-gray-500">الأربعاء</span>
        <span className="font-bold text-lg">27</span>
        <span className="w-full h-[3px] bg-green-700 rounded-full shadow-[0_6px_8px_rgba(0,0,0,0.25)]" />
      </div>
      {/* 28 - الخميس (Selected) */}
      <div className="bg-green-100 border-2 border-green-700 rounded-xl p-4 h-32 flex flex-col justify-between shadow-md">
        <span className="text-xs text-green-700 font-semibold">الخميس</span>
        <span className="font-bold text-lg text-green-700">28</span>
        <span className="w-full h-[3px] bg-green-700 rounded-full shadow-[0_6px_10px_rgba(0,0,0,0.35)]" />
      </div>
      {/* 29 - الجمعة (Disabled) */}
      <div className="bg-gray-50 border rounded-xl p-4 h-32 flex flex-col justify-between text-gray-400 opacity-70">
        <span className="text-xs">الجمعة</span>
        <span className="font-bold text-lg">29</span>
        <span className="w-full h-[3px] bg-gray-300 rounded-full" />
      </div>
      {/* 30 - السبت (Disabled) */}
      <div className="bg-gray-50 border rounded-xl p-4 h-32 flex flex-col justify-between text-gray-400 opacity-70">
        <span className="text-xs">السبت</span>
        <span className="font-bold text-lg">30</span>
        <span className="w-full h-[3px] bg-gray-300 rounded-full" />
      </div>
    </div>
  </div>
</main>
 
    </div>
  )
}

export default Tracking