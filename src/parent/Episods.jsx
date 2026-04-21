import React, { useState } from "react";

function Episods() {
  const [days, setDays] = useState([
    { name: "الأحد", date: 12 },
    { name: "الإثنين", date: 13 },
    { name: "الثلاثاء", date: 14 },
    { name: "الأربعاء", date: 15 },
    { name: "الخميس", date: 16 },
    { name: "الجمعة", date: 17 },
    { name: "السبت", date: 18 },
  ]);

  const [episodes] = useState([
    {
      day: "الأحد",
      type: "live",
      title: "حلقة الحفظ",
      student: "محمد أحمد",
      time: "04:30 م",
    },
    {
      day: "الأحد",
      type: "recorded",
      title: "تجويد متقدم",
      student: "سارة أحمد",
      time: "05:00 م",
    },
    {
      day: "الثلاثاء",
      type: "live",
      title: "حلقة التثبيت",
      student: "محمد أحمد",
      time: "10:00 ص",
    },
    {
      day: "الخميس",
      type: "recorded",
      title: "قصص الأنبياء",
      student: "محمد أحمد",
      time: "05:30 م",
    },
    {
      day: "الجمعة",
      type: "live",
      title: "القرآن الكريم",
      student: "محمد أحمد",
      time: "04:30 م",
    },
  ]);

  const getEpisodesByDay = (dayName) =>
    episodes.filter((ep) => ep.day === dayName);

  return (
    <main className="flex-1 px-10 py-6" dir="rtl">

      {/* HEADER */}
      <div className="bg-white rounded-xl px-6 py-4 flex justify-between items-center mb-6 shadow-sm">
        <h1 className="text-lg font-bold text-green-700">
          جدول مواعيد الحلقات
        </h1>
      </div>

      {/* TITLE */}
      <div className="text-center mb-6 text-right">
        <h2 className="text-2xl font-bold text-gray-800">
          جدول الأسبوع الحالي
        </h2>
      </div>

      {/* DAYS */}
      <div className="grid grid-cols-7 gap-3 mb-6 text-center">
        {days.map((day, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-xl">
            {day.name}
            <br />
            <b className="text-green-700">{day.date}</b>
          </div>
        ))}
      </div>

      {/* EPISODES */}
      <div className="grid grid-cols-7 gap-3">

        {days.map((day, index) => {
          const dayEpisodes = getEpisodesByDay(day.name);

          return (
            <div key={index} className="flex flex-col gap-3">

              {dayEpisodes.length === 0 ? (
                <div className="flex flex-col justify-center items-center border-2 border-dashed rounded-2xl text-gray-400 p-4 h-full">
                  لا توجد حلقات
                </div>
              ) : (
                dayEpisodes.map((ep, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-2xl shadow text-right"
                  >
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        ep.type === "live"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {ep.type === "live" ? "مباشر" : "مسجلة"}
                    </span>

                    <h3 className="mt-3 font-bold">{ep.title}</h3>
                    <p className="text-sm text-gray-500">
                      الابن: {ep.student}
                    </p>
                    <p className="text-green-700 mt-2 text-sm">
                      {ep.time}
                    </p>
                  </div>
                ))
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Episods;