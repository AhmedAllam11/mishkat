import React from 'react'

function Evaluation() {
  return (
    <div>
<>
  {/* Content */}
  <main className="flex-1 p-8 space-y-6">
    <h1 className="text-2xl font-bold text-right">تقييم مستوى الطالب</h1>
    {/* Alert */}
    <div className="bg-red-100 text-red-600 p-4 rounded-xl text-right">
      التقييم لن يظهر تقارير
      <i className="fa-solid fa-circle-exclamation" />
    </div>
    <div className="flex gap-6">
      {/* Student Card */}
      <div className="bg-white p-6 rounded-xl w-[260px] text-center space-y-4">
        <div className="w-20 h-20 bg-green-100 rounded-xl mx-auto flex items-center justify-center">
          <i className="fa-solid fa-user text-green-700 text-2xl" />
        </div>
        <h2 className="font-bold">أحمد محمد علي</h2>
        <p className="text-sm text-gray-500">طالب متفوق - المستوى الثاني</p>
        <div className="bg-gray-100 p-3 rounded-lg flex justify-between text-sm">
          <span className="font-bold text-green-600">24 حلقة</span>
          <span>عدد الحصص</span>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg flex justify-between text-sm">
          <span className="font-bold text-green-600">صفحتين/يوم</span>
          <span>معدل الحفظ</span>
        </div>
      </div>
      {/* Form */}
      <div className="flex-1 bg-white p-6 rounded-xl space-y-6">
        <h2 className="font-bold text-green-700 flex items-center gap-2">
          <i className="fa-solid fa-book" />
          تسجيل مستوى الحفظ
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="أحمد محمد علي"
            className="bg-gray-200 p-3 rounded-lg"
          />
          <input
            placeholder="مثال: حفظ جزء عم"
            className="bg-gray-200 p-3 rounded-lg"
          />
        </div>
        {/* Rating */}
        <div className="space-y-3">
          <p className="text-sm text-gray-500">مستوى الأداء اليومي</p>
          <div className="flex gap-4">
            <div className="flex-1 bg-gray-200 p-4 rounded-xl text-center">
              <i className="fa-solid fa-face-frown" />
              <button>مقبول</button>
            </div>
            <div className="flex-1 bg-gray-200 p-4 rounded-xl text-center">
              <i className="fa-solid fa-face-smile" />
              <button>جيد جدًا</button>
            </div>
            <div className="flex-1 bg-green-300 p-4 rounded-xl text-center">
              <i className="fa-solid fa-face-laugh" />
              <button>ممتاز</button>
            </div>
          </div>
        </div>
        {/* Notes */}
        <div>
          <h3 className="font-bold mb-2 text-right gap-2 text-green-800">
            ملاحظات على الأداء
            <i className="fa-solid fa-pen fa-xs" />
          </h3>
          <textarea
            className="w-full h-32 bg-gray-200 rounded-xl p-3"
            placeholder=".....اكتب تفاصيل الاداء ،ونقاط القوة،ومواضع التحسين"
            defaultValue={""}
          />
        </div>
        <button className="bg-green-800 text-white px-9 py-3 rounded-xl">
          <i className="fa-solid fa-paper-plane" />
          حفظ التقييم
        </button>
      </div>
    </div>
  </main>
</>

    </div>
  )
}

export default Evaluation