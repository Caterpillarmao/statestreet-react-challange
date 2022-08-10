import { useParams } from 'react-router-dom';
import data from '../../data/data.json';

const TransationDetails = () => {
    let { id } = useParams();
    let obj = {};
    data.transactions.forEach(item => {
        if (item.account === id) obj = item;
    });
    return (
        <div className= "transaction-details">
            <div className="transaction-detalis-header"><h1>Transaction {obj.account}</h1></div> 
            <hr className="solid"></hr>
            <div className="transaction-detail-item"><div>Account No:</div>{obj.account}</div>
            <div className="transaction-detail-item"><div>Account Name:</div>{obj.accountName}</div>
            <div className="transaction-detail-item"><div>Currency Code:</div>{obj.currencyCode}</div>
            <div className="transaction-detail-item"><div>Amount:</div>{obj.amount}</div>
            <div className="transaction-detail-item"><div>Transaction Type:</div>{obj.transactionType}</div>
        </div>

    )
}

export default TransationDetails;