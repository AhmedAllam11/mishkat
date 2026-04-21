import React, { useState } from "react";

function Payment() {
  const [balance] = useState(0);

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "أحمد محمد علي",
      level: "التمهيدي",
      image: "https://i.pravatar.cc/40?img=1",
      selectedPath: "التجويد",
    },
    {
      id: 2,
      name: "سارة محمد علي",
      level: "المتوسط",
      image: "https://i.pravatar.cc/41?img=2",
      selectedPath: "الحفظ",
    },
  ]);

  const paths = [
    { name: "مسار الحفظ", icon: "fa-book" },
    { name: "مسار التجويد", icon: "fa-circle-check" },
    { name: "مسار التفسير", icon: "fa-book-open" },
  ];

  const paymentMethods = [
    { id: 1, name: "InstaPay", type: "instapay", label: "IP" },
    { id: 2, name: "بطاقة بنكية", type: "card", icon: "fa-credit-card" },
    { id: 3, name: "فودافون كاش", type: "vodafone", label: "Vodafone Cash" },
  ];

  const [selectedPayment, setSelectedPayment] = useState("vodafone");

  // ================= SELECT PATH =================
  const selectPath = (studentId, path) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === studentId
          ? { ...s, selectedPath: path }
          : s
      )
    );
  };

  // ================= SEND TO BACKEND =================
  const handleConfirm = async () => {
    const payload = {
      students,
      paymentMethod: selectedPayment,
      total: 515,
    };

    console.log("SEND TO BACKEND:", payload);

    // await fetch("http://localhost:5000/api/payment", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });
  };

  return (
    <main className="flex-1 p-6 space-y-6" dir="rtl">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">الاشتراك والدفع</h1>
          <p className="text-gray-500">
            إدارة المسارات وإتمام الدفع بسهولة
          </p>
        </div>

        {/* BALANCE */}
        <div className="bg-white px-4 py-2 rounded shadow flex items-center gap-2">
          <i className="fa-solid fa-wallet text-green-600" />
          <div>
            <p className="text-xs text-gray-400">الرصيد الحالي</p>
            <p className="font-bold">{balance} ج.م</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">

        {/* SUMMARY */}
        <div className="bg-white p-6 rounded shadow space-y-3">

          <h3 className="font-bold">ملخص الاشتراك</h3>

          {students.map((s) => (
            <div key={s.id} className="flex justify-between">
              <span>{s.name}</span>
              <span>250 ج.م</span>
            </div>
          ))}

          <div className="flex justify-between">
            <span>رسوم إدارية</span>
            <span>15 ج.م</span>
          </div>

          <hr />

          <div className="flex justify-between font-bold">
            <span>الإجمالي</span>
            <span>515 ج.م</span>
          </div>

          <button
            onClick={handleConfirm}
            className="w-full bg-green-700 text-white py-2 rounded mt-4"
          >
            تأكيد الاشتراك
          </button>

          <p className="text-xs text-gray-400 text-center">
            جميع المدفوعات آمنة
          </p>
        </div>

        {/* STUDENTS */}
        <div className="col-span-2 space-y-6">

          <div className="grid grid-cols-2 gap-6">

            {students.map((student) => (
              <div key={student.id} className="bg-white p-6 rounded shadow space-y-4">

                <div className="flex items-center gap-3">
                  <img src={student.image} className="rounded-full" />
                  <div>
                    <p className="font-bold">{student.name}</p>
                    <p className="text-sm text-gray-500">
                      المستوى: {student.level}
                    </p>
                  </div>
                </div>

                <p className="text-sm">اختر المسار:</p>

                <div className="space-y-2">

                  {paths.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => selectPath(student.id, p.name)}
                      className={`w-full flex justify-between p-2 rounded border ${
                        student.selectedPath === p.name
                          ? "border-green-600 bg-green-50"
                          : ""
                      }`}
                    >
                      {p.name}
                      <i className={`fa-solid ${p.icon}`} />
                    </button>
                  ))}

                </div>
              </div>
            ))}

          </div>

          {/* PAYMENT METHODS */}
          <div>
            <h3 className="font-bold mb-4">طريقة الدفع</h3>

            <div className="grid grid-cols-3 gap-4">

              {paymentMethods.map((m) => (
                <div
                  key={m.id}
                  onClick={() => setSelectedPayment(m.type)}
                  className={`bg-white p-6 rounded shadow text-center cursor-pointer ${
                    selectedPayment === m.type
                      ? "border-2 border-green-600"
                      : ""
                  }`}
                >

                  {m.label ? (
                    <div className="bg-green-700 text-white px-2 py-1 rounded mb-2 text-sm">
                      {m.label}
                    </div>
                  ) : (
                    <i className={`fa-solid ${m.icon} text-2xl mb-2`} />
                  )}

                  <p>{m.name}</p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Payment;