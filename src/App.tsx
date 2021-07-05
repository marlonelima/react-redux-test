import { Provider } from "react-redux";

import store from "./redux/store";
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Button />
    </Provider>
  );
}

export default App;
