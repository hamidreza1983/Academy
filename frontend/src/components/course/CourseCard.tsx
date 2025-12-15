interface CourseCardProps {
  title: string;
  image: string;
  price: string;
  className?: string; // ← اضافه کن
}

const CourseCard = ({ title, image, price, className }: CourseCardProps) => {
  return (
    <div className={`card h-100 shadow-sm border-0 ${className}`}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body text-end">
        <h6 className="card-title">{title}</h6>
        <p className="text-muted">{price}</p>
      </div>
    </div>
  );
};

export default CourseCard;
