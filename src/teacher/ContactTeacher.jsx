import React from 'react'

function ContactTeacher() {
  return (
    <div>
        <main className="flex-1 px-12 py-8">
  {/* Header */}
  <div className="flex justify-between items-start mb-8">
    {/* Icons */}
    <div className="flex gap-4 text-gray-500">
      <i className="fa-solid fa-bell cursor-pointer  hover:text-black" />
      <i className="fa-solid fa-gear cursor-pointer  hover:text-black" />
      <i className="fa-solid fa-circle-question cursor-pointer  hover:text-black" />
    </div>
    {/* Title */}
    <div className="text-right">
      <h1 className="text-[22px] text-gray-800">
        حساب المعلم الشخصي - البيانات الشخصية
      </h1>
      <p className="text-sm text-gray-400 mt-1">teacher id: #88219</p>
    </div>
  </div>
  {/* Content */}
  <div className="grid grid-cols-3 gap-6">
    {/* Right (Form) */}
    <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm space-y-6 text-right">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-500">رقم الهاتف:</label>
          <div className="bg-gray-100 p-3 rounded-lg mt-1">
            +20 123 456 7890
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-500">الاسم:</label>
          <div className="bg-gray-100 p-3 rounded-lg mt-1">محمد الشافعي</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-500">الرقم القومي:</label>
          <div className="bg-gray-100 p-3 rounded-lg mt-1 text-gray-400">
            ادخل رقم الهوية
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-500">البريد الإلكتروني:</label>
          <div className="bg-gray-100 p-3 rounded-lg mt-1">
            m.shafie@example.com
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-500">سنوات الخبرة:</label>
          <div className="bg-gray-100 p-3 rounded-lg mt-1">8 سنوات</div>
        </div>
        <div>
          <label className="text-sm text-gray-500">التخصص:</label>
          <div className="bg-gray-100 p-3 rounded-lg mt-1">تحفيظ</div>
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-500">المؤهل العلمي:</label>
        <div className="bg-gray-100 p-3 rounded-lg mt-1">
          ليسانس أصول دين - جامعة الأزهر
        </div>
      </div>
      <div className="flex gap-3 pt-2 justify-end">
        <button className="px-6 py-2 bg-gray-200 rounded-lg">إلغاء</button>
        <button className="px-6 py-2 bg-green-700 text-white rounded-lg shadow">
          حفظ البيانات
        </button>
      </div>
    </div>
    {/* Left Cards */}
    <div className="space-y-6 text-center">
      {/* Profile */}
      <div className="bg-white rounded-xl p-6 shadow-sm relative">
        <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-3" />
        <div className="absolute top-[90px] left-[210px] -translate-x-1/2 bg-green-700 text-white p-1 rounded-[5px]">
          <i className="fa-regular fa-camera" />
        </div>
        <p className="mt-2">أ. محمد الشافعي</p>
        <p className="text-green-600 text-sm mt-1">تحفيظ وقراءات</p>
      </div>
      {/* Upload */}
      <div className="text-right bg-white rounded-xl p-6 shadow-sm border-2  ">
        <p className="mb-8 ">CV\السيرة الذاتية</p>
        <div className="bg-gray-100 rounded-xl p-6 shadow-sm border-2 border-dashed border-gray-300">
          <div className=" p-3 rounded-[5px] w-fit mx-auto mb-3">
            <i
              className="fa-solid fa-file-arrow-up fa-2xl"
              style={{ color: "rgb(15, 181, 84)" }}
            />
          </div>
          <p className="text-sm text-center">رفع الملف pdf</p>
          <p className="text-xs text-gray-400 mt-3 text-center">5MB أقصى حجم</p>
        </div>
      </div>
    </div>
    {/* Bottom */}
    <div className="grid grid-cols-3 gap-6 mt-10 text-right">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="mb-4 text-[#1F6F5B] text-xl">
          <i className="fa-solid fa-circle-question" />
        </div>
        <p className="font-semibold text-[15px] mb-2">الدعم الفني</p>
        <p className="text-sm text-gray-500 leading-6">
          تواصل مع الدعم الفني عند وجود مشكلة
        </p>
      </div>
      {/* Card 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="mb-4 text-[#1F6F5B] text-xl">
          <i className="fa-solid fa-arrows-rotate" />
        </div>
        <p className="font-semibold text-[15px] mb-2">تحديث الملف</p>
        <p className="text-sm text-gray-500 leading-6">آخر تحديث منذ 3 أيام</p>
      </div>
      {/* Card 3 */}
      <div className="bg-[#EEF4F2] p-6 rounded-2xl shadow-sm">
        <div className="mb-4 text-[#1F6F5B] text-xl">
          <i className="fa-solid fa-user-shield" />
        </div>
        <p className="font-semibold text-[15px] mb-2">أمن البيانات</p>
        <p className="text-sm text-gray-600 leading-6">
          بياناتك محمية وفق أعلى معايير الأمان
        </p>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default ContactTeacher