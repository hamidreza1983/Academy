import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <NavLink to="/" className="navbar-brand fw-bold text-primary">
          EduPlatform
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
            {/* Home */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                خانه
              </NavLink>
            </li>
            {/* Courses Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                دوره‌ها
              </span>

              <ul className="dropdown-menu text-end">
                <li>
                  <NavLink className="dropdown-item" to="/courses">
                    همه دوره‌ها
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/courses?category=frontend"
                  >
                    فرانت‌اند
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/courses?category=backend"
                  >
                    بک‌اند
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/courses?category=devops"
                  >
                    دواپس
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Articles */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/articles">
                مقالات
              </NavLink>
            </li>

            {/* News */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/news">
                اخبار
              </NavLink>
            </li>

            {/* About */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                درباره ما
              </NavLink>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                تماس با ما
              </NavLink>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="d-flex gap-2">
            <NavLink to="/login" className="btn btn-outline-primary btn-sm">
              ورود
            </NavLink>
            <NavLink to="/register" className="btn btn-primary btn-sm">
              ثبت‌نام
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
