
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          {publicRoutes.map(route => <Route {...route}/>)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
