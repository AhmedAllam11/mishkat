import React from 'react'

function Notifications() {
  return (
    <div>
        <main className="flex-1 p-6 space-y-6">
  {/* Header */}
  <div className="flex justify-between items-center">
    <h1 className="text-2xl font-bold">الإشعارات</h1>
    <button className="bg-green-700 text-white px-4 py-2 rounded">
      ✔ تحديد الكل كمقروء
    </button>
  </div>
  {/* Title */}
  <div>
    <h2 className="text-xl font-bold">تنبيهات ولي الأمر</h2>
    <p className="text-gray-500">
      تابع آخر التحديثات المتعلقة بمسيرة أبنائك التعليمية
    </p>
  </div>
  {/* Cards */}
  <div className="grid grid-cols-4 gap-4">
    <div className="bg-white p-6 rounded shadow text-center">
      <i className="fa-solid fa-volume-high font-bold " />
      <p className="text-xl font-bold">5</p>
      <p className="text-gray-500">إعلانات الإدارة</p>
    </div>
    <div className="bg-white p-6 rounded shadow text-center">
      <i className="fa-regular fa-bell" />
      <p className="text-xl font-bold">3</p>
      <p className="text-gray-500">تنبيهات غياب</p>
    </div>
    <div className="bg-white p-6 rounded shadow text-center">
      <i className="fa-solid fa-file-lines" />
      <p className="text-xl font-bold">12</p>
      <p className="text-gray-500">تقارير جديدة</p>
    </div>
    <div className="bg-green-700 text-white p-6 rounded">
      <p className="text-sm">مستوى الالتزام</p>
      <h3 className="text-2xl font-bold">94%</h3>
      <div className="h-1 bg-green-300 mt-2" />
    </div>
  </div>
  {/* Notification 1 */}
  <div className="bg-white p-5 rounded shadow">
    <p className="text-sm text-gray-400">منذ ساعتين</p>
    <h3 className="font-bold">
      {" "}
      <i className="fa-solid fa-file-lines " />
      تقرير الحفظ الأسبوعي - أحمد محمد
    </h3>
    <p className="text-gray-600 text-sm mt-1">
      تم تحديث تقرير الأداء الخاص بالطالب أحمد، لقد أتم حفظ سورة الملك بتقدير
      ممتاز.
    </p>
    <button className="text-green-600 mt-2">عرض التقرير ←</button>
  </div>
  {/* Notification 2 */}
  <div className="bg-white p-5 rounded shadow">
    <p className="text-sm text-gray-400">10:30 صباحاً</p>
    <h3 className="font-bold text-red-600">
      {" "}
      <i className="fa-solid fa-bell" />
      تنبيه غياب غير مبرر
    </h3>
    <p className="text-gray-600 text-sm mt-1">
      تغيبت الطالبة سارة محمد عن حلقة التجويد الصباحية لهذا اليوم.
    </p>
  </div>
  {/* Notification 3 */}
  <div className="bg-white p-5 rounded shadow">
    <p className="text-sm text-gray-400">أمس</p>
    <h3 className="font-bold">
      <i className="fa-solid fa-volume-high font-bold " />
      إعلان: مسابقة المشكاة السنوية{" "}
    </h3>
    <p className="text-gray-600 text-sm mt-1">
      تعلن إدارة مشكاة عن بدء التسجيل في المسابقة السنوية لحفظ القرآن الكريم.
    </p>
    <img src="image.png" className="rounded mt-3 " />
  </div>
  {/* Notification 4 */}
  <div className="bg-white p-5 rounded shadow">
    <p className="text-sm text-gray-400">أمس</p>
    <h3 className="font-bold text-green-700">
      {" "}
      <i className="fa-solid fa-circle-check text-green-600" />
      تأكيد عملية دفع
    </h3>
    <p className="text-gray-600 text-sm mt-1">
      تم استلام دفعة الاشتراك الشهري بنجاح. رقم الفاتورة: INV-9921#
    </p>
  </div>
  {/* Button */}
  <div className="text-center">
    <button className="border px-6 py-2 rounded">عرض الإشعارات السابقة</button>
  </div>
</main>

    </div>
  )
}

export default Notifications