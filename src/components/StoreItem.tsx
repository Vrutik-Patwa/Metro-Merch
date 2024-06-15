import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
type StoreItemProps = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const quantity = 1;
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
            <Button className="w-100">+ Add To Cart</Button>
          ) : (
            <div className="tw-flex tw-flex-col tw-items-center tw-gap-[0.5rem]">
              <div className="tw-flex tw-flex-1 tw-justify-center tw-items-center tw-gap-[1rem]">
                <Button>+</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button>-</Button>
              </div>
              <Button variant="danger">Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
