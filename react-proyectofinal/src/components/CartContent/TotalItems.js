import { useContext } from "react";
import { DataContext} from '../Context/DataContext'


 const TotalItems = () => {
    const {cart} = useContext(DataContext);

    const itemsQuanty = cart.reduce((acc, el )=> acc + el.quanty, 0)
  return (

<span className="cart-total">{itemsQuanty}</span>
  )
}

export default TotalItems
