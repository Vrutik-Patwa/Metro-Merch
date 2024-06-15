import StoreItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
const Store = () => {
  const items = StoreItems.map((item) => (
    <Col key={item.id}>{<StoreItem {...item} />}</Col>
  ));
  return (
    <div>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3 tw-flex tw-flex-row">
        {items}
      </Row>
    </div>
  );
};

export default Store;
