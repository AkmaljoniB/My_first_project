import { useState } from "react";
import trash_icon from "../../assets/trash-icon.png";
import change_icon from "../../assets/change-icon.png";
import styles from "./Main.module.css";

const Main = () => {
    const [tasks, setTasks] = useState([]);
    const [header, setHeader] = useState("");
    const [description, setDescription] = useState("");
    const [activeTask, setActiveTask] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

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

    const handleDelete = (header) => {
        const newTasks = tasks.filter((_, i) => i !== header)
        setTasks(newTasks)
    }

    const handleEdit = (index) => {
        setHeader(tasks[index].header);
        setDescription(tasks[index].description);
        setEditIndex(index);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <h1>Добавить Задачу</h1>
                <input value={header} onChange={e => setHeader(e.target.value)} className={styles.theme} type="text" placeholder="Название Задачи" />
                <textarea value={description} onChange={e => setDescription(e.target.value)} className={styles.description} placeholder="Описание" />
                <button onClick={handleAdd}>{editIndex !== null ? "Сохранить" : "Добавить"}</button>
            </div>
            <div className={styles.rightSide}>
                <ol className={styles.ol}>
                    {tasks.map((task, index) => (
                        <li key={index} className={styles.li} onClick={() => setActiveTask(activeTask === index ? null : index)}>
                            <div className={styles.textBlock}>
                                <h3 className={styles.head}>{task.header}</h3>
                                {activeTask == index && <p className={styles.desc}>{task.description}</p>}
                            </div>
                            <div className={styles.btns}>
                                <button onClick={(e) => {
                                    e.stopPropagation(); handleDelete(index);
                                }} className={styles.delete_btn}>
                                    <img src={trash_icon} alt="icon" />
                                </button>
                                <button onClick={() => handleEdit(index)} className={styles.change_btn}>
                                    <img src={change_icon} alt="icon" />
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
