import { Link } from "react-router-dom";

import Background from "../Background/Background";
import styles from "./Error.module.css";

export default function Page404() {
    return (
        <>
            <div className={styles.page_container}>
                <h1 className={styles.fourofour_heading}>404</h1>
                <p className={styles.fourofour_p}>Page you are looking for is missing</p>
                <Link className={styles.go_home_link} to="/">
                    <button className={styles.btn}> GO TO HOME</button>
                </Link>
            </div>
            <Background />
        </>
    )
}