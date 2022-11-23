import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    inputValue: "",
    newBooks: null,
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <input
            className="mb-3 ml-3 input-style"
            onChange={(event) => {
              console.log(event.target.value);
              this.setState({
                inputValue: event.target.value,
                newBooks: null,
              });
            }}
          ></input>
        </Row>
        {/* <Row>
          <Col>{this.props.books.filter((book) => book.title.startsWith(this.state.inputValue))}</Col>
        </Row> */}
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
