import ExpenseItem from './ExpenseItem';
import style from './ExpensesList.module.css';

const ExpensesList = props => {
    
    if (0 === props.items.length) {
        return <h2 className={style['expenses-list__fallback']}>No expenses found!</h2>;
    }

    return <ul className={style['expenses-list']}>
        {props.items.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
    </ul>
}

export default ExpensesList;