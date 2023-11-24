import React from 'react';
import CartTable from './components/CartTable.tsx';
import './App.css';
import 'primeflex/primeflex.css';

const CartApp = () => {
    return (
        <div className='font-Ubuntu'>
            <CartTable />
        </div>
    )
}

export default CartApp;