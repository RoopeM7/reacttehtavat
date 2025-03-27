import React, { useState } from "react";

function Display({ count }) {
  return <h2>Count: {count}</h2>;
}

function IncreaseButton({ onClick }) {
  return <button onClick={onClick}>Lisää</button>;
}

function DecreaseButton({ onClick }) {
  return <button onClick={onClick}>Vähennä</button>;
}

function ResetButton({ onClick }) {
  return <button onClick={onClick}>Nollaus</button>;
}

function DoubleIncreaseButton({ onClick }) {
  return <button onClick={onClick}>TuplaKasvatus</button>;
}

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);
  const doubleIncrease = () => setCount(count + 2);

  return (
    <div>
      <Display count={count} />
      <IncreaseButton onClick={increase} />
      <DecreaseButton onClick={decrease} />
      <ResetButton onClick={reset} />
      <DoubleIncreaseButton onClick={doubleIncrease} />
    </div>
  );
}

export default Counter;
