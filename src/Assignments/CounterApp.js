import React, { useState } from "react";

export function CounterApp() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2 className="text-center">Counter App</h2>
      <div className="w-25 d-flex justify-content-between m-auto align-items-center">
        <button
          className="btn  btn-primary "
          onClick={() => {
            setCount(count + 1);
          }}
        >
          
          <i className="fas fa-plus"></i>
        </button>
        <h4 className="font-weight-bold mb-0">{count}</h4>
        <button
          className="btn btn-primary"
          onClick={() => {
            setCount(count - 1);
          }}
        >

          <i className="fas fa-minus"></i>
        </button>
      </div>
    </>
  );
}
