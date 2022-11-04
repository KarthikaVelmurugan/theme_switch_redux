import { useSelector } from "react-redux";
import "./App.css"
import ToggleSwitch from "./components/ToggleSwitch";
function App() {

  const value = useSelector(state=>state.value)

  return (
    <div className="app" style={{backgroundColor:value ? "white":"black"}}>
      <h1 style={{color:value ? "black":"white"}}>Switch Dark Theme</h1>
      <div className="themeSwitch">
      <ToggleSwitch/>
      </div>
    </div>
  );
}

export default App;
