import React, { useEffect, useState } from "react";

function Tasks() {
  // 📦 البيانات
  const [tasks, setTasks] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [search, setSearch] = useState("");

  // 🔥 جلب البيانات من الباك
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.tasks);
        setUpcoming(data.upcoming);
      })
      .catch(() => {
        // 🧪 fallback
        setTasks([
          {
            id: 1,
            title: "مراجعة سورة البقرة",
            desc: "من الآية 1 إلى 50 - حفظاً وتجويداً",
            status: "عاجل",
            teacher: "الشيخ أحمد علي",
            deadline: "ينتهي غداً",
            type: "book",
          },
          {
            id: 2,
            title: "اختبار التجويد الاسبوعي",
            desc: "أحكام النون الساكنة",
            status: "اعتيادي",
            questions: 10,
            deadline: "بعد 3 أيام",
            type: "exam",
          },
          {
            id: 3,
            title: "تسجيل تلاوة",
            desc: "تسجيل صوتي 3 دقائق",
            status: "متأخر",
            duration: "5 دقائق",
            deadline: "منذ أمس",
            type: "audio",
          },
        ]);

        setUpcoming([
          {
            id: 1,
            title: "حلقة التلاوة الصباحية",
            teacher: "الشيخ محمود",
            time: "08:00 ص",
            day: "24",
            month: "أكتوبر",
          },
          {
            id: 2,
            title: "شرح متن الجزرية",
            teacher: "قاعة ب",
            time: "04:30 م",
            day: "26",
            month: "أكتوبر",
          },
        ]);
      });
  }, []);

  // 🔍 فلترة البحث
  const filteredTasks = tasks.filter((task) =>
    task.title.includes(search)
  );

  // 📊 Stats
  const completed = tasks.filter((t) => t.status !== "متأخر").length;
  const progress = Math.round((completed / tasks.length) * 100) || 0;

  return (
    <main className="flex-1 flex flex-col px-6">

      {/* 🔵 Header */}
      <div className="bg-white rounded-xl px-6 py-4 mb-6 flex items-center justify-between">
        <div className="flex gap-4 text-gray-500">
          <i className="fa-solid fa-heart" />
          <i className="fa-solid fa-bell" />
          <i className="fa-solid fa-circle-question" />
        </div>

        <div className="w-[420px] bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2 text-sm">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-right"
            placeholder="...البحث في المهام"
          />
          <i className="fa-solid fa-magnifying-glass" />
        </div>

        <h2 className="text-green-800 font-bold">مشكاة</h2>
      </div>

      {/* 🟢 Title */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <button className="bg-green-700 text-white px-4 py-1.5 rounded-lg text-sm">
            تحديث القائمة
          </button>
        </div>

        <div className="text-right">
          <h1 className="text-2xl font-bold">المهام</h1>
          <p className="text-gray-500 text-sm">
            لديك {tasks.length} مهام
          </p>
        </div>
      </div>

      {/* 📊 Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl flex justify-between">
          <i className="fa-solid fa-chart-simple text-gray-500" />
          <div className="text-right">
            <p className="text-gray-400 text-sm">نسبة الإنجاز</p>
            <h3 className="font-bold">{progress}%</h3>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl flex justify-between">
          <i className="fa-solid fa-hourglass-half text-gray-500" />
          <div className="text-right">
            <p className="text-gray-400 text-sm">مهام قيد التنفيذ</p>
            <h3 className="font-bold">{tasks.length}</h3>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl flex justify-between">
          <i className="fa-solid fa-circle-check text-green-700" />
          <div className="text-right">
            <p className="text-gray-400 text-sm">مهام مكتملة</p>
            <h3 className="font-bold text-green-700">{completed}</h3>
          </div>
        </div>
      </div>

      {/* 🧩 Layout */}
      <div className="grid grid-cols-4 gap-6">

        {/* LEFT */}
        <div className="space-y-4">

          {/* Progress */}
          <div className="bg-green-800 text-white rounded-xl p-5 text-right">
            <h3 className="font-bold mb-1">إنجازك الدراسي</h3>

            <div className="w-full bg-green-700 h-2 mb-3">
              <div
                className="bg-white h-2"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between text-xs">
              <span>المستوى 4</span>
              <span>{progress}% مكتمل</span>
            </div>
          </div>

          {/* 🟡 Upcoming ديناميك */}
          <div className="bg-gray-50 rounded-xl p-5 text-right space-y-4">
            <h3 className="font-bold">حصص قادمة</h3>

            {upcoming.map((item) => (
              <div key={item.id} className="flex justify-between bg-white p-3 rounded-lg">
                <div className="text-right">
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <div className="text-xs text-gray-500">
                    {item.teacher} - {item.time}
                  </div>
                </div>

                <div className="w-14 h-14 border rounded-lg flex flex-col items-center justify-center">
                  <span className="text-green-700 font-bold">{item.day}</span>
                  <span className="text-gray-400 text-xs">{item.month}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-3 space-y-4">

          <h3 className="font-bold text-right">المهام الحالية</h3>

          {/* 🔥 Tasks ديناميك */}
          {filteredTasks.map((task) => (
            <div key={task.id} className="bg-white p-4 rounded-xl border">

              {/* Top */}
              <div className="flex justify-between">
                <span className={`px-2 py-1 text-xs rounded-full
                  ${task.status === "عاجل" && "bg-green-100"}
                  ${task.status === "متأخر" && "bg-red-200"}
                  ${task.status === "اعتيادي" && "bg-gray-200"}
                `}>
                  {task.status}
                </span>

                <div className="text-right">
                  <h4 className="font-bold">{task.title}</h4>
                  <p className="text-xs text-gray-500">{task.desc}</p>
                </div>
              </div>

              <div className="border-t my-2"></div>

              {/* Bottom */}
              <div className="flex justify-between text-xs text-gray-500">

                <button className="text-green-700">
                  {task.type === "book" && "البدء الآن"}
                  {task.type === "exam" && "عرض التفاصيل"}
                  {task.type === "audio" && "رفع الملف"}
                </button>

                <div className="flex gap-3">
                  {task.teacher && <span>{task.teacher}</span>}
                  {task.questions && <span>{task.questions} أسئلة</span>}
                  {task.duration && <span>{task.duration}</span>}
                  <span>{task.deadline}</span>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </main>
  );
}

export default Tasks;