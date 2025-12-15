import { Link } from "react-router-dom";
import { latestArticles } from "../mock/articles";

const Articles = () => {
  return (
    <section className="container py-5">
      <h3 className="fw-bold mb-4 text-center">مقالات آموزشی</h3>

      <div className="row">
        {latestArticles.map((article) => (
          <div key={article.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img src={article.image} className="card-img-top" />
              <div className="card-body">
                <h6>{article.title}</h6>
                <Link
                  to={`/articles/${article.id}`}
                  className="btn btn-sm btn-outline-primary mt-2"
                >
                  ادامه مطلب
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
