import { useState } from 'react';
import style from './ExpenseForm.module.css';

const ExpenseForm = props => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const submitHandler = event => {
        event.preventDefault();
    
        const expenseData = {
            title: userInput.title,
            amount: +userInput.amount,
            date: new Date(userInput.date)
        };

        props.onSaveExpenseData(expenseData);
        setUserInput({
            title: '',
            amount: '',
            date: ''
        });
    }
    
    const titleHandler = event => {
        setUserInput(preVal => {
            return {
                ...preVal,
                title: event.target.value
            }
        });
    }

    const amountHandler = event => {
        setUserInput(preVal => {
            return {
                ...preVal,
                amount: event.target.value
            }
        });
    }

    const dateHandler = event => {
        setUserInput(preVal => {
            return {
                ...preVal,
                date: event.target.value
            }
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={style['new-expense__controls']}>
                <div className={style['new-expense__control']}>
                    <label>Title</label>
                    <input
                        type='text'
                        value={userInput.title}
                        onChange={titleHandler} />
                </div>
                <div className={style['new-expense__control']}>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={userInput.amount}
                        onChange={amountHandler} />
                </div>
                <div className={style['new-expense__control']}>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={userInput.date}
                        onChange={dateHandler} />
                </div>
            </div>
            <div className={style['new-expense__actions']}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;