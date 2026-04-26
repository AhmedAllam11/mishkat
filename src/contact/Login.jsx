import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { MdEmail, MdLock } from "react-icons/md";
import Logo from "../components/Logo";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // 📦 بيانات الفورم (الإيميل + الباسورد)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ❗ تخزين الأخطاء
  const [errors, setErrors] = useState({});

  // ================= تحديث الحقول =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // 🧹 مسح الخطأ أثناء الكتابة
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // ================= التحقق البسيط =================
  const validate = () => {
    let newErrors = {};

    if (!formData.email.includes("@")) {
      newErrors.email = "الإيميل غير صحيح";
    }

    if (formData.password.length < 6) {
      newErrors.password = "كلمة المرور قصيرة جدًا";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ================= عند الضغط على تسجيل الدخول =================
  const handleSubmit = (e) => {
    e.preventDefault();

    // ❗ لو فيه أخطاء وقف
    if (!validate()) return;

    // تحديد نوع الحساب مبدئياً بناءً على الإيميل (لغرض التجربة لحين وجود باك إند)
    let accountType = "student"; // الافتراضي
    if (formData.email.includes("teacher")) accountType = "teacher";
    if (formData.email.includes("parent")) accountType = "parent";

    // 📤 البيانات الجاهزة للإرسال للباك
    const userData = {
      name: "مستخدم تجريبي",
      email: formData.email,
      accountType: accountType,
    };

    console.log("📤 Data sent to backend:", userData);
    
    // تسجيل الدخول في الـ Context
    login(userData);

    // 🔀 نروح للداشبورد مباشرة
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" dir="rtl">

      {/* 🧾 الكارد الرئيسي */}
      <div className="bg-white shadow-lg rounded-3xl p-6 w-full max-w-md">

        {/* 🔰 العنوان */}
        <div className="text-center mb-6 flex flex-col items-center">
          <Logo className="mb-2" />
          <p className="text-gray-500 mt-2">
            مرحبًا بعودتك
          </p>
        </div>

        {/* 📄 الفورم */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* 📧 الإيميل */}
          <div>
            <label className="font-semibold mb-1 block">
              البريد الإلكتروني
            </label>

            <div className="relative">
              <MdEmail className="absolute top-3 right-3 text-gray-400 text-xl" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className={`w-full pr-10 pl-4 py-3 rounded-xl bg-gray-50 border outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
            </div>

            {/* ❗ رسالة الخطأ */}
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* 🔒 كلمة المرور */}
          <div>
            <label className="font-semibold mb-1 block">
              كلمة المرور
            </label>

            <div className="relative">
              <MdLock className="absolute top-3 right-3 text-gray-400 text-xl" />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full pr-10 pl-4 py-3 rounded-xl bg-gray-50 border outline-none ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
            </div>

            {/* ❗ رسالة الخطأ */}
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* 🚀 زر تسجيل الدخول */}
          <button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-bold"
          >
            تسجيل الدخول
          </button>

          {/* 🔗 روابط (UI فقط بدون وظيفة فعلية للباك الآن) */}
          <div className="text-center text-sm text-gray-500 space-y-2 mt-3">

            <p className="cursor-pointer hover:text-emerald-700">
              هل نسيت كلمة المرور؟
            </p>

            <p>
              ليس لديك حساب؟{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-emerald-700 font-bold cursor-pointer"
              >
                إنشاء حساب
              </span>
            </p>

          </div>

        </form>

      </div>
    </div>
  );
}

export default Login;