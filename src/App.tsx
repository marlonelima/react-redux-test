import { Provider } from "react-redux";

import store from "./redux/store";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <div>
        <button onClick={() => store.dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <button onClick={() => store.dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </button>
      </div>
    </Provider>
  );
}

export default App;
