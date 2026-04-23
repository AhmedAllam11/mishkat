import React, { useState } from "react";
import { useForm } from "react-hook-form";

// 🔥 أيقونات من React Icons
import { FaUser, FaPhone, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";
import { FiUpload } from "react-icons/fi";

function ContactTeacher() {

  // 🔥 react-hook-form لإدارة الفورم
  const { register, handleSubmit, reset } = useForm();

  // 🔥 تخزين البيانات بعد الحفظ
  const [savedData, setSavedData] = useState(null);

  // 🔥 حالة التعديل / العرض
  const [isEditing, setIsEditing] = useState(true);

  // 🔥 صورة البروفايل
  const [imagePreview, setImagePreview] = useState(null);

  // 🔥 اسم ملف الـ CV
  const [cvName, setCvName] = useState("");

  // ================= حفظ البيانات =================
  const onSubmit = (data) => {
    setSavedData(data);   // حفظ البيانات
    setIsEditing(false);  // تحويل من الفورم للعرض
  };

  // ================= تعديل البيانات =================
  const handleEdit = () => {
    reset(savedData);     // رجوع البيانات داخل الفورم
    setIsEditing(true);   // فتح الفورم تاني
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">

      {/* ================= العنوان ================= */}
      <div className="mb-8 text-right">
        <h1 className="text-2xl font-bold">
          حساب المعلم الشخصي - البيانات
        </h1>
        <p className="text-gray-400 text-sm">
          teacher id: #88219
        </p>
      </div>

      {/* ========================================================= */}
      {/* 🔥 GRID الرئيسي - عكسنا الاتجاه */}
      {/* الصورة + CV (يمين) | الفورم (يسار) */}
      {/* ========================================================= */}
      <div className="grid grid-cols-3 gap-6">

        {/* ================= الجانب الأيمن (الصورة + CV) ================= */}
        <div className="space-y-6 order-last">

          {/* ===== كارت الصورة ===== */}
          <div className="bg-white p-6 rounded-xl shadow text-center">

            {/* صورة المعلم */}
            <div className="w-28 h-28 mx-auto bg-gray-200 rounded-xl overflow-hidden">

              {/* عرض الصورة لو موجودة */}
              {imagePreview && (
                <img
                  src={imagePreview}
                  className="w-full h-full object-cover"
                  alt="teacher"
                />
              )}
            </div>

            {/* رفع صورة */}
            <label className="flex items-center justify-center gap-2 mt-3 text-sm cursor-pointer text-green-600">
              <FiUpload />
              <span>رفع صورة</span>

              <input
                type="file"
                className="hidden"
                {...register("image")}
                onChange={(e) =>
                  setImagePreview(URL.createObjectURL(e.target.files[0]))
                }
              />
            </label>

            {/* اسم المعلم */}
            <p className="mt-3 font-bold">
              {savedData?.name || "اسم المعلم"}
            </p>

            {/* التخصص */}
            <p className="text-green-600 text-sm">
              {savedData?.specialty || "التخصص"}
            </p>

          </div>

          {/* ===== CV ===== */}
          <div className="bg-white p-6 rounded-xl shadow text-right">

            <p className="font-semibold mb-3 flex items-center gap-2 justify-end">
              <MdSchool />
              السيرة الذاتية CV
            </p>

            <div className="border-2 border-dashed p-5 rounded-xl text-center bg-gray-50">

              {/* رفع ملف */}
              <input
                type="file"
                className="text-sm"
                {...register("cv")}
                onChange={(e) =>
                  setCvName(e.target.files[0]?.name)
                }
              />

              {/* اسم الملف */}
              <p className="mt-2 text-sm text-gray-600">
                {cvName || "لم يتم رفع ملف"}
              </p>

              <p className="text-xs text-gray-400">
                PDF - أقصى 5MB
              </p>

            </div>
          </div>

        </div>

        {/* ================= الجانب الأيسر (الفورم) ================= */}
        <div className="col-span-2 bg-white p-6 rounded-xl shadow text-right">

          {isEditing ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* ===== صف 1 ===== */}
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="flex items-center gap-2 text-gray-500">
                    <FaUser /> الاسم
                  </label>
                  <input
                    {...register("name")}
                    className="w-full p-3 bg-gray-100 rounded-lg"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-500">
                    <FaPhone /> الهاتف
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full p-3 bg-gray-100 rounded-lg"
                  />
                </div>

              </div>

              {/* ===== صف 2 ===== */}
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="flex items-center gap-2 text-gray-500">
                    <FaEnvelope /> الإيميل
                  </label>
                  <input
                    {...register("email")}
                    className="w-full p-3 bg-gray-100 rounded-lg"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-500">
                    <MdWork /> سنوات الخبرة
                  </label>
                  <input
                    {...register("experience")}
                    className="w-full p-3 bg-gray-100 rounded-lg"
                  />
                </div>

              </div>

              {/* ===== صف 3 ===== */}
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="flex items-center gap-2 text-gray-500">
                    <MdSchool /> التخصص
                  </label>
                  <input
                    {...register("specialty")}
                    className="w-full p-3 bg-gray-100 rounded-lg"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-500">
                    <FaGraduationCap /> المؤهل
                  </label>
                  <input
                    {...register("education")}
                    className="w-full p-3 bg-gray-100 rounded-lg"
                  />
                </div>

              </div>

              {/* ===== أزرار ===== */}
              <div className="flex justify-end gap-3">

                <button className="bg-green-700 text-white px-6 py-2 rounded-lg">
                  حفظ البيانات
                </button>

                <button
                  type="button"
                  onClick={() => reset()}
                  className="bg-gray-200 px-6 py-2 rounded-lg"
                >
                  إلغاء
                </button>

              </div>

            </form>

          ) : (
            /* ================= عرض البيانات بعد الحفظ ================= */
            <div className="space-y-3 text-gray-700">

              <p><FaUser className="inline text-green-600" /> {savedData?.name}</p>
              <p><FaPhone className="inline text-green-600" /> {savedData?.phone}</p>
              <p><FaEnvelope className="inline text-green-600" /> {savedData?.email}</p>
              <p><MdWork className="inline text-green-600" /> {savedData?.experience} سنوات</p>
              <p><MdSchool className="inline text-green-600" /> {savedData?.specialty}</p>
              <p><FaGraduationCap className="inline text-green-600" /> {savedData?.education}</p>

              <button
                onClick={handleEdit}
                className="bg-yellow-500 text-white px-6 py-2 rounded-lg mt-4"
              >
                تعديل
              </button>

            </div>
          )}

        </div>

      </div>
    </main>
  );
}

export default ContactTeacher;