import "./styles.css";
import { useState } from "react";

export default function App() {
  //現在のカウントを引数で受け取れる
  const [count, setCount] = useState(0);

  const onCkickAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onCkickPull = (prevCount) => {
    setCount((prevCount) => prevCount - 1);
  };
  const onCkickReset = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <button onClick={onCkickAdd}>ボタン　+1</button>
      <button onClick={onCkickPull}>ボタン　-1</button>
      <button onClick={onCkickReset}>リセット</button>
      <p>カウント：{count}</p>
    </div>
  );
}
