import React, { useState, useContext } from 'react'
import NavBar from '../NavBar'
import { FaBookOpen, FaQuran, FaGraduationCap, FaLayerGroup } from 'react-icons/fa'
import { FaArrowLeft, FaArrowUp } from 'react-icons/fa' // ⬅️ أسهم
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider';

// 📊 بيانات المسارات (مع ربط كل مسار بباقة)
const tracksData = [
  {
    id: 1,
    title: "مسار القرآن الكريم",
    desc: "تعلم القراءة الصحيحة والتجويد مع حفظ سور القرآن الكريم بأسهل الطرق.",
    details: "يشمل هذا المسار أحكام التجويد، مخارج الحروف، وخطة حفظ منظمة بإشراف معلمين متخصصين.",
    planId: 2, // 🔗 مربوط بباقة
    icon: <FaQuran className="text-4xl text-[#00A859]" />,
    color: "border-green-200"
  },
  {
    id: 2,
    title: "مسار التفسير والتدبر",
    desc: "فهم معاني الآيات وأسباب النزول لتعيش مع كتاب الله بقلبك وعقلك.",
    details: "يتضمن شرح مبسط للتفسير، وربط الآيات بالحياة اليومية، مع تطبيقات عملية.",
    planId: 2,
    icon: <FaBookOpen className="text-4xl text-blue-500" />,
    color: "border-blue-200"
  },
  {
    id: 3,
    title: "مسار السنة النبوية",
    desc: "دراسة الأحاديث النبوية الشريفة وسيرة النبي صلى الله عليه وسلم.",
    details: "يشمل حفظ الأحاديث، شرحها، وفهم السيرة بأسلوب مبسط.",
    planId: 3,
    icon: <FaGraduationCap className="text-4xl text-orange-500" />,
    color: "border-orange-200"
  },
  {
    id: 4,
    title: "المسار التمهيدي",
    desc: "مخصص للمبتدئين لتعلم أساسيات اللغة العربية والقاعدة النورانية.",
    details: "يبدأ من الصفر حتى إتقان القراءة الصحيحة مع تدريبات عملية.",
    planId: 1,
    icon: <FaLayerGroup className="text-4xl text-purple-500" />,
    color: "border-purple-200"
  }
];

function Tracks() {

  // 📌 لتحديد أي كارت مفتوح (التفاصيل)
  const [openId, setOpenId] = useState(null)

  // 🔐 حالة تسجيل الدخول
  const { isLoggedIn } = useContext(AuthContext)

  // 🔀 للتنقل بين الصفحات
  const navigate = useNavigate()

  // 📖 فتح / غلق التفاصيل
  const toggleDetails = (id) => {
    setOpenId(openId === id ? null : id)
  }

  // 💳 الاشتراك في المسار
  const handleSubscribe = (track) => {
    if (!isLoggedIn) {
      // ❌ لو مش مسجل → يروح تسجيل
      navigate("/StudentLogin")
    } else {
      // ✅ لو مسجل → يروح للباقة المرتبطة بالمسار
      navigate('/student/courses')
    }
  }

  return (
    <div dir="rtl" className="min-h-screen bg-white">
      <NavBar />

      <div className="w-[95%] mx-auto py-16">

        {/* 🧾 العنوان */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">
            مساراتنا <span className="text-[#00A859]">التعليمية</span>
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            نقدم لك مجموعة متنوعة من المسارات العلمية المصممة بعناية لتناسب مختلف المستويات.
          </p>
        </div>

        {/* 📦 كروت المسارات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {tracksData.map((track) => (
            <div
              key={track.id}
              className={`p-8 bg-white border-b-4 ${track.color} shadow-lg rounded-2xl hover:-translate-y-2 transition-all duration-300`}
            >

              {/* 🎯 أيقونة */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl inline-block">
                {track.icon}
              </div>

              {/* 🏷 العنوان */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {track.title}
              </h3>

              {/* 📝 وصف مختصر */}
              <p className="text-gray-600 mb-4">
                {track.desc}
              </p>

              {/* 📖 التفاصيل (تظهر عند الضغط) */}
              {openId === track.id && (
                <div className="mb-4 text-gray-500 text-sm leading-relaxed">
                  {track.details}
                </div>
              )}

              {/* 🔘 الأزرار */}
              <div className="flex flex-col gap-3">

                {/* زر عرض / إخفاء التفاصيل */}
                <button
                  onClick={() => toggleDetails(track.id)}
                  className="text-[#00A859] font-bold flex items-center gap-2 justify-end"
                >
                  {openId === track.id ? (
                    <>
                      إخفاء التفاصيل <FaArrowUp />
                    </>
                  ) : (
                    <>
                      عرض التفاصيل <FaArrowLeft />
                    </>
                  )}
                </button>

                {/* زر الاشتراك يظهر فقط عند فتح التفاصيل */}
                {openId === track.id && (
                  <button
                    onClick={() => handleSubscribe(track)}
                    className="bg-[#00A859] text-white py-2 rounded-xl hover:bg-green-700 transition"
                  >
                    اشترك الآن
                  </button>
                )}

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Tracks;