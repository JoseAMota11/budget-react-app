import '../css/Form.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'
import shortid from 'shortid'

function Form({ setExpense, setCreateExpense }) {

  const [error, setError] = useState([false, ""])
  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)

  const invokeError = (message) => {
    setError([true, message])
      setTimeout(() => {
        setError([false, ""])
      }, 3000)
      return
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (amount < 0) invokeError("The budget must be a positive number.")
    else if (isNaN(amount)) invokeError("The budget is not defined.")
    else if (amount === 0) invokeError("The budget cannot be 0.")
    else if (name.trim() === "") invokeError("The budget name is not defined.")
    else {
      const expenses = {
        name,
        amount,
        id: shortid.generate()
      }
      setExpense(expenses)
      setCreateExpense(true)
      setName("")
      setAmount(0)
    }
  }

  return (
    <>
      <form className="add__form" onSubmit={handleSubmit}>
        <h2 className="sub-title">Add your budget here</h2>
        <div className="field-a">
          <label>Budget Name:</label>
          <input
            type="text"
            className="amount input"
            placeholder="E.g. Transportation"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="field-b">
          <label>Budget Amount:</label>
          <input
            type="number"
            className="amount input"
            placeholder="E.g. $5,000"
            value={amount}
            onChange={e => setAmount(parseInt(e.target.value, 10))}
          />
        </div>
        <button type="submit">Add Budget</button>
      </form>
      {error[0] ? <Error message={error[1]}/> : null}
    </>
  )
}

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired
}

export default Form