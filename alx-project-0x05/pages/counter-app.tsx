import { useCount } from "@/context/CountContext";

const CounterApp = () => {
  const { count, increment, decrement } = useCount();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <p className="text-xl mb-2">Current Count: {count}</p>
      <button
        className="bg-green-500 text-white px-4 py-2 mr-2"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterApp;
