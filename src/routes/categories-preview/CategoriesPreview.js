import { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

export default function CategoriesPreview() {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <>
            {Object.keys(categoriesMap).map((key) => {
                const products = categoriesMap[key];
                return  <CategoryPreview key={key} title={key} products={products} />
            })}
        </>
    );
}