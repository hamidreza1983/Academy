import { useState } from "react";
import SearchBox from "../components/common/SearchBox";
import CourseCard from "../components/course/CourseCard";
import { latestCourses } from "../mock/courses";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = latestCourses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4 text-center">دوره‌ها</h2>

      <SearchBox value={searchTerm} onChange={setSearchTerm} />

      <div className="row">
        {filteredCourses.length ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <CourseCard title={course.title} image={course.image} price={course.price} />
            </div>
          ))
        ) : (
          <p className="text-center text-muted">هیچ دوره‌ای یافت نشد.</p>
        )}
      </div>
    </section>
  );
};

export default Courses;
