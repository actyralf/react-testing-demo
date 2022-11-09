import "./App.css";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Card todo="Bad putzen" completed={true} />
    </div>
  );
}

export default App;
