import { useParams } from "react-router"
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import ProductCard from "../../components/product-card/ProductCard";
import './category.styles.scss'

export default function Category() {

    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">

                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </>

    )
}
