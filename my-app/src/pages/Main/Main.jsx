import { useState, useEffect } from "react";
import trash_icon from "../../assets/trash-icon.png";
import change_icon from "../../assets/change-icon.png";
import pointer_bottom from "../../assets/pointer-bottom.png"
import pointer_right from "../../assets/pointer-right.png"
import check_mark from "../../assets/check_mark.png"
import styles from "./Main.module.css";
import { useLocation } from "react-router-dom";

const Main = () => {
    const location = useLocation();
    const username = location.state?.gmail;
    const [tasks, setTasks] = useState([]);
    const [endtasks, setEndTasks] = useState([]);
    const [header, setHeader] = useState("");
    const [description, setDescription] = useState("");
    const [activeTask, setActiveTask] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        if (username) {
            const savedTasks = JSON.parse(localStorage.getItem(`tasks_${username}`)) || [];
            const savedEndTasks = JSON.parse(localStorage.getItem(`endtasks_${username}`)) || [];
            setTasks(savedTasks);
            setEndTasks(savedEndTasks);
        }
    }, [username]);

    useEffect(() => {
        if (username) {
            localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
        }
    }, [tasks, username]);

    useEffect(() => {
        if (username) {
            localStorage.setItem(`endtasks_${username}`, JSON.stringify(endtasks));
        }
    }, [endtasks, username]);

    const handleAdd = () => {
        if (editIndex !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = { header, description };
            setTasks(updatedTasks);
            setEditIndex(null);
        } else if (header.trim() !== "" && description.trim() !== "") {
            setTasks([...tasks, { header, description }]);
        }
        setHeader("");
        setDescription("");
    }

    const handleDelete = (header, ind) => {
        if (ind === 0) {
            const newTasks = tasks.filter((_, i) => i !== header);
            setTasks(newTasks);
        } else {
            const newTasks = endtasks.filter((_, i) => i !== header);
            setEndTasks(newTasks);
        }
    }

    const handleEdit = (index) => {
        setHeader(tasks[index].header);
        setDescription(tasks[index].description);
        setEditIndex(index);
    };

    const handleEnd = (index, title, desc) => {
        const obj = { title: title, desc: desc }
        setEndTasks([...endtasks, obj])
        const newArr = tasks.filter((_, i) => i !== index)
        setTasks(newArr)
    }
    console.log(endtasks);
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <h2>Привет, {username}!</h2>
                <h1>Добавить Задачу</h1>
                <input value={header} onChange={e => setHeader(e.target.value)} className={styles.theme} type="text" placeholder="Название Задачи" />
                <textarea value={description} onChange={e => setDescription(e.target.value)} className={styles.description} placeholder="Описание" />
                <button onClick={handleAdd}>{editIndex !== null ? "Сохранить" : "Добавить"}</button>
            </div>
            <div className={styles.rightSide}>
                <h1>Задачи</h1>
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index} className={styles.li}>
                            <div className={styles.textBlock}>
                                <h3 className={styles.head}>{task.header}</h3>
                                {activeTask == index && <p className={styles.desc}>{task.description}</p>}
                            </div>
                            <div className={styles.btns}>
                                <button className={styles.btn} onClick={() => setActiveTask(activeTask === index ? null : index)}>
                                    <img src={activeTask == index ? pointer_right : pointer_bottom} alt="pointer" />
                                </button>
                                <button onClick={() => handleEnd(index, task.header, task.description)} className={styles.btn}>
                                    <img src={check_mark} alt="check mark" />
                                </button>
                                <button onClick={() => { handleDelete(index, 0); }} className={styles.btn}>
                                    <img src={trash_icon} alt="icon" />
                                </button>
                                <button onClick={() => { handleEdit(index) }} className={styles.btn}>
                                    <img src={change_icon} alt="icon" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ol>
                <h1>Законченные дела</h1>
                <ol>
                    {endtasks.map((task, index) => (
                        <li key={index} className={styles.li}>
                            <div className={styles.textBlock}>
                                <h3 className={styles.head}>{task.title}</h3>
                            </div>
                            <div className={styles.btns}>
                                <button onClick={() => { handleDelete(index, 1); }} className={styles.btn}>
                                    <img src={trash_icon} alt="icon" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
export default Main;
