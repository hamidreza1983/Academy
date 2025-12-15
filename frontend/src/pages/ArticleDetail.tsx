import { useParams } from "react-router-dom";
import { latestArticles } from "../mock/articles";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = latestArticles.find((a) => a.id === Number(id));

  if (!article) return <p className="text-center mt-5">مقاله پیدا نشد</p>;

  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-3">{article.title}</h2>
      <img src={article.image} className="img-fluid mb-4" />
      <p className="text-muted">
        این متن نمونه است. بعداً از بک‌اند میاد.
      </p>
    </section>
  );
};

export default ArticleDetail;
