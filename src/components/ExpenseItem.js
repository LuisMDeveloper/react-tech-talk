export const ExpenseItem = (props) => {
  return (
    <div className="alert alert-secondary">
      {props.title} - <b>${props.price.toFixed(2)}</b>
    </div>
  )
}
