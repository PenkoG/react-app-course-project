import { Link } from "react-router-dom";

import Background from "../Background/Background";
import styles from "./404.module.css";

export default function Page404() {
    return (
        <>
            <Link to="/">
                <button className={styles.btn}> GO TO HOME</button>
            </Link>
            <Background />
        </>
    )
}