import './Sidebar.css'
import ExpenseIncome from '../component/ExpenseIncome'
import Premium from '../component/Premium'
import Analytics from '../component/Analytics'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ExpenseIncome />
      <Analytics />
      <Premium />
    </div>
  )
}
