import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import ButtonsContainer from './components/ButtonsContainer'
import InputContainer from './components/InputContainer'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState("")

  const handleButtonClick = (value) => {
    if(value === "C"){
      setInputValue("")
    }
    else if(value === "=") {
      let calculatedValue = eval(inputValue)
      setInputValue(calculatedValue)
    }
    else {
      let totalValue = inputValue + value
    setInputValue(totalValue)
    }
  }

  return (
    <div className={styles.container}>
      <InputContainer inputValue={inputValue}></InputContainer>
      <ButtonsContainer handleButtonClick={handleButtonClick}></ButtonsContainer>
    </div>
  )
}

export default App
