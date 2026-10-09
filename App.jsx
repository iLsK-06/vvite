import Input from "./Input.jsx"
import Button from "./Button.jsx"
import Incrementingnumber from "./Incrementingnumber.jsx"
import Incrementbutton from "./Incrementbutton.jsx"
import Decrementbutton from "./Decrementbutton.jsx"
import {useState} from "react"
function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [total, setTotal] = useState(null);
  const [number, setNumber] = useState('');

  const calculateTotal = () => {
    setTotal(Number(firstNumber) + Number(secondNumber))
  };
  const increment = () => {
    setNumber(Number(number + 1))
  }

  const decrement = () => {
    setNumber(Number(number - 1))
  }
  return (
    <>
    <Input number1={firstNumber} setnumber1={setFirstNumber} number2={secondNumber} setnumber2={setSecondNumber}/>
    <Button onCalculate={calculateTotal} />
    {total !== null && <h3>Total: {total}</h3>}
    <Incrementingnumber Number={number}/>
    <Incrementbutton Increment={increment}/>
    <Decrementbutton Decrement={decrement}/>
    </>
  )
}
export default App