interface CourseCardProps {
    title: string;
    image: string;
    price: string;
  }
  
  const CourseCard = ({ title, image, price }: CourseCardProps) => {
    return (
      <div className="card h-100 shadow-sm border-0">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h6 className="fw-bold mb-2">{title}</h6>
          <p className="text-muted mb-3">قیمت: {price} تومان</p>
          <button className="btn btn-primary mt-auto">مشاهده دوره</button>
        </div>
      </div>
    );
  };
  
  export default CourseCard;
  