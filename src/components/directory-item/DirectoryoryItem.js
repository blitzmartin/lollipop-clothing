import { useNavigate } from "react-router";
import { BackgroundImage, Body, DirectoryItemContainer} from "./directory-item.styles.js";

export default function DirectoryItem({ category }) {
  const { id, title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer key={id} onClick={onNavigateHandler} >
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <img src="" alt="" />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>SHOP NOW</p>
      </Body>
    </DirectoryItemContainer>
  );
}
