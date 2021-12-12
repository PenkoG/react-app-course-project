import styles from "./BasicAlert.module.css";

export default function BasicAlert({ message }) {
    return (
        <div className={styles.alert_wrapper}>
            <div className={styles.alert}>
                <p className={styles.message}>
                    {message}
                </p>
            </div>
        </div>
    )
}