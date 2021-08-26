import './App.css'
import { SimpleForm } from './components/SimpleForm'

const App = () => {
  return (
    <div className="container">
      <br />
      <div className="card">
        <div className="card-header">Form</div>
        <div className="card-body">
          <SimpleForm />
        </div>
      </div>
    </div>
  )
}

export default App
