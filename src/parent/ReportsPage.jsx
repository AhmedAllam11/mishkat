import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ReportsPage() {

  // ================= STATE =================
  const [students, setStudents] = useState([]);
  const [reports, setReports] = useState([]);
  const [stats, setStats] = useState({});
  const [viewMode, setViewMode] = useState("quarter");

  const navigate = useNavigate();

  // ================= FETCH DATA (BACKEND READY) =================
  useEffect(() => {

    const fetchData = async () => {
      try {

        // ================= 🔥 API PLACE =================
        /*
        const res = await fetch("/api/reports-dashboard");
        const data = await res.json();

        setStudents(data.students);
        setReports(data.reports);
        setStats(data.stats);
        */

        // ================= MOCK DATA =================
        const studentsData = [
          {
            id: 1,
            name: "سارة محمد",
            grade: "الصف الرابع",
            group: "حلقة الفردوس",
            progress: 88,
            status: "نشط",
          },
          {
            id: 2,
            name: "أحمد محمد",
            grade: "الصف الرابع",
            group: "حلقة الرحمة",
            progress: 94,
            status: "نشط",
          },
        ];

        const reportsData = [
          {
            id: 1,
            title: "تقرير الأداء الأسبوعي",
            student: "أحمد محمد",
            date: "2023-10-14",
            teacher: "عبدالرحمن الشيخ",
            status: "ممتاز",
            content: "تفاصيل التقرير الكامل..."
          },
          {
            id: 2,
            title: "تقرير الحفظ والتلاوة",
            student: "سارة محمد",
            date: "2023-10-10",
            teacher: "عبدالرحمن الشيخ",
            status: "قيد المراجعة",
            content: "تفاصيل التقرير..."
          },
        ];

        const statsData = {
          improvement: "12.4%",
          attendance: "1,240",
        };

        setStudents(studentsData);
        setReports(reportsData);
        setStats(statsData);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // ================= NAVIGATION =================

  // 🔥 فتح صفحة التقرير
  const openReport = (report) => {
    navigate(`/report/${report.id}`, {
      state: report, // إرسال بيانات التقرير
    });
  };

  // 🔥 فتح تقارير الطالب
  const openStudentReports = (student) => {
    navigate(`/student/${student.id}`, {
      state: student,
    });
  };

  // ================= UI =================
  return (
    <main className="flex-1 p-4 sm:p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* ================= TITLE ================= */}
      <div>
        <h1 className="text-2xl font-bold">تقارير مستوى الأبناء</h1>
        <p className="text-gray-500 text-sm">
          متابعة الأداء الأكاديمي والسلوكي بشكل كامل
        </p>
      </div>

      {/* ================= STUDENTS + STATS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* ================= STUDENTS ================= */}
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >

            {/* status */}
            <div className="flex justify-between items-center">
              <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
                {student.status}
              </span>
              <div className="w-10 h-10 rounded-full bg-gray-200" />
            </div>

            {/* name */}
            <h3 className="font-semibold mt-2">{student.name}</h3>

            <p className="text-gray-500 text-sm">
              {student.grade} - {student.group}
            </p>

            {/* progress */}
            <div className="mt-3">
              <p className="text-xs text-gray-600">معدل الإنجاز</p>

              <div className="w-full bg-gray-200 h-2 rounded mt-1">
                <div
                  className="bg-green-600 h-2 rounded"
                  style={{ width: `${student.progress}%` }}
                />
              </div>
            </div>

            {/* button */}
            <button
              onClick={() => openStudentReports(student)}
              className="w-full mt-4 bg-green-700 text-white py-2 rounded hover:bg-green-800"
            >
              عرض تقارير الطالب
            </button>
          </div>
        ))}

        {/* ================= STATS ================= */}
        <div className="bg-green-700 text-white p-5 rounded-xl">

          <h3 className="text-lg font-semibold">إحصائيات الشهر</h3>

          <p className="text-sm mt-1">
            مقارنة الأداء خلال الشهر الحالي
          </p>

          <div className="flex justify-between text-sm mt-3">
            <span>نسبة التحسن</span>
            <span>{stats.improvement}</span>
          </div>

          <div className="flex justify-between text-sm mt-1">
            <span>إجمالي الحضور</span>
            <span>{stats.attendance}</span>
          </div>

        </div>
      </div>

      {/* ================= CHART ================= */}
      <div className="bg-white p-5 rounded-xl shadow">

        <div className="flex flex-col sm:flex-row justify-between gap-3">

          <div>
            <h3 className="font-semibold">تطور المستوى</h3>
            <p className="text-sm text-gray-500">
              متابعة التقدم خلال الفترة
            </p>
          </div>

          {/* buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("quarter")}
              className={`px-3 py-1 rounded text-sm ${
                viewMode === "quarter"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              فصلي
            </button>

            <button
              onClick={() => setViewMode("month")}
              className={`px-3 py-1 rounded text-sm ${
                viewMode === "month"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              شهري
            </button>
          </div>

        </div>

        {/* placeholder chart */}
        <div className="h-40 flex items-center justify-center text-gray-400 mt-4">
          (Chart من الباك هنا)
        </div>

      </div>

      {/* ================= REPORTS ================= */}
      <div className="bg-white p-5 rounded-xl shadow">

        <h3 className="font-semibold mb-4">أحدث التقارير</h3>

        {reports.map((report) => (
          <div
            key={report.id}
            className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-4 rounded-xl mb-3 gap-3"
          >

            {/* info */}
            <div className="text-right">
              <p className="font-bold">
                {report.title} - {report.student}
              </p>

              <p className="text-xs text-gray-500">
                {report.date} | {report.teacher}
              </p>
            </div>

            {/* status */}
            <p className="text-green-800 font-bold text-sm">
              {report.status}
            </p>

            {/* button */}
            <button
              onClick={() => openReport(report)}
              className="bg-green-800 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <FaEye />
              عرض
            </button>

          </div>
        ))}

      </div>

    </main>
  );
}

export default ReportsPage;