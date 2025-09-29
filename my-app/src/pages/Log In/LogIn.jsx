import styles from './LogIn.module.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";

function LogIn() {
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const savedUser = JSON.parse(localStorage.getItem("user"))
        if (!savedUser) {
            alert("Пользователь не найден! Сначала зарегистрируйтесь.");
            return;
        }
        if (savedUser.gmail === gmail && savedUser.password === password) {
            alert("Вход успешен!");
        } else {
            alert("Неверный Gmail или пароль!");
        }
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <h1 className={styles.hh1}>TODO</h1>
                <p className={styles.pa}>Войдите в свой аккаунт, чтобы управлять вашими заданиями</p>
                <p>Email address</p>
                <input value={gmail} onChange={(e) => setGmail(e.target.value)} className={styles.input} type="email" placeholder="Enter email address" />
                <p>Your password</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} type="password" placeholder="Enter password" />
                <Link to="/main">
                    <button onClick={handleLogin}>Log In</button>
                </Link>
            </div>
        </div>
    );
}
export default LogIn;