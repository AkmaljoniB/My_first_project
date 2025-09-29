import styles from './LogIn.module.css'
import { Link } from "react-router-dom";

function Registration() {
    const handleLogIn = () => {
        const data = localStorage(gmail);

        if (!data) {
            alert("Такого пользователя нет!")
            return
        }
        const user = JSON.parse(data);

        if (user.password === password) {
            alert(`Добро пожаловать, ${user.name}!`);
            localStorage.setItem("currentUser", gmail);
        } else {
            alert("Неверный пароль");
        }
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <h1 className={styles.hh1}>TODO</h1>
                <p className={styles.pa}>Войдите в свой аккаунт, чтобы управлять вашими заданиями</p>
                <p>Email address</p>
                <input className={styles.input} type="email" placeholder="Enter email address" />
                <p>Your password</p>
                <input className={styles.input} type="password" placeholder="Enter password" />
                <Link to="/main">
                    <button>Log In</button>
                </Link>
            </div>
        </div>
    );
}
export default Registration;