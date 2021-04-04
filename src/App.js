import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import RepoList from "./component/RepoList";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={RepoList} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
