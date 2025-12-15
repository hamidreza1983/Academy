import { FaInstagram, FaTelegram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-3 pb-2 mt-auto" style={{ fontSize: "0.85rem" }}>
      <div className="container">
        <div className="row">

          {/* آدرس و اطلاعات تماس */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold mb-2">EduPlatform</h5>
            <p className="mb-1">تهران، خیابان انقلاب، پلاک ۱۲۳</p>
            <p className="mb-1">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
            <p className="mb-0">ایمیل: info@eduplatform.com</p>
          </div>

          {/* لینک‌های مفید */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold mb-2">لینک‌های سریع</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  خانه
                </a>
              </li>
              <li>
                <a href="/courses" className="text-light text-decoration-none">
                  دوره‌ها
                </a>
              </li>
              <li>
                <a href="/articles" className="text-light text-decoration-none">
                  مقالات
                </a>
              </li>
              <li>
                <a href="/news" className="text-light text-decoration-none">
                  اخبار
                </a>
              </li>
            </ul>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold mb-2">شبکه‌های اجتماعی</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5">
                <FaInstagram />
              </a>
              <a href="#" className="text-light fs-5">
                <FaTelegram />
              </a>
              <a href="#" className="text-light fs-5">
                <FaLinkedin />
              </a>
              <a href="#" className="text-light fs-5">
                <FaTwitter />
              </a>
            </div>
          </div>

        </div>

        <hr className="border-light my-2" />

        <p className="text-center mb-0">
          &copy; 2025 EduPlatform. همه حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
