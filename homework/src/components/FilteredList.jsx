import { Container, Row, Col } from "react-bootstrap";
import FilteredBooks from "./FilteredBooks";
import { Component } from "react";

class FilteredList extends Component {
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
        {this.props.books
          .filter((book) => book.title.includes(this.state.inputValue))
          .map((book) => (
            <Col>
              <FilteredBooks book={book} />
            </Col>
          ))}

        <Row>
          {this.props.books.map((book) => (
            <Col lg={3}>
              <FilteredBooks book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default FilteredList;
