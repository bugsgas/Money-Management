//styles
import './Dashboard.css'

//component
import { useName } from '../hooks/useName'
import Card from '../component/Card'
import TransferList from '../component/TransferList'
import Balance from '../component/Balance'
import PaymentList from '../component/PaymentList'


export default function Dashboard() {
  const { name } = useName()

  return (
    <div className='dashboard'>
      <header>
        <h2>Hello, {name}</h2>
        <p>Control your finance</p>
      </header>
      <div className="row">
        <Balance />
        <Card />
      </div>
      <div className="row">
        <TransferList />   
        <PaymentList />
      </div>
    
    </div>
  )
}
