import { Link } from "react-router-dom";
import { useAuthStore } from "../../features/auth/auth.store";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">EduPlatform</Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/courses">دوره‌ها</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">مقالات</Link></li>
          </ul>

          <ul className="navbar-nav">
            {!isAuthenticated ? (
              <>
                <li className="nav-item"><Link className="nav-link" to="/login">ورود</Link></li>
                <li className="nav-item"><Link className="btn btn-light ms-2" to="/register">ثبت‌نام</Link></li>
              </>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/profile">{user?.username || "پروفایل"}</Link></li>
                <li className="nav-item"><button className="btn btn-outline-light ms-2" onClick={logout}>خروج</button></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

