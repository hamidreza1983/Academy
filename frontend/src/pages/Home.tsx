import CourseCard from "../components/course/CourseCard";
import ItemCard from "../components/common/ItemCard";
import { latestCourses } from "../mock/courses";
import { latestArticles } from "../mock/articles";
import { latestBlogs } from "../mock/blogs";

// تابع کمکی برای گروه‌بندی آخرین دوره‌ها در Carousel
const chunkArray = (arr: any[], size: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="py-5 text-center text-white"
        style={{ backgroundColor: "#4a90e2" }}
      >
        <div className="container">
          <h1 className="fw-bold mb-3">پلتفرم آموزش برنامه‌نویسی</h1>
          <p className="lead mb-4">یادگیری امن، پروژه‌محور و حرفه‌ای</p>
          <a href="/register" className="btn btn-light btn-lg me-2">
            شروع یادگیری
          </a>
          <a href="/login" className="btn btn-outline-light btn-lg">
            ورود
          </a>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container py-5">
        <div className="row justify-content-center text-center g-4">
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 shadow-sm border-0 card-hover">
              <div className="card-body">
                <h5 className="card-title text-primary">دوره‌ها</h5>
                <p className="card-text text-secondary">
                  دوره‌های تخصصی از مقدماتی تا پیشرفته
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card h-100 shadow-sm border-0 card-hover">
              <div className="card-body">
                <h5 className="card-title text-primary">مقالات</h5>
                <p className="card-text text-secondary">
                  آموزش‌های کوتاه و کاربردی
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card h-100 shadow-sm border-0 card-hover">
              <div className="card-body">
                <h5 className="card-title text-primary">مسیر شغلی</h5>
                <p className="card-text text-secondary">
                  یادگیری هدفمند برای ورود به بازار کار
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Courses Carousel */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold">آخرین دوره‌ها</h4>
          <a href="/courses" className="text-primary text-decoration-none">
            مشاهده همه →
          </a>
        </div>

        <div
          id="coursesCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="3500"
          data-bs-pause="hover"
        >
          <div className="carousel-inner">
            {chunkArray(latestCourses, 4).map((group, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row g-3 justify-content-center">
                  {group.map((course) => (
                    <div key={course.id} className="col-md-3">
                      <CourseCard
                        title={course.title}
                        image={course.image}
                        price={course.price}
                        className="card-hover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#coursesCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#coursesCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="container py-5">
        <h4 className="fw-bold mb-4 text-center">آخرین مقالات</h4>

        <div
          className="d-flex gap-3 overflow-auto"
          style={{ paddingBottom: "10px" }}
        >
          {latestArticles.map((article) => (
            <div key={article.id} style={{ minWidth: "250px", flex: "0 0 auto" }}>
              <ItemCard
                title={article.title}
                image={article.image}
                className="card-hover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <hr className="my-4" />
      </div>

      {/* Latest Blogs */}
      <section className="container py-5">
        <h4 className="fw-bold mb-4 text-center">آخرین اخبار بلاگ</h4>

        <div
          className="d-flex gap-3 overflow-auto"
          style={{ paddingBottom: "10px" }}
        >
          {latestBlogs.map((blog) => (
            <div key={blog.id} style={{ minWidth: "250px", flex: "0 0 auto" }}>
              <ItemCard
                title={blog.title}
                image={blog.image}
                className="card-hover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
