import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => (
  <Container fluid>
    <Row>
      {books.map((book) => (
        <Col lg={3}>
          <Card className="bg-dark text-white image-styling mb-3">
            <Card.Img src={book.img} alt="Card image" className="" />
            <Card.ImgOverlay className="single-card">
              <Card.Title className="margins-text-card">{book.title}</Card.Title>
              <Card.Text className="margins-text-card">
                <Badge variant="warning">{book.category}</Badge>
              </Card.Text>
              <Card.Text>
                {book.price} | {book.asin}
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);
export default BookList;
