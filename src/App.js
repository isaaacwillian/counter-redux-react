import "./App.css";
import Contador from "./components/Contador";
import Cabecalho from "./components/Cabecalho";
import { createStore } from "redux";
import contadorReducer from "./reducers/contadorReducer";
import { Provider } from "react-redux";

function App() {
  const store = createStore(contadorReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <Contador></Contador>
        <Cabecalho></Cabecalho>
      </Provider>
    </div>
  );
}

export default App;
