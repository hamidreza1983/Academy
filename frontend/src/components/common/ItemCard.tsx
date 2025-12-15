interface ItemCardProps {
  title: string;
  image: string;
  className?: string; // ← اضافه کن
}

const ItemCard = ({ title, image, className }: ItemCardProps) => {
  return (
    <div className={`card h-100 shadow-sm border-0 ${className}`}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body text-end">
        <h6 className="card-title">{title}</h6>
      </div>
    </div>
  );
};

export default ItemCard;

  