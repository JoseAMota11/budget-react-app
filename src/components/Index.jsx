import '../css/Index.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

function Index({ setBudget, setRemaining }) {

  const [error, setError] = useState([false, ""])
  const [amount, setAmout] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()

    if (amount < 1 || isNaN(amount)) {
      setError([true, "Please, set a valid value!"])
      setTimeout(() => {
        setError([false, ""])
      }, 3000)
      return
    } else {
      setBudget(amount)
      setRemaining(amount)
    }
  }

  return (
    <main className="main__content">
      <h2 className='sub-title'>Set your budget</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="number"
          className="amount"
          placeholder="Set your budget"
          onChange={e => setAmout(parseInt(e.target.value, 10))}
        />
        <button type="submit">Define Budget</button>
      </form>
      {error[0] ? <Error message={error[1]}/> : null}
    </main>
  )
}

Index.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired
}

export default Index