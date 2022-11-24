import { Component } from "react";
import { Form, Button } from "react-bootstrap";

// {
//     "comment": string
//     "rate": string,
//     "elementId": string
//   }

class AddComment extends Component {
  state = {
    comments: {
      comment: "",
      rate: 5,
      elementId: `${this.props.id}`,
    },
  };

  onChangeFunc = (value, fieldChange) => {
    this.setState({
      comments: {
        ...this.state.comments,
        [fieldChange]: value,
      },
    });
  };

  onSubmitFunc = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      body: JSON.stringify(this.state.comments),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNjJkZWQ4MzkzNTAwMTVlOGM0YTciLCJpYXQiOjE2NjkyOTI3NjcsImV4cCI6MTY3MDUwMjM2N30.VAtNDwGFRCEleVAcqqgYklY-psB9reqjvbkLrGgGbPI",
      },
    };

    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, options);
      console.log("The response is: ", response);

      if (response.ok) {
        alert("Comment saved");
        this.setState({
          comments: {
            comment: "",
            rate: 5,
            elementId: "",
          },
        });
      } else {
        alert("Server had problems handling your request");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Form onSubmit={this.onSubmitFunc} className="mb-3">
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="your comment here"
            value={this.state.comments.comment}
            onChange={(e) => this.onChangeFunc(e.target.value, "comment")}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>How do you rate the book?</Form.Label>
          <Form.Control
            as="select"
            value={this.state.comments.rate}
            onChange={(e) => this.onChangeFunc(e.target.value, "rate")}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit comment
        </Button>
      </Form>
    );
  }
}

export default AddComment;
