import './App.css'
import { ExpenseList } from './components/ExpenseList'

const fakeItems = [
  { id: 'item1', title: 'Test Item 1', price: 234.0 },
  { id: 'item2', title: 'Test Item 2', price: 45.0 },
  { id: 'item3', title: 'Test Item 3', price: 233.0 },
  { id: 'item4', title: 'Test Item 4', price: 67.0 },
  { id: 'item5', title: 'Test Item 5', price: 426.0 },
  { id: 'item6', title: 'Test Item 6', price: 342.0 },
]

const App = () => {
  return (
    <div className="container">
      <br />
      <ExpenseList items={fakeItems} />
    </div>
  )
}

export default App
