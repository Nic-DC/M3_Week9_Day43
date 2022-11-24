import { Component } from "react";
import { Toast } from "react-bootstrap";
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/0316438960`,
        // `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
        // `https://striveschool-api.herokuapp.com/api/comments/${this.props.selectedBook.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNjJkZWQ4MzkzNTAwMTVlOGM0YTciLCJpYXQiOjE2NjkyOTI3NjcsImV4cCI6MTY3MDUwMjM2N30.VAtNDwGFRCEleVAcqqgYklY-psB9reqjvbkLrGgGbPI",
          },
        }
      );

      if (response.ok) {
        // alert("Data retrived");
        console.log("Data retrieved");
        let allCommentsArray = await response.json();

        console.log("the comments are:", allCommentsArray);

        this.setState({
          comments: allCommentsArray,
        });

        // let commArr = allCommentsArray.filter((comm) => comm.comment === `${this.props.selectedBook.asin}`);
        // console.log("comArr:", commArr);
        // this.setState({
        //   comments: commentsArray,
        // });
      } else {
        alert("problem with request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

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
              <CommentList commentsList={this.state.comments} />
            </Toast.Body>
          </Toast>
        )}
      </div>
    );
  }
}

export default CommentArea;
