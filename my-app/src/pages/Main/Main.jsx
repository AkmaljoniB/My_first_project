import { useState } from "react";
import trash_icon from "../../assets/trash-icon.png";
import change_icon from "../../assets/change-icon.png";
import pointer_bottom from "../../assets/pointer-bottom.png"
import pointer_right from "../../assets/pointer-right.png"
import check_mark from "../../assets/check_mark.png"
import styles from "./Main.module.css";

const Main = () => {
    const [tasks, setTasks] = useState([]);
    const [endtasks, setEndTasks] = useState([]);
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

    const handleEnd = (index, title, desc) =>{
        const obj = { title: title, desc: desc }
        setEndTasks([...endtasks, obj])
        const newArr = tasks.filter((_, i) => i !== index)
        setTasks(newArr)
    }
    console.log(endtasks);
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
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
                                <button onClick={(e) => {
                                    e.stopPropagation(); handleDelete(index);
                                }} className={styles.btn}>
                                    <img src={trash_icon} alt="icon" />
                                </button>
                                <button onClick={(e) => {
                                    e.stopPropagation(); handleEdit(index)
                                }} className={styles.btn}>
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
                                <h3 className={styles.head}>{task.header}</h3>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
export default Main;
