import React, { useState, useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";

function AdminLogin() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // هنا يمكنك إضافة التحقق الفعلي من صحة بيانات الأدمن
    if (formData.email === "admin@mishkat.com" && formData.password === "admin123") {
      const adminData = {
        name: "مدير النظام",
        email: formData.email,
        accountType: "admin",
      };

      login(adminData);
      navigate("/dashboard/admin/accounts"); // التوجيه إلى داشبورد الإدارة
    } else {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="min-h-screen bg-emerald-900 flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-800 mb-4">
            <MdAdminPanelSettings className="text-5xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">دخول الإدارة</h1>
          <p className="text-gray-500">منصة مشكاة لحفظ القرآن الكريم</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <label className="block mb-2 font-bold text-gray-700">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-2xl border-2 border-gray-300 focus:border-emerald-500 outline-none"
              placeholder="admin@mishkat.com"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-bold text-gray-700">كلمة المرور</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-2xl border-2 border-gray-300 focus:border-emerald-500 outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white py-4 rounded-2xl text-lg font-bold transition mt-4"
          >
            تسجيل الدخول
          </button>
        </form>

      </div>
    </div>
  );
}

export default AdminLogin;
