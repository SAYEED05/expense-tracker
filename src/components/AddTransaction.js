import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onsubmit = e => {
        e.preventDefault();


        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    return (
        <>
            <h3>Add Transaction</h3>

            <form onSubmit={onsubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} type='text' placeholder='Enter Text ...' />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>Amount<br />
                    (negative - expense, positive - income)
                    </label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type='number' placeholder='Enter Amount ' />
                </div>
                <button className='btn'>Add Transaction</button>

            </form>
        </>

    )
}
