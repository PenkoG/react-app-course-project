import RecentSection from "./RecentSection";
import RatingSection from "./RatingSection";
import Background from "../Background/Background";
import styles from "./Home.module.css";

export default function HomePage() {
    return (
        <>
            <div className={styles.home_wrapper}>
                <RecentSection />
                <RatingSection />
            </div>
            <Background />
        </>
    )
}