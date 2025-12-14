import { useState } from "react";
import { useAuthStore } from "../features/auth/auth.store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // شبیه‌سازی Login (بعداً API واقعی)
    if (username && password) {
      setUser({ username });
      navigate("/"); // بعد از لاگین برگرد به Home
    } else {
      alert("لطفاً همه فیلدها را پر کنید");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">ورود</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">نام کاربری</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">رمز عبور</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">ورود</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
