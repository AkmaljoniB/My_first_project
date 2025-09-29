import styles from './Registration.module.css'
import { Link } from "react-router-dom";

function Registration() {
    const handleRegister = () => {
        const user = {
            name, gmail, password, agree: isChecked, tasks: []
        }
        localStorage.setItem(gmail, JSON.stringify(user));
        alert("Succesfull")
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <h1 className={styles.hh1}>TODO</h1>
                <p className={styles.pa}>Зарегистрируйтесь, чтобы управлять вашими заданиями</p>
                <p>Your fullname*</p>
                <input className={styles.input} type="text" placeholder="Name" />
                <p>Email address*</p>
                <input className={styles.input} type="email" placeholder="Enter email address" />
                <p>Create password*</p>
                <input className={styles.input} type="password" placeholder="Enter password" />
                <br />
                <div className={styles.check}>
                    <input className={styles.checkbox} type="checkbox" id="agree" />
                    <label htmlFor="agree">I agree to terms & conditions</label>
                </div>
                <Link to="/logIn">
                    <button onClick={handleRegister}>Register Account</button>
                </Link>
            </div>
        </div>
    );
}
export default Registration;