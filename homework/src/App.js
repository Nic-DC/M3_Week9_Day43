import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fantasyBooks from "../src/data/fantasy.json";

import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";

function App() {
  console.log(fantasyBooks[0]);
  return (
    <div>
      <WarningSign exerciseNumber="1" />
      <MyBadge exerciseNumber="2" color="dark" />
      <SingleBook book={fantasyBooks[0]} />
    </div>
  );
}

export default App;
