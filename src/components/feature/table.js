import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Table = (props) => {
    const transactions = props.transactions;
    const columnDefs = [
        {
            field: 'account',
            cellRenderer: function(params)  {
                return <a href={`/${params.data.account}`} >{params.data.account}</a>;
            }
        },
        { field: 'accountName' },
        { field: 'currencyCode' },
        { field: 'amount' },
        { field: 'transactionType' }
    ];

    return (
        <div className="ag-theme-alpine">
            <AgGridReact
                rowData={transactions}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>

    )
}

export default Table;