import { useReducer} from 'react'
import styles from './App.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import ButtonsContainer from './components/ButtonsContainer'
import InputContainer from './components/InputContainer'
import InputValueContexProvider from './store/inputValuesContext'


function App() {

  return (
    <InputValueContexProvider>
    <div className={styles.container}>
      <InputContainer></InputContainer>
      <ButtonsContainer></ButtonsContainer>
    </div>
    </InputValueContexProvider>
  )
}

export default App
