import { useContext } from "react";
import { DataContext} from '../Context/DataContext'
import './CartContent/CartContent.css'

const Products = () => {
const {data , buyProducts} = useContext(DataContext);


return data.map((product)=> {
return(
    <div className="card">
    <img src={product.img} alt="img-product-card" />
    <h3>{product.name}</h3>
    <h4>{product.price}$</h4>
    <button onClick={()=> buyProducts(product)}>Comprar</button>
    </div>
)
})}

export default Products;