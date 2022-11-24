import { Component } from "react";
import { Toast } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  fetchComments = async () => {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNjJkZWQ4MzkzNTAwMTVlOGM0YTciLCJpYXQiOjE2NjkyOTI3NjcsImV4cCI6MTY3MDUwMjM2N30.VAtNDwGFRCEleVAcqqgYklY-psB9reqjvbkLrGgGbPI",
      },
    });
  };

  render() {
    return (
      <div>
        {this.props.selectedBook && (
          <Toast>
            <Toast.Header>
              <img src="#" className="rounded mr-2" alt="" />
              <strong className="mr-auto">Comments:</strong>
              <small>#{this.props.selectedBook.asin}</small>
            </Toast.Header>
            <Toast.Body>
              <AddComment id={this.props.selectedBook.asin} />
              <CommentList />
            </Toast.Body>
          </Toast>
        )}
      </div>
    );
  }
}

export default CommentArea;
