import './App.css';
import Form from "../src/Components/form";
import { Route, Switch } from "react-router-dom";
import ThankYou from "./Components/ThankYou/thankyou"

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path={`/`} component={Form} />
      <Route exact path={`/thank-you.html`} component={ThankYou} />
      </Switch>
    </div>
  );
}

export default App;
