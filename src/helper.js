export const budgetReviewer = (budget, remaining) => {
  let className
  if ((budget / 4) > remaining) {
    className = "danger"
  } else if ((budget / 2) > remaining) {
    className = "warning"
  } else {
    className = "success"
  }
  return className
}