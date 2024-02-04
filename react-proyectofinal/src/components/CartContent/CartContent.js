import { useContext } from "react";
import { DataContext} from '../Context/DataContext'
import CartProducts from './CartProducts';
import CartTotal from './CartTotal'
import Navbar from "../../Navbar/Navbar";

const CartContent = () => {
  const {cart} = useContext(DataContext);


return(
  <>
  <Navbar />
  {cart.lenght > 0 ? (
    <>
     <CartProducts />
    <CartTotal />
  </>
  ) : (
    <h2 className="cart-message">Tu carrito esta vacío</h2>
  )};
  </>
);


  }

  export default CartContent