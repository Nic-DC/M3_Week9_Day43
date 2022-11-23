import { Card, Badge } from "react-bootstrap";

const SingleBook = ({ book: { img, title, category, price, asin } }) => (
  <Card className="bg-dark text-white image-styling mb-3">
    <Card.Img src={img} alt="Card image" className="" />
    <Card.ImgOverlay className="single-card">
      <Card.Title className="margins-text-card">{title}</Card.Title>
      <Card.Text className="margins-text-card">
        <Badge variant="warning">{category}</Badge>
      </Card.Text>
      <Card.Text>
        {price} | {asin}
      </Card.Text>
    </Card.ImgOverlay>
  </Card>
);
export default SingleBook;
