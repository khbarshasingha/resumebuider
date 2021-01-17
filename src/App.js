import logo from "./logo.svg";
import "./App.css";
import { ResumeForm } from "./Components/ResumeForm";
import { ResumeTable } from "./Components/ResumeTable";
import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Container>
          <Route exact path="/" component={ResumeForm} />
          <Route exact path="/table" component={ResumeTable} />
        </Container>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
