import React, { useEffect, useState } from "react";
import axios from "axios";

function PackagesPage() {
  const [data, setData] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔌 API
  const loadData = () => {
    setLoading(true);

    axios.get("/db.json").then((res) => {
      setData(res.data);
      setSessions(res.data.sessions);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  // 🎯 Start session
  const startSession = (id) => {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: "active" } : s
      )
    );
  };

  // 🔄 toggle status
  const toggleStatus = (id) => {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              status: s.status === "active" ? "list" : "active"
            }
          : s
      )
    );
  };

  if (loading || !data) {
    return (
      <div className="h-screen flex items-center justify-center text-green-700 text-2xl">
        جاري التحميل...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3">

          <button
            onClick={loadData}
            className="bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            تحديث
          </button>

          <button className="bg-gray-300 px-4 py-2 rounded-lg">
            جدول الحلقات
          </button>
        </div>

        <div className="text-right">
          <h1 className="text-xl font-bold">
            الحلقات القرآنية
          </h1>
          <p className="text-sm text-gray-500">
            لوحة تحكم المعلم
          </p>
        </div>
      </div>

      {/* TOP CARD */}
      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2 bg-green-800 text-white p-6 rounded-xl">
          <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
            {data.main.status}
          </span>

          <h2 className="text-xl font-bold mt-3">
            {data.main.title}
          </h2>

          <p className="text-sm mt-2 opacity-80">
            {data.main.desc}
          </p>

          <button className="mt-4 bg-white text-green-800 px-4 py-2 rounded-lg">
            دخول الحلقة
          </button>
        </div>

        {/* STATS */}
        <div className="bg-white p-6 rounded-xl space-y-3">
          <p>الحلقات: {data.stats.active}</p>
          <p>الطلاب: {data.stats.students}</p>
          <p className="text-green-700 font-bold">
            نمو {data.stats.growth}%
          </p>
        </div>
      </div>

      {/* SESSIONS */}
      <div className="bg-white p-6 rounded-xl space-y-4">

        <h2 className="font-bold text-right">
          قائمة الحلقات اليومية
        </h2>

        {sessions.map((s) => (
          <div
            key={s.id}
            className="flex justify-between items-center border p-4 rounded-lg"
          >

            {/* ACTIONS */}
            <div className="flex gap-2">

              <button
                onClick={() => startSession(s.id)}
                className="bg-green-700 text-white px-3 py-1 rounded"
              >
                بدء
              </button>

              <button
                onClick={() => toggleStatus(s.id)}
                className="border px-3 py-1 rounded"
              >
                تغيير
              </button>

            </div>

            {/* STATUS */}
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                s.status === "active"
                  ? "bg-green-200 text-green-800"
                  : "bg-gray-200"
              }`}
            >
              {s.status === "active"
                ? "حاضر الآن"
                : "قائمة"}
            </span>

            {/* INFO */}
            <div className="text-right">
              <h3 className="font-bold">{s.title}</h3>
              <p className="text-sm text-gray-500">
                {s.students} طالب • {s.time}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* WEEKLY */}
      <div className="bg-white p-6 rounded-xl">
        <h2 className="font-bold text-right mb-4">
          مواعيد الأسبوع
        </h2>

        <div className="grid grid-cols-7 gap-2">
          {data.weekly.map((w, i) => (
            <div
              key={i}
              className={`h-2 rounded ${
                w > 0.5 ? "bg-green-700" : "bg-green-300"
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default PackagesPage;