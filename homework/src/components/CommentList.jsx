import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
      <div>
        {this.props.commentsList.map((com) => (
          <ListGroup key={this.props._id}>
            <ListGroup.Item>{com.comment}</ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    );
  }
}

export default CommentList;
