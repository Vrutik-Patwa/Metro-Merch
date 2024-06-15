import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ objectFit: "cover" }}
        className="tw-h-[200px]"
        // height="200px"
      />
      <Card.Body className="tw-flex tw-flex-col">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => {
                increaseCartQuantity(id);
              }}
            >
              + Add To Cart
            </Button>
          ) : (
            <div className="tw-flex tw-flex-col tw-items-center tw-gap-[0.5rem]">
              <div className="tw-flex tw-flex-1 tw-justify-center tw-items-center tw-gap-[1rem]">
                <Button
                  onClick={() => {
                    increaseCartQuantity(id);
                  }}
                >
                  +
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button
                  onClick={() => {
                    decreaseCartQuantity(id);
                  }}
                >
                  -
                </Button>
              </div>
              <Button variant="danger" onClick={() => removeFromCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
