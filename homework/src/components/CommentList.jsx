import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
      <div>
        {this.props.commentsList.map((comment) => (
          <ListGroup key={comment.asin}>
            <ListGroup.Item>{comment.comment}</ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    );
  }
}

export default CommentList;
