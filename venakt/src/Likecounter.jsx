import React, { useState } from 'react';
import { createStore } from 'redux';
import reducer from './Reducer';
import { incrementNumber, decrementNumber } from './Action';

const store = createStore(reducer)


export default function Likecounter() {

  const [count, setCounter] = useState(0);

  const unsubscribe = store.subscribe(()=>{
    setCounter(store.getState().count)
  })  

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={()=>store.dispatch(incrementNumber())}>Like</button>
      <button onClick={()=>store.dispatch(decrementNumber())}>Unlike</button>
    </div>
  )
}