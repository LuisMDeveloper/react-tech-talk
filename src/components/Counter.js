import { useEffect, useState } from 'react'

export function Counter() {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter1DidChange, setCounter1DidChange] = useState(false)

  const increaseCounter1 = () => {
    setCounter1((prevState) => prevState + 1)
  }
  const increaseCounter2 = () => {
    setCounter2((prevState) => prevState + 1)
  }

  useEffect(() => {
    if (counter1 >= 10) {
      setCounter1DidChange(true)
    }
  }, [counter1])

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
