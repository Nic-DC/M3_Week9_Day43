import { Badge, Button } from "react-bootstrap";

const MyBadge = ({ exerciseNumber, color }) => (
  <Button variant={color} className="mb-3">
    Exercise <Badge variant="warning">{exerciseNumber}</Badge>
    <span className="sr-only">unread messages</span>
  </Button>
);

export default MyBadge;
