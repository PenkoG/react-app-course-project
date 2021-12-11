import styles from "./NoMovies.module.css";

export default function NoMoviesPage() {
    return (
        <div className={styles.no_movies}>
            <h1 className={styles.no_movies_h1}>
                Nothing to show!
            </h1>
        </div>
    )
}