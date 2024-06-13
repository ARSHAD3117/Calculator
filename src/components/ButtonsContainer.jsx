import React from "react";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer =({handleButtonClick}) =>{
    let buttons = ["C","1","2","+","3","4","-","5","6","*","7","8","/","9","0",".","="]
    return (
        <div className={styles.button}>
            {buttons.map(button =>
            <button 
            key={button}
            className={`${styles.singleButton} ${button==="=" && styles.equalButtton}`}
            onClick={()=>handleButtonClick(button)}
            >{button}</button>
            )}
        </div>
    )
}

export default ButtonsContainer;