import '../css/Expense.css'
import PropTypes from 'prop-types'

function Expense({ data:{ name, amount } }) {
  return (
    <div className="card__container">
      <p className='card__name'>{name}</p>
      <p className='card__amount'>${amount}</p>
    </div>
  )
}

Expense.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Expense