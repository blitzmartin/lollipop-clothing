import './directory.styles.scss'
import { categories } from '../../categories'
import CategoryItem from '../category-item/CategoryItem'

export default function Directory() {
    return(
        <div className="directory-container">
        {categories.map((category) => {
          return (
            <CategoryItem key={category.id} category={category} />
          );
        })}
      </div>
    )
}