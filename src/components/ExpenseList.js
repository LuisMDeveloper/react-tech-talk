import { ExpenseItem } from './ExpenseItem'

export const ExpenseList = (props) => {
  return (
    <div className="card">
      <div className="card-header">List</div>
      <div className="card-body">
        {props.items.map((item, index) => (
          <ExpenseItem key={index} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  )
}
