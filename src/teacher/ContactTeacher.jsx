import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../components/AuthProvider";

import { FaUser, FaPhone, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";
import { FiUpload } from "react-icons/fi";

function ContactTeacher() {
  const { user, login } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [cvName, setCvName] = useState("");

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    const updatedUser = { ...user, ...data };
    login(updatedUser);
    setIsEditing(false);
  };

  const handleEdit = () => {
    reset(user);
    setIsEditing(true);
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8 text-right flex justify-between items-end border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            السيرة الذاتية للمعلم (CV)
          </h1>
          <p className="text-gray-500 text-sm">
            يمكنك استعراض وتحديث بيانات السيرة الذاتية الخاصة بك هنا.
          </p>
        </div>
        {!isEditing && (
          <button
            onClick={handleEdit}
            className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-6 py-2 rounded-xl font-bold hover:bg-emerald-100 transition"
          >
            تعديل السيرة الذاتية
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* الجانب الأيمن (الصورة + CV) */}
        <div className="space-y-6 lg:order-last">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-32 h-32 mx-auto bg-emerald-50 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
              {imagePreview ? (
                <img src={imagePreview} className="w-full h-full object-cover" alt="teacher" />
              ) : (
                <FaUser className="text-5xl text-emerald-200" />
              )}
            </div>

            {isEditing && (
              <label className="flex items-center justify-center gap-2 mt-4 text-sm cursor-pointer text-emerald-600 bg-emerald-50 py-2 rounded-lg hover:bg-emerald-100 transition">
                <FiUpload />
                <span>رفع صورة شخصية</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setImagePreview(URL.createObjectURL(e.target.files[0]));
                    }
                  }}
                />
              </label>
            )}

            <p className="mt-4 font-bold text-xl text-gray-800">
              {user?.name || "اسم المعلم"}
            </p>
            <p className="text-emerald-600 text-sm font-semibold mt-1">
              {user?.specialty || "التخصص"}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-right">
            <p className="font-bold text-gray-800 mb-4 flex items-center gap-2 justify-end">
              <MdSchool className="text-emerald-600 text-xl" />
              مرفق السيرة الذاتية
            </p>

            <div className={`border-2 border-dashed p-6 rounded-xl text-center ${isEditing ? 'bg-gray-50 border-gray-300' : 'bg-white border-gray-100'}`}>
              {isEditing ? (
                <>
                  <label className="cursor-pointer text-emerald-600 font-bold text-sm block mb-2 hover:underline">
                    اختر ملفاً لرفعه
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => setCvName(e.target.files[0]?.name)}
                    />
                  </label>
                  <p className="mt-2 text-sm text-gray-600">
                    {cvName || "لم يتم رفع ملف جديد"}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">PDF - أقصى مساحة 5MB</p>
                </>
              ) : (
                <div>
                  <div className="text-4xl text-gray-300 flex justify-center mb-3"><FiUpload /></div>
                  <p className="text-gray-500 font-bold text-sm">{cvName || "لا يوجد ملف مرفق حالياً"}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* الجانب الأيسر (الفورم أو العرض) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-right">

          {isEditing ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">المعلومات الشخصية والمهنية</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-500 mb-1"><FaUser /> الاسم الكامل</label>
                  <input {...register("name")} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-gray-500 mb-1"><FaPhone /> الهاتف</label>
                  <input {...register("phone")} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-emerald-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-500 mb-1"><FaEnvelope /> البريد الإلكتروني</label>
                  <input {...register("email")} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-gray-500 mb-1"><MdWork /> سنوات الخبرة</label>
                  <input type="number" {...register("experience")} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-emerald-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-500 mb-1"><MdSchool /> التخصص الأكاديمي</label>
                  <input {...register("specialty")} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-gray-500 mb-1"><FaGraduationCap /> المؤهل التعليمي</label>
                  <input {...register("education")} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-emerald-500" />
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t mt-6">
                <button type="submit" className="bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-800 transition">
                  حفظ السيرة الذاتية
                </button>
                <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-300 transition">
                  إلغاء
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">تفاصيل السيرة الذاتية</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-400 mb-2">الاسم الكامل</p>
                  <div className="flex items-center gap-3 font-bold text-gray-800">
                    <FaUser className="text-emerald-600 text-lg" />
                    <span>{user?.name || "غير محدد"}</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-400 mb-2">رقم الهاتف</p>
                  <div className="flex items-center gap-3 font-bold text-gray-800">
                    <FaPhone className="text-emerald-600 text-lg" />
                    <span dir="ltr">{user?.phone || "غير محدد"}</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-400 mb-2">البريد الإلكتروني</p>
                  <div className="flex items-center gap-3 font-bold text-gray-800">
                    <FaEnvelope className="text-emerald-600 text-lg" />
                    <span>{user?.email || "غير محدد"}</span>
                  </div>
                </div>

                <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                  <p className="text-xs text-emerald-600 mb-2">سنوات الخبرة</p>
                  <div className="flex items-center gap-3 font-bold text-emerald-900">
                    <MdWork className="text-emerald-600 text-lg" />
                    <span>{user?.experience ? `${user.experience} سنوات` : "غير محدد"}</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-400 mb-2">التخصص الأكاديمي</p>
                  <div className="flex items-center gap-3 font-bold text-gray-800">
                    <MdSchool className="text-emerald-600 text-lg" />
                    <span>{user?.specialty || "غير محدد"}</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-400 mb-2">المؤهل التعليمي</p>
                  <div className="flex items-center gap-3 font-bold text-gray-800">
                    <FaGraduationCap className="text-emerald-600 text-lg" />
                    <span>{user?.education || "غير محدد"}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default ContactTeacher;