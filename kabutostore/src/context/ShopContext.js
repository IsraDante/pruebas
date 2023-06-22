import { createContext, useState } from "react";
import SSList from "../data/SSlist";
import SFList from "../data/SF";
import DBalllist from "../data/DB";
import NarutoList from "../data/Naruto";
import OPList from "../data/OPList";

//contexto global de la tienda
export const ShopContext = createContext(null);

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [favoritos, setFavoritos] = useState([]);
  const initialItemList = [...SSList, ...SFList, ...DBalllist, ...NarutoList, ...OPList];
  const [itemLists, setItemLists] = useState(initialItemList);
  const [itemDetails, setItemDetails] = useState({});
  const [categoryItem, setCategoryItem] = useState("");

  //añadir al carrito
  function addToCart(newItemId) {
    removeFromFavoritos(newItemId);
    setCartItems((prevItems) => {
      //encontrar una coincidencia
      const itemExist = prevItems.find((item) => newItemId === item.id);
      if (itemExist) {
        //si la hay iteramos y aumentamos lacantidad del producto en 1
        return prevItems.map((item) => (item.id === newItemId ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        //si no la hay, buscamos el item en la lista de productos
        const newItem = itemLists.find((item) => item.id === newItemId);
        //y la añadimos al array con la propiedad quantity 1
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  }

  //quitar del carrito
  function removeFromCart(id) {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
      return updatedItems.filter((item) => item.quantity > 0);
    });
  }

  //ver cuantos elelentos hay en el carrito
  function updateItemCount() {
    let totalItems = 0;
    cartItems.forEach((item) => (totalItems += item.quantity));
    return totalItems;
  }

  //hacer visible el interior del carrito
  function showCartItems() {
    setIsVisible(!isVisible);
  }

  //calcular el precio individual por producto si hay mas de uno o uno
  function getIndividualPrice(id) {
    let itemSelected = cartItems.find((item) => item.id === id);
    let total = 0;
    if (itemSelected) {
      total = itemSelected.price * itemSelected.quantity;
    }
    return total;
  }

  //saber el monto total de la compra
  function getTotalPrice() {
    let totalPrice = 0;
    cartItems.map((items) => {
      totalPrice += items.price * items.quantity;
    });
    return totalPrice.toFixed(2);
  }

  //añadir a favoritos
  function addFavoritos(newItemId) {
    setFavoritos((prevItems) => {
      //comprobar si el item ya está en favoritos de antes
      const itemInFavoritos = prevItems.find((item) => item.id === newItemId);
      if (itemInFavoritos) {
        //si está filtramos y eliminamos
        return prevItems.filter((item) => item.id !== newItemId);
      } else {
        //recorremos la lista de items para encontrar la coincidencia con el nuevo
        const newItem = itemLists.find((item) => item.id === newItemId);
        // Asegurarse de que newItem exista antes de agregarlo a favoritos
        if (newItem) {
          return [...prevItems, newItem];
        }
      }
    });
  }

  //quitar de favoritos
  function removeFromFavoritos(id) {
    setFavoritos((prevItems) => {
      const updatedFavoritos = prevItems.filter((item) => item.id !== id);
      return updatedFavoritos;
    });
  }

  //setear categoria seleccionada
  function setCategory(category) {
    setCategoryItem(category);
  }

  //ver la figura en grande con sus detalles e info
  function getDetail(id) {
    const itemFinded = itemLists.find((item) => item.id === id);
    if (itemFinded) {
      setItemDetails(itemFinded); // Actualiza el estado con el objeto ítem actual
    }
  }

  //valor que se le pasa al contexto de la tienda
  const ContextValue = {
    addToCart,
    removeFromCart,
    updateItemCount,
    getIndividualPrice,
    getTotalPrice,
    cartItems,
    isVisible,
    showCartItems,
    setSearchValue,
    searchValue,
    addFavoritos,
    favoritos,
    removeFromFavoritos,
    setCategory,
    categoryItem,
    itemLists,
    getDetail,
    itemDetails,
  };

  return <ShopContext.Provider value={ContextValue}>{props.children}</ShopContext.Provider>;
}

export default ShopContextProvider;
