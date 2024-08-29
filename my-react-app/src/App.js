import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
const ACTIONS = {
  increment: 'increment',
  decrement: 'decrement'
}

const reducer = (state, action) => {
  switch(action.type){
    case ACTIONS.increment:
      return {...state, count: state.count +1};
    case ACTIONS.decrement:
      return {...state, count: state.count -1};
    default: throw new Error('Wrong Action')
  }

//instead of switch case (lines 10-16), we can have the body of the reducer described with if-function
// if(action.type === ACTIONS.increment){
//   return {...state, count: state.count +1}}
// else if (action.type === ACTIONS.decrement){
//   if(state.count === 0){
//     alert('Count cannot be less than zero')
//     return state.count
//   }
//   return {...state, count: state.count -1}
// }
// else {
//   throw new Error('Wrong Action')
// }
  }


function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0, user: 'g', age: 24})
  const handleIncrement = () => {
    dispatch({type: ACTIONS.increment})
  
  }

  const handleDecrement = () => {
    dispatch({type: ACTIONS.decrement})
  
  }
  console.log(state);
  
  return (
    <div className="App">
      <button onClick = {handleIncrement}>Increment</button>
      <p>Count: {state?.count}</p>
      <p>User: {state?.user}</p>
      <p>Age: {state?.age}</p>
      <button onClick = {handleDecrement}>Decrement</button>
      <button onClick = {()=> dispatch({type: 'asdasda'})}>Wrong Action</button>
      
    </div>
  );
}

export default App;
