import { Button, Stack } from "react-bootstrap";
import Storeitems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type CartItemprops = {
  id: number;
  quantity: number;
  price: number;
};

const CartItem = ({ id, quantity }: CartItemprops) => {
  const item = Storeitems.find((i) => i.id == id);
  const { removeFromCart } = useShoppingCart();
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        alt={id}
        className="tw-w-[160px] tw-h-[100px] tw-object-cover"
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted tw-text-[0.75rem]">x{quantity}</span>
          )}
          <div className="text-muted tw-text-[0.85rem]">
            {formatCurrency(item.price)}
          </div>
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(id)}
      >
        x
      </Button>
    </Stack>
  );
};

export default CartItem;
