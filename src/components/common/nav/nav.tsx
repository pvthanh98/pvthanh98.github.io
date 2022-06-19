import { Link } from "react-router-dom";
import styles from './nav.module.css';

export const NavComponent = () => {
    return <ul className={styles.nav}>
        <li>
            <h3>ThanhPhan</h3>
        </li>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li
            className={styles.liContainer}
        >
            <Link to="/finance">Finance</Link>
            <ul
                className={styles.ulContainer}
            >
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
            </ul>
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
        <li>
            <Link to="/user">User</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/login">Sign In</Link>
        </li>
    </ul>
}
