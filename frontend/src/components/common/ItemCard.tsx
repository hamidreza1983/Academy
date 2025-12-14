interface ItemCardProps {
    title: string;
    image: string;
  }
  
  const ItemCard = ({ title, image }: ItemCardProps) => {
    return (
      <div className="card mb-3 shadow-sm border-0">
        <img
            src={image}
            className="card-img-top"
            alt={title}
            style={{ height: "120px", objectFit: "cover" }}
            />

            <div className="card-body p-2">
            <h6 className="card-title mb-0">{title}</h6>
            </div>

      </div>
    );
  };
  
  export default ItemCard;
  