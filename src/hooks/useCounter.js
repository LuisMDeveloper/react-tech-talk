import { useState } from 'react'

const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter((prevState) => prevState + 1)
  }

  return {
    counter,
    increaseCounter,
  }
}

export default useCounter
