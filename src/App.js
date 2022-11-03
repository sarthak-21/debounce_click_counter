import "./styles.css";
import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  const changeHandler = debounce(() => increaseCount());

  const increaseCount = () =>{
    setCounter(count => count + 1);
  }

  const reset = () =>{
    setCounter(0);
  }

  return (
    <div className="App">
      <h1>Click Counter</h1>
      <button className="button-style" onClick={changeHandler}>Click</button>
      <h3 className="count-value">{counter}</h3>
      <button className="button-style" onClick={reset}>Reset Count</button>
    </div>
  );
}
