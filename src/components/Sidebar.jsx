import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import {
  FaHome,
  FaBook,
  FaClipboard,
  FaUserGraduate,
  FaSignOutAlt,
  FaCalendarAlt,
  FaMoneyBill
} from 'react-icons/fa';
import { FiBookOpen } from 'react-icons/fi';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { FaChartSimple } from 'react-icons/fa6';
import { MdOutlineAccountCircle, MdOutlinePayments, MdOutlineTaskAlt } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IoIosNotifications, IoMdTrendingUp } from 'react-icons/io';
import { FaUsers, FaClipboardCheck, FaChalkboardTeacher, FaCog } from 'react-icons/fa';

//  روابط  
 
export const childLinks = [
  { id: 1, name: "الملف الشخصي", path: "/dashboard/student/profile", icon: <CgProfile />, role: 'student' },
  { id: 2, name: "الاشتراك في المسار", path: "/dashboard/student/courses", icon: <FaMoneyBill />, role: 'student' },
  { id: 3, name: "التقويم", path: "/dashboard/student/calendar", icon: <FaCalendarAlt />, role: 'student' },
  { id: 4, name: "المكتبة", path: "/dashboard/student/library", icon: <FiBookOpen />, role: 'student' },
  { id: 5, name: "المهام", path: "/dashboard/student/tasks", icon: <MdOutlineTaskAlt />, role: 'student' },
  { id: 6, name: "متابعة المسار", path: "/dashboard/student/tracking", icon: <IoMdTrendingUp />, role: 'student' },

  { id: 7, name: "الفرم", path: "/dashboard/teacher/contact", icon: <MdOutlineAccountCircle />, role: 'teacher' },
  { id: 8, name: "الحلقات", path: "/dashboard/teacher/packages", icon: <FaBook />, role: 'teacher' },
  { id: 9, name: "الطلاب", path: "/dashboard/teacher/students", icon: <FaUserGraduate />, role: 'teacher' },
  { id: 10, name: "التقييم والمتابعة", path: "/dashboard/teacher/evaluation", icon: <FaChartSimple />, role: 'teacher' },
  { id: 11, name: "التقارير", path: "/dashboard/teacher/reports", icon: <IoDocumentTextSharp />, role: 'teacher' },
  { id: 12, name: "المكتبة القرآنية", path: "/dashboard/teacher/library", icon: <FiBookOpen />, role: 'teacher' },

  { id: 12, name: "الفرم", path: "/dashboard/parent/contact", icon: <MdOutlineAccountCircle />, role: 'parent' },
  { id: 13, name: "تقارير الابناء", path: "/dashboard/parent/reports", icon: <FaClipboard />, role: 'parent' },
  { id: 14, name: "جدول الحلقات", path: "/dashboard/parent/episods", icon: <FaBook />, role: 'parent' },
  { id: 15, name: "الاشعارات", path: "/dashboard/parent/noifications", icon: <IoIosNotifications />, role: 'parent' },
  { id: 16, name: "الاشتراك والدفع", path: "/dashboard/parent/payment", icon: <MdOutlinePayments />, role: 'parent' },

  { id: 17, name: "إدارة الحسابات", path: "/dashboard/admin/accounts", icon: <FaUsers />, role: 'admin' },
  { id: 18, name: "إدارة الطلاب", path: "/dashboard/admin/students", icon: <FaUserGraduate />, role: 'admin' },
  { id: 19, name: "المحتوى التعليمي", path: "/dashboard/admin/content", icon: <FaBook />, role: 'admin' },
  { id: 20, name: "تنظيم الحلقات", path: "/dashboard/admin/circles", icon: <FaCalendarAlt />, role: 'admin' },
  { id: 21, name: "مراجعة المعلمين", path: "/dashboard/admin/review-teachers", icon: <FaClipboardCheck />, role: 'admin' },
  { id: 22, name: "التقارير", path: "/dashboard/admin/reports", icon: <IoDocumentTextSharp />, role: 'admin' },
  { id: 23, name: "الاشتراكات والدفع", path: "/dashboard/admin/subscriptions", icon: <MdOutlinePayments />, role: 'admin' },
  { id: 24, name: "الإشعارات", path: "/dashboard/admin/notifications", icon: <IoIosNotifications />, role: 'admin' },
  { id: 25, name: "الإعدادات", path: "/dashboard/admin/settings", icon: <FaCog />, role: 'admin' },
];

function Sidebar() {
  const [open, setOpen] = useState(false);
  const { accountType, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen w-16 flex items-center justify-center">
        ⏳
      </div>
    );
  }

  // ✅ لو مفيش نوع حساب (مش مسجل)
  if (!accountType) {
    return null;
  }

  // فلترة
  const linksToShow = childLinks.filter(
    (link) => link.role === accountType
  );

  const finalLinks = [
    {
      id: 0,
      name: "الرئيسية",
      path: "/",
      icon: <FaHome />,
    },
    ...linksToShow
  ];

  return (
    <div className={`h-screen bg-gray-100 border-r flex flex-col justify-between transition-all duration-300 ${open ? 'w-52' : 'w-16'}`}>

      {/* top */}
      <div className="p-2">

        <button onClick={() => setOpen(!open)} className="mb-6 text-xl">
          ☰
        </button>

        <ul className="flex flex-col gap-2">
          {finalLinks.map(link => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={`flex items-center gap-3 p-2 rounded transition ${
                  location.pathname === link.path
                    ? 'bg-emerald-200 text-emerald-900'
                    : 'hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{link.icon}</span>
                {open && <span>{link.name}</span>}
              </Link>
            </li>
          ))}
        </ul>

      </div>

      {/* logout */}
      <div className="p-2 border-t">
        <button
          onClick={() => navigate('/signout')} // ✅ يروح لصفحة التأكيد
          className="flex items-center gap-3 text-red-600 p-2 hover:bg-red-100 w-full rounded"
        >
          <FaSignOutAlt />
          {open && "تسجيل خروج"}
        </button>
      </div>

    </div>
  );
}

export default Sidebar;