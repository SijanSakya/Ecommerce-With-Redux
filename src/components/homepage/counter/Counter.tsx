"use client";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/redux/features/counter/counterSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();
  return (
    <div className="">
      <p>{count}</p>
      <div className="flex gap-5">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
