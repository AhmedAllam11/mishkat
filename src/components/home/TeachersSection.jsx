import React from 'react';
import { FaStar } from 'react-icons/fa';

function TeachersSection() {
  const teachers = [
    {
      id: 1,
      name: "الشيخ محمد سامي",
      specialty: "معلم قراءات وتجويد",
      description: "مجاز بالقراءات العشر الصغرى والكبرى بخبرة تزيد عن 10 سنوات.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "الشيخ أحمد محمود",
      specialty: "معلم حفظ وتفسير",
      description: "حاصل على إجازة في الحفظ وتفسير القرآن الكريم بأسلوب مبسط.",
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      id: 3,
      name: "المعلمة هدى حسين",
      specialty: "معلمة تجويد وعلوم شرعية",
      description: "متخصصة في تعليم التجويد للنساء والأطفال بخبرة متميزة.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">نخبة من المعلمين المتخصصين</h2>
        <p className="text-gray-500 mb-12">معلمون مجازون ذوي كفاءة عالية لضمان أفضل تجربة تعليمية</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <img src={teacher.image} alt={teacher.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-50" />
              <h3 className="text-xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
              <p className="text-emerald-600 text-sm font-semibold mb-3">{teacher.specialty}</p>
              
              <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {teacher.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeachersSection;
