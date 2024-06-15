import { createContext,useReducer } from "react";

export const inputValueContex = createContext({
    inputValue:"",
    handleButtonClick:() => {}
})


const reducerFunction = (currentValue,action) => {
    if(action.type === 'START_AGAIN'){
      return "";
    }
    else if(action.type === 'CALCULATE'){
     let calculatedValue = eval(currentValue)
     return calculatedValue;
    }
    else if (action.type === 'APPEND_TEXT'){
     let totalValue = currentValue + action.payload.value;
       return totalValue;
    }
 }

const InputValueContexProvider = ({children}) => {
    const [inputValue, dispatchInputValue] = useReducer(reducerFunction,"")

    const handleButtonClick = (value) => {
      let newAction = {}
      if(value === "C"){
        newAction = {
          type : "START_AGAIN",
          payload :{
            value : value
          }
        }
      }
      else if(value === "=") {
        newAction = {
          type : "CALCULATE",
          payload :{
            value : value
          }
        }
      }
      else {
        newAction = {
          type : "APPEND_TEXT",
          payload :{
            value : value
          }
        }
      }
      dispatchInputValue(newAction)
    }

    return (
        <inputValueContex.Provider value={{
            inputValue,
            handleButtonClick
          }}>
          {children}
         </inputValueContex.Provider>
    )

}

export default  InputValueContexProvider ;