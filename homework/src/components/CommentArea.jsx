import { Component } from "react";
import { Toast } from "react-bootstrap";
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
    _id: this.props.bookId,
  };

  fetchComments = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.state._id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNjJkZWQ4MzkzNTAwMTVlOGM0YTciLCJpYXQiOjE2NjkyOTI3NjcsImV4cCI6MTY3MDUwMjM2N30.VAtNDwGFRCEleVAcqqgYklY-psB9reqjvbkLrGgGbPI",
        },
      });

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
        // alert("problem with request");
        console.log("problem with request");
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
          <Toast key={this.props.selectedBook.asin}>
            <Toast.Header>
              <strong className="mr-auto">Comments:</strong>
              <small>#{this.props.selectedBook.asin}</small>
            </Toast.Header>
            <Toast.Body>
              <AddComment id={this.props.selectedBook.asin} />
              <CommentList commentsList={this.state.comments} id={this.state._id} />
            </Toast.Body>
          </Toast>
        )}
      </div>
    );
  }
}

export default CommentArea;
