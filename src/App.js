import Contador from "./components/Contador";
import Cabecalho from "./components/Cabecalho";
import { createStore, combineReducers } from "redux"; //combineReducers p usar +1 reducer
import contadorReducer from "./reducers/contadorReducer"; //importante
import { Provider } from "react-redux"; //importante

function App() {

  const allReducers = combineReducers({counter: contadorReducer}) //aq a gente pôe todos os reducers e o nome deles
  const store = createStore(allReducers); //aqui eu crio todos os reducers

  return (
    <div className="App">
       <Provider store={store}> {/*Colocar os componentes dentro do Provider */}
        <Contador></Contador>
        <Cabecalho></Cabecalho>
      </Provider>
    </div>
  );
}

export default App;
