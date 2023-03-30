import { useState } from 'react';
import Card from '../ui/card/Card';
import ExpensesList from "./ExpensesList";
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import style from "./Expenses.module.css";

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className={style['expenses']}>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;