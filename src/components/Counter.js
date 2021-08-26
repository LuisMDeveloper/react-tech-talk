import { useState } from 'react'

export function Counter() {
  const [counter1, setCounter1] = useState(0)

  const increaseCounter1 = () => {
    setCounter1((prevState) => prevState + 1)
  }

  return (
    <div>
      <h1>{counter1}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={increaseCounter1}
      >
        Increase Counter #1
      </button>{' '}
    </div>
  )
}
