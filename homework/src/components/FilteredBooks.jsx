import { Card, Badge } from "react-bootstrap";
import { Component } from "react";

class FilteredBooks extends Component {
  render() {
    return (
      <Card className="bg-dark text-white image-styling mb-3" key={this.props.book.asin}>
        <Card.Title className="margins-text-card">{this.props.book.title}</Card.Title>
        <Card.Text className="margins-text-card">
          <Badge variant="warning">{this.props.book.category}</Badge>
        </Card.Text>
      </Card>
    );
  }
}
export default FilteredBooks;
