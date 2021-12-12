import RecentSection from "./RecentSection";
import ActionSection from "./ActionSection";
import DramaSection from "./DramaSection";
import Background from "../Background/Background";
import styles from "./Home.module.css";

export default function HomePage() {
    return (
        <>
            <div className={styles.home_wrapper}>
                <RecentSection />
                <ActionSection />
                <DramaSection />
            </div>
            <Background />
        </>
    )
}