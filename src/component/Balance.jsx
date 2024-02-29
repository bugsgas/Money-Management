//component logic
import { useFundContext } from '../context/FundContext';
import ChartBar from './ChartBar';


export default function Wallet() {
  const { fund } = useFundContext();

  return (
    <div className='wallet-container'>
      <div className="wallet">
        <label>Balance Statistic</label>
        <div className="wallet-row">
          <div className="fund">
            <h2>${fund}</h2>
          </div>
          <div className="statistic">
            <ChartBar />
          </div>
        </div>
      </div>
    </div>
  );
}
