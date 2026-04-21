import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Icons
import { FiBell, FiSettings } from "react-icons/fi";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";
import { MdFemale, MdMale } from "react-icons/md";

function ProfileParent() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [savedData, setSavedData] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  // حفظ البيانات (جاهز للباك إند)
  const onSubmit = async (data) => {
    try {
      // 🔥 هنا تبعت للـ backend
      // await fetch("/api/profile", { method: "POST", body: JSON.stringify(data) })

      setSavedData(data);
      setIsEditing(false);
      console.log("Saved:", data);
    } catch (err) {
      console.error(err);
    }
  };

  // تعديل البيانات
  const handleEdit = () => {
    reset(savedData);
    setIsEditing(true);
  };

  return (
    <main className="flex-1 px-10 py-6" >

      {/* HEADER */}
      <div className="bg-white rounded-xl px-6 py-4 flex justify-between items-center mb-6 shadow-sm">
        <div className="flex gap-5 text-gray-500 text-xl">
          <FiBell />
          <FiSettings />
        </div>
        <h1 className="text-lg font-bold text-green-700">
          تعديل الملف الشخصي
        </h1>
      </div>

      {/* FORM */}
      {isEditing && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl p-8 shadow-md space-y-6 text-right"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            تحديث بيانات ولي الأمر
          </h2>

          {/* الاسم + الهاتف */}
          <div className="grid grid-cols-2 gap-6">

            <div>
              <label className="flex items-center gap-2 text-gray-500">
                <FaUser /> الاسم
              </label>

              <input
                {...register("name", { required: "الاسم مطلوب" })}
                className="w-full bg-gray-100 p-3 rounded-lg mt-1"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-500">
                <FaPhone /> رقم الهاتف
              </label>

              <input
                {...register("phone", {
                  required: "رقم الهاتف مطلوب",
                  minLength: {
                    value: 11,
                    message: "رقم الهاتف لازم 11 رقم",
                  },
                })}
                className="w-full bg-gray-100 p-3 rounded-lg mt-1"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* الإيميل + العمر */}
          <div className="grid grid-cols-2 gap-6">

            <div>
              <label className="flex items-center gap-2 text-gray-500">
                <FaEnvelope /> الإيميل
              </label>

              <input
                type="email"
                {...register("email", {
                  required: "الإيميل مطلوب",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "إيميل غير صحيح",
                  },
                })}
                className="w-full bg-gray-100 p-3 rounded-lg mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="text-gray-500">العمر</label>

              <input
                type="number"
                {...register("age", {
                  required: "العمر مطلوب",
                  min: { value: 10, message: "العمر صغير جدًا" },
                })}
                className="w-full bg-gray-100 p-3 rounded-lg mt-1"
              />
              {errors.age && (
                <p className="text-red-500 text-sm">{errors.age.message}</p>
              )}
            </div>
          </div>

          {/* النوع */}
          <div>
            <label className="text-gray-500">النوع</label>

            <select
              {...register("gender", { required: "اختار النوع" })}
              className="w-full bg-gray-100 p-3 rounded-lg mt-1"
            >
              <option value="ذكر">ذكر</option>
              <option value="أنثى">أنثى</option>
            </select>

            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>

          {/* buttons */}
          <div className="flex gap-4">
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg">
              حفظ
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
      )}

      {/* VIEW */}
      {!isEditing && savedData && (
        <div className="bg-white p-8 rounded-2xl shadow-md space-y-5 text-right">

          <h2 className="text-xl font-bold text-green-700">
            بياناتك
          </h2>

          <div className="space-y-4 text-gray-700">

            <div className="flex items-center gap-3">
              <FaUser className="text-green-600" />
              {savedData.name}
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-green-600" />
              {savedData.phone}
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-600" />
              {savedData.email}
            </div>

            <div className="flex items-center gap-3">
              {savedData.gender === "ذكر" ? (
                <MdMale className="text-green-600" />
              ) : (
                <MdFemale className="text-green-600" />
              )}
              {savedData.gender}
            </div>

            <div>
              العمر: {savedData.age}
            </div>
          </div>

          <button
            onClick={handleEdit}
            className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-lg"
          >
            تعديل
          </button>
        </div>
      )}
    </main>
  );
}

export default ProfileParent;