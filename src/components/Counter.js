import { useCallback, useEffect, useState } from 'react'
import useCounter from '../hooks/useCounter'

export function Counter() {
  const { counter: counter1, increaseCounter: increaseCounter1 } = useCounter()
  const { counter: counter2, increaseCounter: increaseCounter2 } = useCounter()
  const [counter1DidChange, setCounter1DidChange] = useState(false)

  const doSomething = () => {
    if (counter1 >= 10) {
      setCounter1DidChange(true)
    }
  }

  const doSomethingCallback = useCallback(doSomething, [counter1])

  useEffect(() => {
    doSomethingCallback()
  }, [doSomethingCallback])

  return (
    <div>
      <h1>{counter1}</h1>
      <button
        type="button"
        className={`btn ${counter1DidChange ? 'btn-danger' : 'btn-primary'} `}
        onClick={increaseCounter1}
      >
        Increase Counter #1
      </button>
      <h1>{counter2}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={increaseCounter2}
      >
        Increase Counter #2
      </button>
    </div>
  )
}
