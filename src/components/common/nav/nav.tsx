import { Link } from "react-router-dom";
import styles from './nav.module.css';

export const NavComponent = () => {
    return <ul className={styles.nav}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/finance">Dashboard</Link>
        </li>
        <li>
            <Link to="/finance/expense-daily">Daily</Link>
        </li>
        <li>
            <Link to="/finance/expense-by-category">Category</Link>
        </li>
        <li>
            <Link to="/finance/monthly-limitation">Limit</Link>
        </li>
        <li>
            <Link to="/finance/expense-by-month">Year</Link>
        </li>
        <li>
            <Link to="/cv">My CV</Link>
        </li>
    </ul>
}
