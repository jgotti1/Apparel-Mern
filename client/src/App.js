import "./App.css";
import useStyles from "./styles.js";
import Admin from "./components/adminPage/adminPage";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Admin />
    </div>
  );
}

export default App;
