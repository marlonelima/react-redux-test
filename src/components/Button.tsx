import store from "../redux/store";

const Button = () => {
  return (
    <div>
      <button onClick={() => store.dispatch({ type: "INCREMENT" })}>
        INCREMENT
      </button>
      <button onClick={() => store.dispatch({ type: "DECREMENT" })}>
        DECREMENT
      </button>
    </div>
  );
};

export default Button;
