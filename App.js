import ComponentA from "./components/componentA/ComponentA";
import ComponentB from "./components/componentB/ComponentB";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { initialState, Reducer } from "./redux/Store";
// import './App.css';

const store= createStore(Reducer,initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComponentA />
        <ComponentB />
      </div>
    </Provider>
  );
}

export default App;
