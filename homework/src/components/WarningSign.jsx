import { Alert } from "react-bootstrap";

const WarningSign = ({ exerciseNumber }) =>
  ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].slice(3, 4).map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      {exerciseNumber}. Create a component called WarningSign which receives a string as a prop. This text should be
      presented inside an Alert react-bootstrap component of type {variant}. Check it out!
    </Alert>
  ));
export default WarningSign;
