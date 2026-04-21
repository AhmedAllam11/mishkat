import React, { useEffect, useState, useContext } from "react"
import NavBar from "../NavBar"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../AuthProvider"

function Pricing() {

  // 📦 state للباقات
  const [plans, setPlans] = useState([])

  // 🔐 حالة تسجيل الدخول
  const { isLoggedIn } = useContext(AuthContext)

  // 🔀 التنقل بين الصفحات
  const navigate = useNavigate()

  // 🎯 تحميل الباقات من API
  useEffect(() => {
    axios.get("https://api.example.com/plans")
      .then((res) => {
        setPlans(res.data)
      })
      .catch(() => {
        // 📌 بيانات مؤقتة
        setPlans([
          {
            id: 1,
            name: "الباقة الأساسية",
            price: "150",
            duration: "شهري",
            features: ["حفظ قرآن", "متابعة أسبوعية", "اختبارات بسيطة"],
            popular: false
          },
          {
            id: 2,
            name: "الباقة المتقدمة",
            price: "250",
            duration: "شهري",
            features: ["حفظ + تفسير", "متابعة يومية", "اختبارات دورية", "تقارير أداء"],
            popular: true
          },
          {
            id: 3,
            name: "الباقة الاحترافية",
            price: "400",
            duration: "شهري",
            features: ["برنامج كامل", "مدرس خاص", "تقييم شامل", "شهادة معتمدة"],
            popular: false
          }
        ])
      })
  }, [])

  // 🚀 عند الضغط على اشترك
  const handleSubscribe = (plan) => {
    if (!isLoggedIn) {
      navigate("/StudentLogin") // 🔐 لازم يسجل الأول
    } else {
      navigate('/student/courses') // 💳 صفحة الدفع
    }
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <NavBar />

      {/* 🧾 العنوان */}
      <div className="text-center mt-16 mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          اختر الباقة المناسبة لك
        </h1>
        <p className="text-gray-500 text-lg">
          خطط مرنة تناسب جميع المستويات
        </p>
      </div>

      {/* 📦 الباقات */}
      <div className="w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">

        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white rounded-3xl p-8 shadow-md relative border 
              ${plan.popular ? "border-[#00A859] scale-105" : "border-gray-200"}`}
          >

            {/* ⭐ الأكثر اختيارًا */}
            {plan.popular && (
              <span className="absolute top-0 right-0 bg-[#00A859] text-white text-xs px-4 py-1 rounded-bl-2xl">
                الأكثر اختيارًا
              </span>
            )}

            {/* 🏷 اسم الباقة */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {plan.name}
            </h2>

            {/* 💰 السعر */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#00A859]">
                {plan.price} ج
              </span>
              <span className="text-gray-500"> / {plan.duration}</span>
            </div>

            {/* 📋 المميزات */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#00A859]">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* 🔘 زر الاشتراك */}
            <button
              onClick={() => handleSubscribe(plan)}
              className={`w-full py-3 rounded-xl font-semibold transition 
                ${plan.popular 
                  ? "bg-[#00A859] text-white hover:bg-green-700" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              اشترك الآن
            </button>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Pricing