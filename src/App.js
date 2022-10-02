import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes/routes";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map(route => <Route {...route}/>)}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
