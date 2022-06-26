import Expense from "./Expense"
import PropTypes from 'prop-types'

function List({ expenses }) {
  return (
    <>
      <h2 className="sub-title">List</h2>
      <div className="list__container">
        {
          expenses.length > 0 ?
          expenses.map(item => (
            <Expense 
              key={item.id}
              data={item}
            />
          ))
          :
          <h3 className="text">Nothing yet!</h3>
        }
      </div>
    </>
  )
}

List.propTypes = {
  expenses: PropTypes.array.isRequired
}

export default List