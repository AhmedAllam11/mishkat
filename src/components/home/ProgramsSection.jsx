import React from 'react';
import { FaBookOpen, FaMicrophoneAlt, FaHeart } from 'react-icons/fa';

function ProgramsSection() {
  const programs = [
    {
      id: 1,
      title: "التفسير والتدبر",
      description: "فهم معاني القرآن الكريم وتدبر آياته بأسلوب مبسط وعميق.",
      icon: <FaBookOpen className="text-3xl text-emerald-600" />,
    },
    {
      id: 2,
      title: "التجويد والإتقان",
      description: "تعلم أحكام التجويد ومخارج الحروف لقراءة صحيحة خالية من الأخطاء.",
      icon: <FaMicrophoneAlt className="text-3xl text-emerald-600" />,
    },
    {
      id: 3,
      title: "حفظ ومتابعة",
      description: "خطة متابعة مستمرة للحفظ والمراجعة مع معلمين متخصصين.",
      icon: <FaHeart className="text-3xl text-emerald-600" />,
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">برامجنا التعليمية</h2>
        <p className="text-gray-500 mb-12">اختر البرنامج الذي يناسبك وابدأ رحلتك القرآنية</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
