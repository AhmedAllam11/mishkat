import React, { useState } from "react";
import { FaPen, FaTrash, FaEye, FaUserPlus, FaSearch } from "react-icons/fa";

function StudentsPage() {

  const [students, setStudents] = useState([
    { id: "STD-40291#", name: "أحمد علي", track: "مسار الحفظ المكثف" },
    { id: "STD-31822#", name: "خالد منصور", track: "مسار التلاوة" },
    { id: "STD-55120#", name: "سعد إبراهيم", track: "مسار الحفظ المكثف" },
  ]);

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [track, setTrack] = useState("");
  const [editId, setEditId] = useState(null);

  // 🔍 فلترة
  const filtered = students.filter(
    (s) => s.name.includes(search) || s.id.includes(search)
  );

  // ➕ إضافة أو تعديل
  const handleSave = () => {
    if (!name || !track) return;

    if (editId) {
      setStudents(
        students.map((s) =>
          s.id === editId ? { ...s, name, track } : s
        )
      );
      setEditId(null);
    } else {
      setStudents([
        ...students,
        {
          id: "STD-" + Math.floor(Math.random() * 10000),
          name,
          track,
        },
      ]);
    }

    setName("");
    setTrack("");
    setShowForm(false);
  };

  // 🗑️ حذف
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // ✏️ تعديل
  const editStudent = (s) => {
    setName(s.name);
    setTrack(s.track);
    setEditId(s.id);
    setShowForm(true);
  };

  return (
    <main className="flex-1 px-12 py-8">

      {/* Header */}
      <div className="text-right mb-10">
        <h1 className="text-2xl text-gray-800">إدارة الطلاب</h1>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-6">

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-800 text-white px-6 py-2 rounded-lg flex items-center gap-2"
        >
          <FaUserPlus />
          إضافة
        </button>

        <div className="flex-1 bg-gray-200 px-5 py-2 rounded-lg flex items-center gap-2">
          <FaSearch />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="بحث..."
            className="bg-transparent outline-none w-full text-right"
          />
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="flex gap-2 mb-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="الاسم"
            className="border p-2 rounded"
          />
          <input
            value={track}
            onChange={(e) => setTrack(e.target.value)}
            placeholder="المسار"
            className="border p-2 rounded"
          />
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 rounded"
          >
            حفظ
          </button>
        </div>
      )}

      {/* Table */}
      <div className="space-y-4 text-right">

        <div className="flex justify-between border-b pb-2 text-gray-400">
          <span>الاسم</span>
          <span>ID</span>
          <span>المسار</span>
          <span>الإجراءات</span>
        </div>

        {filtered.map((s) => (
          <div
            key={s.id}
            className="bg-white p-4 rounded-xl flex justify-between items-center"
          >
            <span>{s.name}</span>
            <span className="text-gray-500">{s.id}</span>
            <span className="text-green-700">{s.track}</span>

            {/* Actions */}
            <div className="flex gap-4 text-gray-500 text-lg">

              <FaPen
                onClick={() => editStudent(s)}
                className="cursor-pointer hover:text-blue-600"
              />

              <FaTrash
                onClick={() => deleteStudent(s.id)}
                className="cursor-pointer hover:text-red-600"
              />

              <FaEye className="cursor-pointer hover:text-black" />

            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-gray-400">لا يوجد نتائج</p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 text-gray-500">
        عرض {filtered.length} من أصل {students.length}
      </div>

    </main>
  );
}

export default StudentsPage;