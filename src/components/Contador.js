import React from "react";
import { useDispatch } from "react-redux"; //p mandar a ação pro reducer
import { useSelector } from "react-redux"; //importante p usar a ação aq
import {INCREMENT, DECREMENT} from '../actions/actions.js'

function Contador() {
  //ai vc me pergunta, pq state.counter? pq +1 usa state.(nomeDoReducer)
  const contador = useSelector((state) => { return state.counter;}); //aqui meu estado p usar na aplication
  const dispatch = useDispatch();

  function input(){ //aqui eu to pegando o valor do input
    return Number(document.getElementById('input').value);
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={() => {dispatch(INCREMENT(input()))}}>+</button> {/*Aqui to passando a ação com o valor q vai ser incrementado*/}
      <button onClick={() => {dispatch(DECREMENT(input()))}}>-</button>
      <input id="input" type='number'/>
    </div>
  );
}

export default Contador;
