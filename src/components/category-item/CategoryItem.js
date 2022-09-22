import "./category-item.styles.scss";

export default function CategoryItem({ category }) {
  const { id, title, imageUrl } = category;
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <img src="" alt="" />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
