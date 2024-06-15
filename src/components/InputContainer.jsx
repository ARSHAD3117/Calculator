import React from 'react';
import styles from "./InputContainer.module.css"
import {inputValueContex} from '../store/inputValuesContext';
import { useContext } from 'react';

const InputContainer = () => {
  const {inputValue} = useContext(inputValueContex)
  return (
    <div>
        <input type='text' placeholder='Start Calculating...' className={styles.input} value={inputValue} readOnly></input>
    </div>
  )
}

export default InputContainer;