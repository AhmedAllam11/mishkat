import React, { useEffect, useState } from "react";
import {
  FaBell,
  FaQuestionCircle,
  FaBookOpen,
  FaVideo,
  FaHeadphones,
  FaFilePdf,
  FaTrash,
  FaHandsHelping,
} from "react-icons/fa";

function LibraryStudent() {
  // ================= STATE =================
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  // ================= BACKEND STATES =================
  const [oradToday, setOradToday] = useState(null);
  const [newPath, setNewPath] = useState(null);
  const [books, setBooks] = useState([]);

  // ================= FAKE BACKEND =================
  useEffect(() => {
    const fetchData = async () => {
      // أوراد اليوم (من الباك)
      const orad = {
        surah: "سورة الملك",
        from: 1,
        to: 10,
        progress: 60,
        link: "https://quran.com/67",
      };

      // مسار جديد (من الباك)
      const path = {
        title: "مسار جديد",
        desc: "تيسير التجويد: أحكام النون الساكنة",
        btn: "ابدأ الدراسة الآن",
      };

      const dataBooks = [
        { id: 1, title: "الوجيز في التفسير", type: "tafsir" },
        { id: 2, title: "مخارج الحروف", type: "tajweed" },
        { id: 3, title: "تسجيلات التحفيظ", type: "audio" },
        {
          id: 4,
          title: "أسباب النزول",
          type: "pdf",
          link: "https://google.com",
        },
      ];

      setOradToday(orad);
      setNewPath(path);
      setBooks(dataBooks);
    };

    fetchData();
  }, []);

  // ================= NOTES =================
  const addNote = () => {
    if (!note.trim()) return;
    setNotes([...notes, { id: Date.now(), text: note }]);
    setNote("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  // ================= HELP LINK =================
  const helpLink = "https://wa.me/201234567890";

  return (
    <main className="flex-1 p-6 space-y-6">

      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-xl px-6 py-4 flex justify-between items-center">
        <div className="flex gap-4 text-gray-500">
          <FaBell />
          <FaQuestionCircle />
        </div>

        <h2 className="text-green-800 font-bold">مشكاة</h2>
      </div>

      {/* ================= TITLE ================= */}
      <div className="text-right">
        <h1 className="text-2xl font-bold text-green-800">
          المكتبة القرآنية
        </h1>
        <p className="text-gray-500 text-sm">
          مرجعك الشامل لعلوم القرآن والتفسير والتجويد
        </p>
      </div>

      {/* ================= TOP SECTION (GRID LIKE UI) ================= */}
      <div className="grid grid-cols-3 gap-6">

        {/* ================= ORAD TODAY ================= */}
        {oradToday && (
          <div className="bg-white rounded-xl p-5 text-right flex flex-col justify-between">
            <div>
              <FaBookOpen className="text-green-700 mb-2" />
              <h3 className="font-bold">أوراد اليوم</h3>
              <p className="text-sm text-gray-500">
                {oradToday.surah} ({oradToday.from}-{oradToday.to})
              </p>
            </div>

            <div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                <div
                  className="bg-green-700 h-2"
                  style={{ width: `${oradToday.progress}%` }}
                />
              </div>

              <div className="flex justify-between mt-2 text-sm">
                <span className="text-green-700">
                  {oradToday.progress}%
                </span>

                <button
                  onClick={() => window.open(oradToday.link, "_blank")}
                  className="bg-green-700 text-white px-3 py-1 rounded-lg text-xs"
                >
                  ابدأ الدراسة الآن
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= NEW PATH ================= */}
        {newPath && (
          <div className="col-span-2 bg-white rounded-xl p-6 flex items-center gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="w-28"
            />

            <div className="text-right">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs">
                {newPath.title}
              </span>

              <h3 className="font-bold mt-2">{newPath.desc}</h3>

              <button className="mt-3 bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
                {newPath.btn}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ================= BOOKS ================= */}
      <div className="space-y-3">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 rounded-xl flex justify-between"
          >
            <div className="flex gap-2 items-center">

              {book.type === "tafsir" && <FaBookOpen />}
              {book.type === "tajweed" && <FaVideo />}
              {book.type === "audio" && <FaHeadphones />}
              {book.type === "pdf" && <FaFilePdf />}

              {book.link ? (
                <a
                  href={book.link}
                  className="text-green-700 font-bold"
                >
                  {book.title}
                </a>
              ) : (
                <span className="font-bold">{book.title}</span>
              )}
            </div>

            <span className="text-gray-500 text-xs">
              {book.type}
            </span>
          </div>
        ))}
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="flex gap-4">

        {/* ================= NOTES ================= */}
        <div className="flex-[2] bg-green-700 text-white rounded-xl p-4">
          <h3 className="font-bold mb-2">مذكراتي</h3>

          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full p-2 text-black rounded-lg"
            placeholder="اكتب ملاحظتك..."
          />

          <button
            onClick={addNote}
            className="mt-2 bg-white text-green-700 px-4 py-1 rounded-lg"
          >
            إضافة
          </button>

          <div className="mt-3 space-y-2">
            {notes.map((n) => (
              <div
                key={n.id}
                className="bg-green-800 p-2 rounded flex justify-between"
              >
                <p>{n.text}</p>

                <button onClick={() => deleteNote(n.id)}>
                  <FaTrash className="text-red-300" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ================= HELP (LINK BUTTON) ================= */}
        <div className="flex-1 bg-gray-100 rounded-xl p-4 flex flex-col justify-center items-center text-center">

          <h3 className="font-bold mb-2">طلب مساعدة</h3>

          <p className="text-sm text-gray-500 mb-3">
            تحتاج شرح أي مرجع؟
          </p>

          <a
            href={helpLink}
            target="_blank"
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FaHandsHelping />
            طلب المساعدة
          </a>
        </div>

      </div>
    </main>
  );
}

export default LibraryStudent;