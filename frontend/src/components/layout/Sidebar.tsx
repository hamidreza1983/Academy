import { Link } from "react-router-dom";
import { FaGraduationCap, FaCertificate, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const items = [
    { label: "دوره‌های من", to: "/my-courses", icon: <FaGraduationCap /> },
    { label: "گواهینامه‌ها", to: "/certificates", icon: <FaCertificate /> },
    { label: "پروفایل کاربری", to: "/profile", icon: <FaUser /> },
    { label: "تنظیمات", to: "/settings", icon: <FaCog /> },
    { label: "خروج", to: "/logout", icon: <FaSignOutAlt />, isDanger: true },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        className="btn btn-primary position-fixed top-50 end-0 translate-middle-y"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
      >
        ☰
      </button>

      {/* Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            پنل کاربری
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body">
          <ul className="list-unstyled text-end m-0 p-0">
            {items.map((item, index) => (
              <li
                key={index}
                className="mb-2 border-bottom pb-2 d-flex align-items-center justify-content-between"
              >
                <Link
                  to={item.to}
                  className={`text-decoration-none w-100 d-flex justify-content-between align-items-center ${item.isDanger ? "text-danger" : "text-dark"}`}
                >
                  <span>{item.label}</span>
                  <span className="ms-2">{item.icon}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

