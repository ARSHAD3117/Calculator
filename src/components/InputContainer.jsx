import React from 'react';
import styles from "./InputContainer.module.css"

const InputContainer = ({inputValue}) => {
  return (
    <div>
        <input type='text' placeholder='Start Calculating...' className={styles.input} value={inputValue} readOnly></input>
    </div>
  )
}

export default InputContainer;