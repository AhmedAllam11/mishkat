import React from 'react'

function Tasks() {
  return (
    <div>
        <main className="flex-1 flex flex-col px-6">
  {/* Header */}
  <div className="bg-white rounded-xl px-6 py-4 mb-6 flex items-center justify-between">
    <div className="flex gap-4 text-gray-500">
      <i className="fa-solid fa-heart" />
      <i className="fa-solid fa-bell" />
      <i className="fa-solid fa-circle-question" />
    </div>
    <div className="w-[420px] bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2 text-sm">
      <input
        className="bg-transparent outline-none w-full text-right"
        placeholder="...البحث في المهام"
      />
      <i className="fa-solid fa-magnifying-glass" />
    </div>
    <h2 className="text-green-800 font-bold">مشكاة</h2>
  </div>
  {/* Title */}
  <div className="flex justify-between items-center mb-6">
    {/* Left (Buttons) */}
    <div className="flex gap-2">
      <button className="bg-green-700 text-white font-bold px-4 py-1.5 rounded-lg text-sm">
        تحديث القائمة
      </button>
      <button className="bg-white text-green-700 font-bold border px-4 py-1.5 rounded-lg text-sm">
        الأسبوع القادم
      </button>
    </div>
    {/* Right (Title) */}
    <div className="text-right">
      <h1 className="text-2xl font-bold">المهام</h1>
      <p className="text-gray-500 text-sm">
        .أهلاً بك، لديك 3 مهام جديدة اليوم
      </p>
    </div>
  </div>
  {/* Stats */}
  <div className="grid grid-cols-3 gap-4 mb-6">
    {/* Progress */}
    <div className="bg-white p-4 rounded-xl flex justify-between items-center">
      {/* Icon */}
      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
        <i className="fa-solid fa-chart-simple text-gray-500" />
      </div>
      {/* Text */}
      <div className="text-right">
        <p className="text-gray-400 text-sm">نسبة الإنجاز</p>
        <h3 className="font-bold text-lg">75%</h3>
      </div>
    </div>
    {/* In Progress */}
    <div className="bg-white p-4 rounded-xl flex justify-between items-center">
      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
        <i className="fa-solid fa-hourglass-half text-gray-500" />
      </div>
      <div className="text-right">
        <p className="text-gray-400 text-sm">مهام قيد التنفيذ</p>
        <h3 className="font-bold text-lg">04</h3>
      </div>
    </div>
    {/* Completed */}
    <div className="bg-white p-4 rounded-xl flex justify-between items-center">
      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
        <i className="fa-solid fa-circle-check text-green-700" />
      </div>
      <div className="text-right">
        <p className="text-gray-400 text-sm">مهام مكتملة</p>
        <h3 className="font-bold text-lg text-green-700">12</h3>
      </div>
    </div>
  </div>
  {/* Layout */}
  <div className="grid grid-cols-4 gap-6">
    {/* LEFT */}
    <div className="space-y-4">
      {/* Progress */}
      <div className="bg-green-800 text-white rounded-xl p-5 text-right">
        {/* Title */}
        <h3 className="font-bold mb-1">إنجازك الدراسي</h3>
        <p className="text-xs text-green-100 mb-4">
          !أنت تتفوق على 85% من زملائك هنا واصل التميز
        </p>
        {/* Progress */}
        <div className="w-full bg-green-700 rounded-full h-2 mb-3 overflow-hidden">
          <div className="bg-white h-2 rounded-full w-[75%]" />
        </div>
        {/* Bottom Info */}
        <div className="flex justify-between text-xs">
          <span>المستوى 4</span>
          <span>75% مكتمل</span>
        </div>
      </div>
      {/* Upcoming */}
      <div className="bg-gray-50 rounded-xl p-5 text-right space-y-4">
        {/* Title */}
        <div className="flex items-center justify-end gap-2">
          <h3 className="font-bold">حصص قادمة</h3>
        </div>
        {/* Item */}
        <div className="flex items-center justify-between bg-white p-3 rounded-lg h-[70px]">
          {/* Details */}
          <div className="flex flex-col justify-center text-right">
            <h4 className="font-semibold text-sm">حلقة التلاوة الصباحية</h4>
            <div className="flex justify-end gap-2 text-xs text-gray-500 mt-1">
              <span>مع الشيخ محمود</span>
              <span>08:00 ص</span>
            </div>
          </div>
          {/* Date Box */}
          <div className="w-14 h-14 bg-white border rounded-lg flex flex-col items-center justify-center">
            <span className="text-green-700 font-bold text-sm">24</span>
            <span className="text-gray-400 text-xs">أكتوبر</span>
          </div>
        </div>
        {/* Item */}
        <div className="flex items-center justify-between bg-white p-3 rounded-lg h-[70px]">
          {/* Details */}
          <div className="flex flex-col justify-center text-right">
            <h4 className="font-semibold text-sm">شرح متن الجزرية</h4>
            <div className="flex justify-end gap-2 text-xs text-gray-500 mt-1">
              <span>قاعة ب</span>
              <span>04:30 م</span>
            </div>
          </div>
          {/* Date Box */}
          <div className="w-14 h-14 bg-white border rounded-lg flex flex-col items-center justify-center">
            <span className="text-green-700 font-bold text-sm">26</span>
            <span className="text-gray-400 text-xs">أكتوبر</span>
          </div>
        </div>
      </div>
      {/* Teacher Message */}
      <div className="bg-white rounded-xl p-5 text-right space-y-3 border">
        {/* Title */}
        <div className="flex items-center justify-end gap-2">
          <h3 className="font-bold">رسالة من المعلم</h3>
          <i className="fa-solid fa-comment-dots text-green-700" />
        </div>
        {/* Message */}
        <i className="text-sm text-gray-600 leading-relaxed">
          "يا بني، التركيز في مراجعة المتشابهات في سورة البقرة سيثبت حفظك بشكل
          كبير. لا تتردد في سؤالي إذا أشكل عليك شيء"
        </i>
        {/* Teacher Name */}
        <p className="text-xs  font-semibold text-left">د. عبدالرحمن -</p>
      </div>
    </div>
    {/* RIGHT */}
    <div className="col-span-3 space-y-4">
      {/* Title */}
      <div className="flex items-center justify-end gap-2">
        <h3 className="font-bold">المهام الحالية</h3>
        <span className="w-1 h-5 bg-green-700" />
      </div>
      {/* Card 1 */}
      <div className="bg-white rounded-xl p-4 border space-y-3">
        {/* Top */}
        <div className="flex items-center justify-between">
          {/* Status */}
          <span className="bg-green-100  font-bold text-xs px-2 py-1 rounded-[90px]">
            عاجل
          </span>
          {/* Details */}
          <div className="flex items-start justify-end gap-2 text-right">
            {/* Text */}
            <div>
              <h4 className="font-bold">مراجعة سورة البقرة</h4>
              <p className="text-xs text-gray-500 mt-1">
                من الآية 1 إلى الآية 50 - حفظاً وتجويداً
              </p>
            </div>
            {/* Icon Box (Square) */}
            <div className="w-[45px] h-[45px] bg-gray-200 rounded-md flex items-center justify-center">
              <i className="fa-solid fa-book-open text-green-600 " />
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t" />
        {/* Bottom */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          {/* Left Button */}
          <button className="text-green-700 text-sm flex items-center gap-1">
            <i className="fa-solid fa-arrow-left" />
            البدء الآن
          </button>
          {/* Info */}
          <div className="flex items-center gap-4">
            {/* Teacher */}
            <div className="flex items-center gap-1">
              <span>الشيخ أحمد علي</span>
              <i className="fa-solid fa-user" />
            </div>
            {/* Deadline */}
            <div className="flex items-center gap-1">
              <span>ينتهي غداً</span>
              <i className="fa-regular fa-calendar" />
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-white rounded-xl p-4 border space-y-3">
        {/* Top */}
        <div className="flex items-center justify-between">
          {/* Status */}
          <span className="bg-gray-200  font-bold text-xs px-2 py-1 rounded-[90px]">
            اعتيادي
          </span>
          {/* Details */}
          <div className="flex items-start justify-end gap-2 text-right">
            {/* Text */}
            <div>
              <h4 className="font-bold">اختبار التجويد الاسبوعي</h4>
              <p className="text-xs text-gray-500 mt-1">
                أحكام النون الساكنة والتنوين - الجزء الأول
              </p>
            </div>
            {/* Icon Box (Square) */}
            <div className="w-[45px] h-[45px] bg-gray-200 rounded-md flex items-center justify-center">
              <i className="fa-solid fa-file-pen fa-xl" />
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t" />
        {/* Bottom */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          {/* Left Button */}
          <button className="text-green-700 text-sm flex items-center gap-1">
            <i className="fa-solid fa-arrow-left" />
            عرض التفاصيل
          </button>
          {/* Info */}
          <div className="flex items-center gap-4">
            {/* Teacher */}
            <div className="flex items-center gap-1">
              <span>10 أسئلة</span>
              <i className="fa-solid fa-circle-question" />
            </div>
            {/* Deadline */}
            <div className="flex items-center gap-1">
              <span>بعد 3 أيام</span>
              <i className="fa-regular fa-calendar" />
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-white rounded-xl p-4 border space-y-3">
        {/* Top */}
        <div className="flex items-center justify-between">
          {/* Status */}
          <span className="bg-red-300  font-bold text-xs px-2 py-1 rounded-[90px]">
            متأخر
          </span>
          {/* Details */}
          <div className="flex items-start justify-end gap-2 text-right">
            {/* Text */}
            <div>
              <h4 className="font-bold">تسجيل تلاوة آيات الصفات </h4>
              <p className="text-xs text-gray-500 mt-1">
                مطلوب تسجيل صوتي واضح بطول 3 دقائق
              </p>
            </div>
            {/* Icon Box (Square) */}
            <div className="w-[45px] h-[45px] bg-gray-200 rounded-md flex items-center justify-center">
              <i className="fa-solid fa-microphone fa-xl" />
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t" />
        {/* Bottom */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          {/* Left Button */}
          <button className="text-green-700 text-sm flex items-center gap-1">
            <i className="fa-solid fa-arrow-left" />
            رفع الملف
          </button>
          {/* Info */}
          <div className="flex items-center gap-4">
            {/* Teacher */}
            <div className="flex items-center gap-1">
              <span>5 دقائق</span>
              <i className="fa-solid fa-stopwatch" />
            </div>
            {/* Deadline */}
            <div className="flex items-center gap-1  text-red-700">
              <span>منذ أمس</span>
              <i className="fa-solid fa-triangle-exclamation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default Tasks