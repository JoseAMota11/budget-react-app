import './css/App.css'
import Index from './components/Index'
import { useState, useEffect } from 'react'
import Form from './components/Form'
import List from './components/List'
import BudgetControl from './components/BudgetControl'

function App() {
  const [budget, setBudget] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [expense, setExpense] = useState({})
  const [createExpense, setCreateExpense] = useState(false)

  useEffect(() => {
    if (createExpense) {
      setExpenses([
        ...expenses,
        expense
      ])
    }

    const remainingBudget = remaining - expense.amount
    setRemaining(remainingBudget)

    setCreateExpense(false)
  }, [expense])

  return (
    <div className="app__container">
      <header>
        <h1 className="title">Weekly Expense</h1>
      </header>
      {
        budget === 0 ?
        <Index
          setBudget={setBudget}
          setRemaining={setRemaining}
        />
        :
        <div className="form__container">
          <div className="side-a">
            <Form 
              setExpense={setExpense}
              setCreateExpense={setCreateExpense}
            />
          </div>
          <div className="side-b">
            <List 
              expenses={expenses}
            />
            <BudgetControl 
              budget={budget}
              remaining={remaining}
            />
          </div>
        </div>
      }
    </div>
  )
}

export default App