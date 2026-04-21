import React, { useState } from "react";

function Library() {

  const categories = [
    "الكل",
    "مسار التفسير",
    "المسار التجويد",
    "مسار القراءات",
  ];

  const [active, setActive] = useState("الكل");

  const resources = [
    {
      title: "التفسير الميسر",
      desc: "طرق فعالة لحفظ القرآن بسرعة",
      type: "video",
      category: "مسار التفسير",
      url: "https://www.youtube.com/embed/z0aOrazTmbg?si=m-YLfbwr1KbD2x4W&amp;start=89",
      views: "450 مشاهدة",
      time: "10 دقيقة",
    },
    {
      title: "أحكام التجويد للمبتدئين",
      desc: "شرح المخارج والصفات بأسلوب بسيط",
      type: "video",
      category: "المسار التجويد",
      url: "https://www.youtube.com/embed/kZetNz-gA0U?si=X0ALnrMR1J9My4wB",
      views: "1.2k مشاهدة",
      time: "15 دقيقة",
    },
    {
      title: "  القراءات العشر الصغري",
      desc: "تعليم جمع القراءات العشر الصغرى من الصفر، للمبتدئين",
      type: "video",
      category: "مسار القراءات",
      url: "https://www.youtube.com/embed/ZzY4NOB62NA?si=7Za4S7LPw4Qns0qv&amp;start=58",
      views: "900 مشاهدة",
      time: "12 دقيقة",
    },
  ];

  const filtered =
    active === "الكل"
      ? resources
      : resources.filter((r) => r.category === active);

  // 📌 Tags
  const tags = [
    "أنشطة صفية",
    "مسابقات",
    "تفسير مبسط",
    "إعجاز القرآن",
    "قصص الأنبياء",
  ];

  // 🔍 فتح Google بحث
  const handleTagClick = (tag) => {
    const url = `https://www.google.com/search?q=${encodeURIComponent(tag)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="flex-1 p-8 space-y-6">

      {/* HEADER */}
      <div className="text-right">
        <h1 className="text-2xl font-bold">مصادر مساعدة للتعلم</h1>
        <p className="text-gray-500 text-sm mt-1">
          مكتبة شاملة لكل المواد التعليمية
        </p>
      </div>

      <div className="flex gap-6">

        {/* LEFT FILTER */}
        <div className="w-[260px] space-y-4">

          <span className="font-bold text-green-700">
            مراجع حسب المسار
          </span>

          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => setActive(cat)}
              className={`p-3 rounded-xl cursor-pointer flex justify-between
              ${active === cat ? "bg-green-700 text-white" : "bg-white"}`}
            >
              <span>{cat}</span>
            </div>
          ))}

        </div>

        {/* CONTENT */}
        <div className="flex-1 space-y-6">

          <div className="flex justify-between">
            <h2 className="font-bold text-green-700">مواد تعليمية</h2>
          </div>

          <div className="grid grid-cols-2 gap-6">

            {filtered.map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden">

                <iframe
                  className="w-full h-40"
                  src={item.url}
                  title={item.title}
                  allowFullScreen
                />

                <div className="p-4 space-y-2 text-right">

                  <h3 className="font-bold">{item.title}</h3>

                  <p className="text-sm text-gray-500">{item.desc}</p>

                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{item.views}</span>
                    <span>{item.time}</span>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* 🔥 TAGS (DYNAMIC + GOOGLE SEARCH) */}
      <div className="border-t pt-6">

        <div className="flex justify-end mb-4">
          <span className="text-gray-400 text-sm">
            تصنيفات سريعة
          </span>
        </div>

        <div className="flex gap-2 flex-wrap justify-end">

          {tags.map((tag, i) => (
            <span
              key={i}
              onClick={() => handleTagClick(tag)}
              className="bg-white px-4 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-100 transition"
            >
              {tag}
            </span>
          ))}

        </div>

      </div>

    </main>
  );
}

export default Library;