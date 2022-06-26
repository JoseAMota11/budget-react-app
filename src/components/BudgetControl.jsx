import PropTypes from 'prop-types'
import { budgetReviewer } from '../helper'

function BudgetControl({ budget, remaining }) {
  return (
    <div className="budget">
      <div>
        Budget: ${budget}
      </div>
      <div>
        Remaining: <span className={budgetReviewer(budget, remaining)}>${remaining}</span>
      </div>
    </div>
  )
}

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
}

export default BudgetControl