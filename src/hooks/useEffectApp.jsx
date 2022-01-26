import React, { StrictMode, useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const sayHello = () => console.log("hello");

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  useEffect(sayHello, [aNumber]);

  return (
    <div>
      <div>Hi</div>
      <button type="button" onClick={() => setNumber(number + 1)}>
        {number}
      </button>
      <button type="button" onClick={() => setAnumber(aNumber + 1)}>
        {aNumber}
      </button>
    </div>
  );
};

export default App;

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );
