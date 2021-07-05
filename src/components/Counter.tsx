import { useSelector } from "react-redux";

interface ICount {
  counter: { count: number };
}

const Counter = () => {
  const count = useSelector<ICount>((state) => state.counter.count);

  return (
    <div>
      <h1>O contador é: {count}</h1>
    </div>
  );
};

export default Counter;
