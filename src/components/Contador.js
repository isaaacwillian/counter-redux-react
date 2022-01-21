import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {INCREMENT, DECREMENT} from '../actions/actions.js'

function Contador() {
  const contador = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  function input(){
    return Number(document.getElementById('input').value);
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={() => {dispatch(INCREMENT(input()))}}>+</button>
      <button onClick={() => {dispatch(DECREMENT(input()))}}>-</button>
      <input id="input" type='number'/>
    </div>
  );
}

export default Contador;
