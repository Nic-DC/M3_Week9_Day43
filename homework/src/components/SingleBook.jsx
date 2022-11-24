import { Card, Badge } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selectedBook: null,
    id: "",
  };
  render() {
    return (
      <div className="mb-3" key={this.props.book.asin}>
        <Card className="bg-dark text-white image-styling mb-3">
          <Card.Img src={this.props.book.img} alt="Card image" className="image-styling" />
          <Card.ImgOverlay
            className="single-card"
            onClick={() => {
              console.log("clicked img", this.props.book);

              this.setState({
                selectedBook: this.props.book,
                id: this.props.book.asin,
              });

              console.log("the asin is:", this.state.id);
            }}
          >
            <Card.Title className="margins-text-card title-size">{this.props.book.title}</Card.Title>
            <Card.Text className="margins-text-card">
              <Badge variant="warning">{this.props.book.category}</Badge>
            </Card.Text>
            <Card.Text>
              {this.props.book.price} | {this.props.book.asin}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <CommentArea selectedBook={this.state.selectedBook} bookId={this.state.id} />
      </div>
    );
  }
}
export default SingleBook;
//: { img, title, category, price, asin }

// const SingleBook = ({ book }) => (
//     <Card className="bg-dark text-white image-styling mb-3" key={book.asin}>
//       <Card.Img src={book.img} alt="Card image" className="" />
//       <Card.ImgOverlay className="single-card">
//         <Card.Title className="margins-text-card">{book.title}</Card.Title>
//         <Card.Text className="margins-text-card">
//           <Badge variant="warning">{book.category}</Badge>
//         </Card.Text>
//         <Card.Text>
//           {book.price} | {book.asin}
//         </Card.Text>
//       </Card.ImgOverlay>
//     </Card>
//   );
//   export default SingleBook;
