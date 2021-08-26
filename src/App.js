import './App.css'
import { useState } from 'react'
import { Counter } from './components/Counter'

const App = () => {
  const [showComponent, setShowComponent] = useState(false)

  const toggleCounter = () => {
    setShowComponent((prevState) => !prevState)
  }

  return (
    <div className="container">
      <br />
      {showComponent && <Counter />}
      <br />
      <button className="btn btn-primary" onClick={toggleCounter}>
        Toggle Counter
      </button>
    </div>
  )
}

export default App
