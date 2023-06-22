import "../HojasEstilo/Cart.css";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Cart() {
  const { cartItems, getIndividualPrice, getTotalPrice, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cart-sidebar">
      <div className="cabecera">
        <h2>Articulos en la cesta</h2>
      </div>
      {cartItems.map((item) => {
        return (
          <div className="item-container">
            <img src={item.image} alt="imagen" />
            <div className="footer">
              <p>
                <p className="quantity">({item.quantity}x)</p>
                {item.description}
              </p>
              <h5>Subtotal:</h5>
              <p className="price">{getIndividualPrice(item.id)}€</p>
              <button onClick={() => removeFromCart(item.id)}>X</button>
            </div>
          </div>
        );
      })}
      <div className="total-container">
        <div>
          <h3>Total:</h3>
          <h3 className="total-price">{getTotalPrice()}€</h3>
        </div>
        <button>Realizar Pedido</button>
      </div>
    </div>
  );
}

export default Cart;
