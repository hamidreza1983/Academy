import { latestBlogs } from "../mock/blogs";

const News = () => {
  return (
    <section className="container py-5">
      <h3 className="fw-bold mb-4 text-center">اخبار آموزشی</h3>

      <div className="row g-3">
        {latestBlogs.map((news) => (
          <div key={news.id} className="col-lg-6 col-md-6 col-12">
            <div className="card h-100 border-0 shadow-sm" style={{ direction: "rtl" }}>
              <div className="row g-0 flex-row-reverse align-items-center">
                {/* تصویر سمت راست */}
                <div className="col-4">
                  <img src={news.image} className="img-fluid rounded-start" alt={news.title} />
                </div>

                {/* متن سمت چپ */}
                <div className="col-8">
                  <div className="card-body text-end">
                    <h6>{news.title}</h6>
                    <p className="text-muted mb-0">
                      خلاصه خبر آموزشی...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;

