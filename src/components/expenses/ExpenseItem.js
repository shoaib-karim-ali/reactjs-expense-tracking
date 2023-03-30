import Card from '../ui/card/Card';
import ExpenseDate from './ExpenseDate'; 
import style from './ExpenseItem.module.css';

const ExpenseItem = props => {
    return (
        <li>
            <Card className={style['expense-item']}>
                <ExpenseDate date={props.date} />
                <div className={style['expense-item__description']}>
                    <h2>{props.title}</h2>
                    <div className={style['expense-item__price']}>${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;