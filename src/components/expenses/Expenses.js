import Card from '../ui/Card';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
        </Card>
    );
}

export default Expenses;