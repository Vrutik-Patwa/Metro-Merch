import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import StoreItems from "../data/items.json";
type ShoppinCartprops = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppinCartprops) => {
  const { closeCart, cartItems } = useShoppingCart();
  const items = cartItems.map((item) => {
    return <CartItem {...item} />;
  });
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack className="tw-gap-[10px]">
          {items}
          <div className="ms-auto fw-bold tw-text-xl">
            Total :{" "}
            {formatCurrency(
              cartItems.reduce((total, cart) => {
                const item = StoreItems.find((i) => i.id === cart.id);
                return total + item.price * cart.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
