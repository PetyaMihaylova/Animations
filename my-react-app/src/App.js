import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

const reducer = (state, action) => {
if(action.type ==='increment'){
  return {count: state.count +1}}
else if (action.type === 'decrement'){
  if(state.count === 0){
    alert('Count cannot be less than zero')
    return state
  }
  return {count: state.count -1}
}

  }



function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  const handleIncrement = () => {
    dispatch({type: 'increment'})
  
  }

  const handleDecrement = () => {
    dispatch({type: 'decrement'})
  
  }
  return (
    <div className="App">
      <button onClick = {handleIncrement}>Increment</button>
      <p>Count: {state.count}</p>
      <button onClick = {handleDecrement}>Decrement</button>
      
    </div>
  );
}

export default App;
