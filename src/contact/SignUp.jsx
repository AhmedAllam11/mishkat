import React, { useState, useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { MdSchool, MdPerson, MdPeopleAlt } from "react-icons/md";

function SignUp() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",

    // بيانات الطالب
    nationalId: "",
    gender: "",
    age: "",
    track: "حفظ",

    // بيانات المعلم
    experience: "",
    specialty: "",
    education: "",
    cvFileName: "",
  });

  const [errors, setErrors] = useState({});

  // تحديث البيانات
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // التحقق من صحة البيانات
  const validateStep2 = () => {
    let newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "الاسم يجب أن يكون 3 أحرف على الأقل";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.phone) {
      newErrors.phone = "رقم الهاتف مطلوب";
    }

    if (formData.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمتا المرور غير متطابقتين";
    }

    if (accountType === "student") {
      if (!formData.nationalId) newErrors.nationalId = "رقم الهوية مطلوب";
      if (!formData.age) newErrors.age = "العمر مطلوب";
      if (!formData.gender) newErrors.gender = "النوع مطلوب";
    }

    if (accountType === "teacher") {
      if (!formData.experience) newErrors.experience = "سنوات الخبرة مطلوبة";
      if (!formData.specialty) newErrors.specialty = "التخصص مطلوب";
      if (!formData.education) newErrors.education = "المؤهل التعليمي مطلوب";
    }

    if (accountType === "parent") {
      if (!formData.age) newErrors.age = "العمر مطلوب";
      if (!formData.gender) newErrors.gender = "النوع مطلوب";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateStep2()) return;

    const userData = {
      ...formData,
      accountType,
    };

    console.log("User Data:", userData);
    login(userData);
    navigate("/dashboard");
  };

  const roleNameAr =
    accountType === "student"
      ? "طالب"
      : accountType === "teacher"
      ? "معلم"
      : "ولي أمر";

  return (
    <div
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
      dir="rtl"
    >
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8">
        {/* ================= الخطوة الأولى ================= */}
        {step === 1 && (
          <>
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-gray-800">
                اختيار نوع الحساب
              </h1>
            </div>

            <h3 className="text-lg font-bold mb-4 text-gray-700">
              نوع الحساب
            </h3>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <AccountBtn
                active={accountType === "student"}
                onClick={() => setAccountType("student")}
                icon={<MdSchool />}
                label="طالب"
              />

              <AccountBtn
                active={accountType === "teacher"}
                onClick={() => setAccountType("teacher")}
                icon={<MdPerson />}
                label="معلم"
              />

              <AccountBtn
                active={accountType === "parent"}
                onClick={() => setAccountType("parent")}
                icon={<MdPeopleAlt />}
                label="ولي أمر"
              />
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex items-start gap-4 mb-8">
              <div className="text-emerald-700 text-3xl mt-1">
                {accountType === "student" ? (
                  <MdSchool />
                ) : accountType === "teacher" ? (
                  <MdPerson />
                ) : (
                  <MdPeopleAlt />
                )}
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">
                  سيتم إنشاء حساب {roleNameAr}
                </h4>

                <p className="text-sm text-gray-500">
                  يرجى اختيار نوع الحساب للمتابعة وإدخال البيانات المطلوبة.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-2xl text-lg font-bold transition"
            >
              التالي
            </button>

            {/* زر الإدارة يظهر هنا فقط */}
            <div className="mt-8 pt-6 border-t text-center">
              <button
                type="button"
                onClick={() => navigate("/admin/login")}
                className="text-emerald-700 font-bold hover:underline text-sm"
              >
                دخول الإدارة
              </button>
            </div>
          </>
        )}

        {/* ================= الخطوة الثانية ================= */}
        {step === 2 && (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                بيانات حساب {roleNameAr}
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="الاسم الكامل"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />

              <Input
                label="البريد الإلكتروني"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              <Input
                label="رقم الهاتف"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />

              {accountType === "student" && (
                <>
                  <Input
                    label="رقم الهوية"
                    name="nationalId"
                    value={formData.nationalId}
                    onChange={handleChange}
                    error={errors.nationalId}
                  />

                  <Input
                    label="العمر"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    error={errors.age}
                  />

                  <Select
                    label="النوع"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    error={errors.gender}
                    options={[
                      { value: "ذكر", label: "ذكر" },
                      { value: "أنثى", label: "أنثى" },
                    ]}
                  />

                  <Select
                    label="المسار"
                    name="track"
                    value={formData.track}
                    onChange={handleChange}
                    options={[
                      { value: "حفظ", label: "حفظ" },
                      { value: "تفسير", label: "تفسير" },
                      { value: "تجويد", label: "تجويد" },
                    ]}
                  />
                </>
              )}

              {accountType === "teacher" && (
                <>
                  <Input
                    label="سنوات الخبرة"
                    name="experience"
                    type="number"
                    value={formData.experience}
                    onChange={handleChange}
                    error={errors.experience}
                  />

                  <Input
                    label="التخصص"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    error={errors.specialty}
                  />

                  <Input
                    label="المؤهل التعليمي"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    error={errors.education}
                  />

                  <div className="col-span-2">
                    <label className="block mb-2 font-bold text-gray-700 text-sm">
                      رفع السيرة الذاتية (CV)
                    </label>

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          cvFileName: e.target.files[0]?.name || "",
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border outline-none bg-gray-50 border-gray-200 focus:border-emerald-500"
                    />
                  </div>
                </>
              )}

              {accountType === "parent" && (
                <>
                  <Input
                    label="العمر"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    error={errors.age}
                  />

                  <Select
                    label="النوع"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    error={errors.gender}
                    options={[
                      { value: "ذكر", label: "ذكر" },
                      { value: "أنثى", label: "أنثى" },
                    ]}
                  />
                </>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <Input
                label="كلمة المرور"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />

              <Input
                label="تأكيد كلمة المرور"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-200 hover:bg-gray-300 py-4 rounded-2xl font-bold text-gray-700 transition"
              >
                رجوع
              </button>

              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-2xl font-bold transition"
              >
                إنشاء الحساب
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

/* ================= زر نوع الحساب ================= */
const AccountBtn = ({ active, onClick, icon, label }) => (
  <button
    type="button"
    onClick={onClick}
    className={`p-6 rounded-2xl border transition-all ${
      active
        ? "bg-emerald-50 border-emerald-600 text-emerald-800"
        : "bg-white border-gray-200 text-gray-500 hover:border-emerald-300"
    }`}
  >
    <div
      className={`text-4xl flex justify-center mb-3 ${
        active ? "text-emerald-700" : "text-gray-400"
      }`}
    >
      {icon}
    </div>

    <div className="font-bold">{label}</div>
  </button>
);

/* ================= Input Component ================= */
const Input = ({ label, error, ...props }) => (
  <div>
    <label className="block mb-2 font-bold text-gray-700 text-sm">
      {label}
    </label>

    <input
      {...props}
      className={`w-full px-4 py-3 rounded-xl border outline-none bg-gray-50 ${
        error
          ? "border-red-500"
          : "border-gray-200 focus:border-emerald-500"
      }`}
    />

    {error && (
      <p className="text-red-500 mt-1 text-xs">{error}</p>
    )}
  </div>
);

/* ================= Select Component ================= */
const Select = ({ label, error, options, ...props }) => (
  <div>
    <label className="block mb-2 font-bold text-gray-700 text-sm">
      {label}
    </label>

    <select
      {...props}
      className={`w-full px-4 py-3 rounded-xl border outline-none bg-gray-50 ${
        error
          ? "border-red-500"
          : "border-gray-200 focus:border-emerald-500"
      }`}
    >
      <option value="">اختر</option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>

    {error && (
      <p className="text-red-500 mt-1 text-xs">{error}</p>
    )}
  </div>
);

export default SignUp;