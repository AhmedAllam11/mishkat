import React, { useState, useContext } from 'react';
import { AuthContext } from '../components/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { MdSchool, MdPerson, MdPeopleAlt } from 'react-icons/md';

function AllContact() {

  // 🧠 تسجيل المستخدم
  const { login } = useContext(AuthContext);

  // 🔀 التنقل
  const navigate = useNavigate();

  // 👤 نوع الحساب
  const [accountType, setAccountType] = useState('student');

  // 📦 بيانات الفورم
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  // ❗ الأخطاء
  const [errors, setErrors] = useState({});

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // 🧹 إزالة الخطأ أثناء الكتابة
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  // ================= VALIDATION =================
  const validate = () => {
    let newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "الاسم لازم يكون 3 حروف على الأقل";
    }

    if (!formData.email.includes("@")) {
  newErrors.email = "الإيميل غير صحيح ";
}

    // if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    //   newErrors.email = "الإيميل غير صحيح";
    // }

    if (!formData.gender) {
      newErrors.gender = "اختار النوع";
    }

    if (formData.password.length < 6) {
      newErrors.password = "كلمة المرور لازم تكون 6 حروف على الأقل";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمات المرور غير متطابقة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // 📦 البيانات المرسلة للباك (مهم جدًا 👇)
    const userData = {
      name: formData.name,
      email: formData.email,
      gender: formData.gender,
      password: formData.password,
      accountType: accountType
    };

    console.log("📤 إرسال للباك:", userData);

    // 🔐 تسجيل (مؤقت frontend)
    login(userData);

    // 🔀 تحويل الصفحة
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4" dir="rtl">

      {/* 🧾 العنوان */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-emerald-900">
          منصة حفظ القرآن الكريم
        </h1>
        <p className="text-gray-500 mt-2">
          إنشاء حساب جديد
        </p>
      </div>

      {/* 📦 الكارد */}
      <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-lg">

        {/* 🔘 نوع الحساب */}
        <h3 className="font-bold mb-4">نوع الحساب</h3>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <AccountBtn active={accountType === 'student'} onClick={() => setAccountType('student')} icon={<MdSchool />} label="طالب" />
          <AccountBtn active={accountType === 'teacher'} onClick={() => setAccountType('teacher')} icon={<MdPerson />} label="معلم" />
          <AccountBtn active={accountType === 'parent'} onClick={() => setAccountType('parent')} icon={<MdPeopleAlt />} label="ولي أمر" />
        </div>

        {/* 📄 الفورم */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* 👤 الاسم */}
          <Input
            label="الاسم "
            name="name"
            onChange={handleChange}
            error={errors.name}
          />

          {/* 📧 + ⚧️ */}
          <div className="grid grid-cols-2 gap-4">

            {/* 📧 الإيميل */}
            <Input
              label="البريد الإلكتروني"
              name="email"
              type="email"
              onChange={handleChange}
              error={errors.email}
            />

            {/* ⚧️ النوع */}
            <div>
              <label className="block mb-1 font-semibold">النوع</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 ${
                  errors.gender ? "border-red-500" : ""
                }`}
              >
                <option value="">-- اختر النوع --</option>
                <option value="male">ذكر</option>
                <option value="female">أنثى</option>
              </select>

              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.gender}
                </p>
              )}
            </div>

          </div>

          {/* 🔐 الباسورد */}
          <div className="grid grid-cols-2 gap-3">

            <Input
              label="كلمة المرور"
              name="password"
              type="password"
              onChange={handleChange}
              error={errors.password}
            />

            <Input
              label="تأكيد كلمة المرور"
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              error={errors.confirmPassword}
            />

          </div>

          {/* 🚀 زر */}
          <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-bold">
            إنشاء الحساب
          </button>

        </form>
      </div>
    </div>
  );
}

// ================= ACCOUNT BUTTON =================
const AccountBtn = ({ active, onClick, icon, label }) => (
  <button
    type="button"
    onClick={onClick}
    className={`p-4 rounded-2xl border text-center ${
      active ? 'bg-emerald-50 border-emerald-600 text-emerald-800' : ''
    }`}
  >
    <div className="text-2xl mb-2">{icon}</div>
    <div>{label}</div>
  </button>
);

// ================= INPUT =================
const Input = ({ label, error, ...props }) => (
  <div>
    <label className="block mb-1 font-semibold">{label}</label>

    <input
      {...props}
      className={`w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none ${
        error ? "border-red-500" : ""
      }`}
    />

    {error && (
      <p className="text-red-500 text-sm mt-1">
        {error}
      </p>
    )}
  </div>
);

export default AllContact;