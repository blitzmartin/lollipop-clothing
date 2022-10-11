import './directory.styles.scss'
import { categories } from '../../categories'
import DirectoryItem from '../directory-item/DirectoryoryItem';

export default function Directory({categories}) {
    return(
        <div className="directory-container">
        {categories.map((category) => {
          return (
            <DirectoryItem key={category.id} category={category} />
          );
        })}
      </div>
    )
}