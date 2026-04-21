import React, { useState, useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

function StudentLogin() {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    country: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("كلمات المرور غير متطابقة!");
      return;
    }

    const userData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      age: formData.age,
      country: formData.country,
      accountType: "student" // ✅ ثابت
    };

    login(userData);

    navigate("/"); // 👨‍🎓 داشبورد الطالب
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4" dir="rtl">

      {/* العنوان */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-emerald-900">
          تسجيل دخول الطالب
        </h1>
        <p className="text-gray-500 mt-2">
          ابدأ رحلتك في حفظ القرآن
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-lg">

        <form onSubmit={handleSubmit} className="space-y-4">

          <Input label="الاسم الكامل" name="name" onChange={handleChange} />

          <div className="grid grid-cols-2 gap-3">
            <Input label="العمر" name="age" type="number" onChange={handleChange} />

            <select
              name="country"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border bg-gray-50"
            >
              <option value="">اختر الدولة</option>
              {['مصر', 'السعودية', 'الكويت', 'اليمن'].map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input label="البريد الإلكتروني" name="email" type="email" onChange={handleChange} />
            <Input label="رقم الهاتف" name="phone" onChange={handleChange} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input label="كلمة المرور" name="password" type="password" onChange={handleChange} />
            <Input label="تأكيد كلمة المرور" name="confirmPassword" type="password" onChange={handleChange} />
          </div>

          <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-bold">
            دخول
          </button>

        </form>
      </div>
    </div>
  );
}

/* input reusable */
const Input = ({ label, ...props }) => (
  <div>
    <label className="block mb-1 font-semibold">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none"
    />
  </div>
);

export default StudentLogin;