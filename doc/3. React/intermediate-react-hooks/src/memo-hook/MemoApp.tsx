import { useMemo, useState } from "react";
import "./MemoApp.css";

const MemoApp = () => {
  const [count, setCount] = useState(0);
  const [numberList, setNumberList] = useState([1, 2, 3, 4, 5]);

  console.log("App rendered!", { numberList });

  const expensiveCalculation = (numbers: number[]) => {
    console.log("Realizando un cálculo costoso...");
    return numbers.reduce((total, num) => total + num, 0);
  };

  const memoizedResult = useMemo(() => expensiveCalculation(numberList), [numberList]);
  // const memoizedResult = expensiveCalculation(numberList);

  return (
    <div className="App">
      <h1>useMemo Example</h1>
      <h2>Cálculo costoso: {memoizedResult}</h2>
      <button onClick={() => setCount(count + 1)}>Actualizar contador: {count}</button>
      <hr style={{ width: "280px", borderColor: "gray" }} />
      <button onClick={() => setNumberList([...numberList, numberList.length + 1])}>
        Añadir número a la lista
      </button>
    </div>
  );
};

export default MemoApp;
