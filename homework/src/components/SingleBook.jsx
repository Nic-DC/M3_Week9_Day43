import { Card } from "react-bootstrap";
// import image from "../assets/dmitry-ratushny-O33IVNPb0RI-unsplash.jpg";

const SingleBook = ({ book: { img, title } }) => (
  <Card className="bg-dark text-white image-styling">
    <Card.Img src={img} alt="Card image" className="" />
    <Card.ImgOverlay>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
        little bit longer.
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
  </Card>
);
export default SingleBook;
