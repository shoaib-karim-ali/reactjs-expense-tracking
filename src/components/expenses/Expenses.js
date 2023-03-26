import { useState } from 'react';
import Card from '../ui/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import "./Expenses.css";

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
        </Card>
    );
}

export default Expenses;