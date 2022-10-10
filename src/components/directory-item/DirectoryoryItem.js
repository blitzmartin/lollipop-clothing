import "./directory-item.styles.scss";

export default function DirectoryItem({ category }) {
  const { id, title, imageUrl } = category;
  return (
    <div key={id} className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <img src="" alt="" />
      <div className="body">
        <h2>{title.toUpperCase()}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
}
