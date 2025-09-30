import styles from './Registration.module.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    const [accept, setAccept] = useState(false);

    const handleRegister = () => {
        if (!accept) {
            alert("Вы должны согласиться с условиями!");
            return;
        }
        if (!name || !gmail || !password) {
            alert("Заполните все поля!");
            return;
        }
        const user = { name, gmail, password };
        localStorage.setItem(gmail, JSON.stringify(user));
        alert("Регистрация успешна!");
        navigate("/login")
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <h1 className={styles.hh1}>TODO</h1>
                <p className={styles.pa}>Зарегистрируйтесь, чтобы управлять вашими заданиями</p>
                <p>Your fullname*</p>
                <input value={name} onChange={(e) => setName(e.target.value)} className={styles.input} type="text" placeholder="Name" />
                <p>Email address*</p>
                <input value={gmail} onChange={(e) => setGmail(e.target.value)} className={styles.input} type="email" placeholder="Enter email address" />
                <p>Create password*</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} type="password" placeholder="Enter password" />
                <br />
                <Link to={"/login"}>
                    <a href="">Уже есть аккаунт? Войти!</a>
                </Link>
                <div className={styles.check}>
                    <input checked={accept} onChange={(e) => setAccept(e.target.value)} className={styles.checkbox} type="checkbox" id="agree" />
                    <label htmlFor="agree">I agree to terms & conditions</label>
                </div>
                <button onClick={handleRegister}>Register Account</button>
            </div>
        </div>
    );
}
export default Registration;