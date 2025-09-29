import styles from "./Home.module.css";
import wallpaper from "../../assets/walpaper.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <img src={wallpaper} alt="фон" className={styles.img} />
        <div className={styles.text_block}>
          <h1>Добро пожаловать в TODO App 🚀</h1>
          <p>
            Планируйте свой день и управляйте задачами легко и удобно.
            Добавляйте новые дела, отмечайте их выполненными и оставайтесь организованными!
          </p>
          <div className={styles.btn_group}>
            <Link to="/registration">
              <button className={styles.btn1}>Перейти к задачам</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
