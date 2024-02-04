import { useContext } from "react";
import { DataContext, dataContext} from '../Context/DataContext'

const CarItemCounter = ({product}) => {
  const {cart, setCart , buyProducts} = useContext(dataContext);

 const decrese = () =>{
  const productrepeat = cart.find((item) => item.id === product.id);

productrepeat.quanty !== 1 && setCart(cart.map((item) => (item.id === product.id ?  {...product, quanty: productrepeat.quanty - 1 } : item )))
 };

  return (
    <>
  <p className='counter-boton' onClick={decrese}>+</p>
  <p>{product.quanty}</p>
  <p className='counter-boton' onClick={()= buyProducts (product)}>-</p>
  </>
  )
}

export default CarItemCounter
