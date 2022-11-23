import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    inputValue: "",
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <input className="mb-3 ml-3 input-style"></input>
        </Row>
        <Row>
          {this.props.books.map((book) => (
            <Col lg={3}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;

// const BookList = ({ books }) => (
//     <Container fluid>
//       <Row>
//         <input className="mb-3 ml-3 input-style"></input>
//       </Row>
//       <Row>
//         {books.map((book) => (
//           <Col lg={3}>
//             <SingleBook book={book} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
//   export default BookList;
