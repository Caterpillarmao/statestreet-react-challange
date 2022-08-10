import { useState } from 'react';
import data from '../../data/data.json';
import Filter from '../feature/filter';
import { accountNames, transactionTypes } from '../const'
import Table from '../feature/table';

const Widget = () => {
    const [accountNameFilters, setAccountNameFilters] = useState([]);
    const [transactionTypeFilters, setTransactionTypeFilters] = useState([]);

    // for convert transaction type filter name didn't match the data transaction type
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
   
    const getData = () => {
        if (accountNameFilters.length > 0 && transactionTypeFilters.length > 0) {
            return data.transactions.filter(item => accountNameFilters.indexOf(item.accountName) >= 0 && transactionTypeFilters.indexOf(capitalizeFirstLetter(item.transactionType)) >= 0);
        } else if ((accountNameFilters.length === 0 && transactionTypeFilters.length > 0) || (accountNameFilters.length > 0 && transactionTypeFilters.length === 0)) {
            return data.transactions.filter(item => accountNameFilters.indexOf(item.accountName) >= 0 || transactionTypeFilters.indexOf(capitalizeFirstLetter(item.transactionType)) >= 0);
        }
        return data.transactions;
    }
    return (
        <div className="site-card-wrapper">
            <div className="site-header"><div>My Transanctions</div></div>
            <hr className="solid"></hr>
            <div className="site-body">
                <div className="left-panel">
                    <div className="filter-header-top">Filters</div>
                    <Filter title='Account Name' filterNames={accountNames} setFitler={setAccountNameFilters} filterValues={accountNameFilters} />
                    <Filter title='Transaction Type' filterNames={transactionTypes} setFitler={setTransactionTypeFilters} filterValues={transactionTypeFilters} />
                </div>
                <div className="right-panel">
                    <Table transactions={getData()}/>
                </div>
            </div>
        </div>
    );
}

export default Widget;