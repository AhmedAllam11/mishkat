import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeadset, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
// 👆 مهم: علشان نروح لصفحة الاختبار

function Calendar() {

  // ================= STATE =================
  const [events, setEvents] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ================= FETCH DATA FROM BACKEND =================
  useEffect(() => {
    fetchCalendar();
  }, []);

  const fetchCalendar = async () => {
    try {
      setLoading(true);

      // 🔥 الباك اند بيرجع كل الأحداث
      const res = await axios.get("http://localhost:5000/api/calendar");

      setEvents(res.data.events || []);
      setStats(res.data.stats || null);

    } catch (err) {
      // ================= FALLBACK DATA =================
      // لو الباك وقع أو مش شغال
      setEvents([
        {
          id: 1,
          day: 5,
          title: "حلقة الحفظ المكثف",
          time: "04:00",
          teacher: "عبدالله الجهني",
        },
        {
          id: 2,
          idExam: 22, // 👈 مهم: ID الاختبار من الباك
          day: 5,
          title: "اختبار تجويد",
          time: "18:30",
          teacher: "منصة الاختبارات",
        },
        {
          id: 3,
          day: 5,
          title: "قراءة حرة",
          time: "21:00",
          teacher: "ذاتي",
        },
      ]);

      setStats({
        completed: 18,
        total: 24,
        examsLeft: 4,
        hours: 12,
      });

    } finally {
      setLoading(false);
    }
  };

  // ================= TIME HELPERS =================
  const getTimeValue = (time) => {
    // "18:30" => 1830
    return parseInt(time.replace(":", ""));
  };

  const now = new Date();
  const currentTime = now.getHours() * 100 + now.getMinutes();

  const isDone = (event) => {
    return getTimeValue(event.time) < currentTime;
  };

  // ================= CLICK ON EVENT =================
  const handleEventClick = (event) => {

    // 🎯 لو الحدث اختبار
    if (event.title.includes("اختبار")) {

      // 🔥 بنروح لصفحة الاختبار + ID
      navigate(`/exam/${event.idExam || event.id}`);
    }
  };

  // ================= SUPPORT =================
  const handleSupport = () => {
    window.open(
      "https://wa.me/201234567890?text=أحتاج دعم فني",
      "_blank"
    );
  };

  return (
    <main className="flex-1 flex flex-col p-6">

      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-xl px-6 py-4 mb-6 flex justify-between items-center">
        <h2 className="text-green-800 font-bold text-lg">
          مشكاة
        </h2>

        <div className="flex items-center gap-4 text-gray-400">
          <i className="fa-solid fa-heart" />
          <i className="fa-solid fa-bell" />
          <i className="fa-solid fa-circle-question" />
        </div>
      </div>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="grid grid-cols-4 gap-6">

        {/* ================= LEFT TIMELINE ================= */}
        <div className="space-y-4">

          <div className="bg-white rounded-xl p-4 text-right">

            <div className="flex justify-between mb-4">
              <span className="text-green-700 font-bold">
                5 سبتمبر
              </span>
              <h3 className="font-bold">جدول اليوم</h3>
            </div>

            {loading && (
              <p className="text-gray-400 text-sm">
                جاري التحميل...
              </p>
            )}

            <div className="space-y-6">

              {events.map((event, i) => (

                <div key={event.id} className="flex flex-row-reverse gap-3">

                  {/* DOT */}
                  <div className="flex flex-col items-center">
                    <span className="w-3 h-3 rounded-full bg-green-700" />
                    <span className="w-[2px] h-full bg-gray-300" />
                  </div>

                  {/* EVENT CARD */}
                  <div className="flex-1">

                    <p className="text-xs text-gray-500 mb-1">
                      {event.time}
                    </p>

                    {/* 👇 CLICKABLE CARD */}
                    <div
                      onClick={() => handleEventClick(event)}
                      className={`p-3 rounded-lg border cursor-pointer transition
                        ${
                          isDone(event)
                            ? "bg-gray-200 opacity-60"
                            : "bg-gray-50 hover:bg-green-50"
                        }`}
                    >
                      <h4 className="font-semibold text-sm">
                        {event.title}
                      </h4>

                      <p className="text-xs text-gray-500 mt-1">
                        {event.teacher}
                      </p>

                      {/* STATUS */}
                      {isDone(event) ? (
                        <span className="text-xs text-green-700 font-bold">
                          تم الانتهاء ✔
                        </span>
                      ) : (
                        <span className="text-xs text-orange-500">
                          لم ينتهِ بعد
                        </span>
                      )}
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* ================= STATS ================= */}
          <div className="bg-green-800 text-white rounded-xl p-4 text-right">

            <h3 className="font-bold mb-3">
              إحصائيات الشهر
            </h3>

            {stats && (
              <>
                <p>الحلقات: {stats.completed}/{stats.total}</p>
                <p>اختبارات: {stats.examsLeft}</p>
                <p>ساعات: {stats.hours}</p>
              </>
            )}
          </div>

          {/* ================= SUPPORT ================= */}
          <div className="bg-green-50 border rounded-xl p-4 text-right">

            <div className="flex justify-end gap-2 items-center">
              <FaHeadset className="text-green-700" />
              <h3 className="font-bold text-green-700">
                الدعم الفني
              </h3>
            </div>

            <button
              onClick={handleSupport}
              className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg flex justify-center gap-2"
            >
              <FaWhatsapp />
              واتساب الدعم
            </button>
          </div>

        </div>

        {/* ================= CALENDAR GRID ================= */}
        <div className="col-span-3 bg-white rounded-xl p-6">

          <div className="mb-6 flex justify-between">
            <h3 className="font-bold">سبتمبر 2026</h3>
            <span className="text-gray-400 text-sm">
              التقويم
            </span>
          </div>

          <div className="grid grid-cols-7 gap-3">

            {Array.from({ length: 30 }).map((_, i) => {

              const day = i + 1;

              const hasEvent = events.some(
                (e) => e.day === day
              );

              return (
                <div
                  key={i}
                  className={`h-28 border rounded-lg p-2 text-right
                    ${
                      hasEvent
                        ? "bg-green-50 border-green-700"
                        : ""
                    }`}
                >
                  <span className="text-sm font-bold">
                    {day}
                  </span>

                  {/* نقطة لو فيه حدث */}
                  {hasEvent && (
                    <div className="w-2 h-2 bg-green-700 rounded-full mt-2" />
                  )}
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </main>
  );
}

export default Calendar;